// src/app/contact/actions.ts
'use server';

import nodemailer from 'nodemailer';
import { z } from 'zod';
import type { AppSettings, SmtpSettings } from '@/lib/types'; // Import AppSettings

const contactFormSchema = z.object({
  name: z.string().min(1, "Name is required.").max(100, "Name cannot exceed 100 characters."),
  email: z.string().email("Invalid email address.").max(100, "Email cannot exceed 100 characters."),
  message: z.string().min(10, "Message must be at least 10 characters.").max(1000, "Message cannot exceed 1000 characters."),
});

export interface ContactFormState {
  success: boolean;
  message: string;
  errors?: {
    name?: string[];
    email?: string[];
    message?: string[];
    general?: string[]; // For non-field specific errors
  };
}

// Default recipient if not configured via SMTP settings
const DEFAULT_TO_EMAIL_ADDRESS = 'info@slatenchalkmindcare.com';
const DEFAULT_FROM_EMAIL_ADDRESS = 'noreply@yourdomain.com'; // Fallback if not in SMTP settings

async function getSmtpConfiguration(): Promise<SmtpSettings | undefined> {
  try {
    // Fetch from the general settings endpoint
    // This fetch needs to be dynamic if API_BASE_URL can change at runtime,
    // or ensure API_BASE_URL is correctly set for server-side fetches.
    const API_BASE_URL = process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:9002';
    const response = await fetch(`${API_BASE_URL}/api/settings`, { cache: 'no-store' });
    if (response.ok) {
      const settings: AppSettings = await response.json();
      if (settings.smtpSettings && settings.smtpSettings.host) { // Check if host is configured as a sign of setup
        return settings.smtpSettings;
      }
    }
  } catch (error) {
    console.error("Failed to fetch SMTP settings for contact form:", error);
  }
  return undefined;
}

export async function sendContactEmailAction(
  prevState: ContactFormState,
  formData: FormData
): Promise<ContactFormState> {
  const rawData = {
    name: formData.get('name'),
    email: formData.get('email'),
    message: formData.get('message'),
  };

  const validatedFields = contactFormSchema.safeParse(rawData);

  if (!validatedFields.success) {
    return {
      success: false,
      message: 'Validation failed. Please check the fields.',
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }

  const { name, email, message } = validatedFields.data;
  const smtpConfig = await getSmtpConfiguration();

  try {
    if (smtpConfig && smtpConfig.host) {
      console.log('--- Attempting to send email using Configured SMTP Settings ---');
      // console.log(`SMTP Host: ${smtpConfig.host}, Port: ${smtpConfig.port}, User: ${smtpConfig.user ? 'Configured' : 'Not Configured'}, Secure: ${smtpConfig.secure}`); // Avoid logging password
      // In a real app, you would use nodemailer or a similar library here.
      // Example:
      // const transporter = nodemailer.createTransport({
      //   host: smtpConfig.host,
      //   port: smtpConfig.port,
      //   secure: smtpConfig.secure,
      //   auth: { user: smtpConfig.user, pass: smtpConfig.pass },
      // });

      const transporter = nodemailer.createTransport({
        host: smtpConfig.host,
        port: smtpConfig.port,
        secure: smtpConfig.secure,
        auth: {
          user: smtpConfig.user,
          pass: smtpConfig.pass,
        },
      });

      const mailOptionsToAdmin = {
        from: smtpConfig.fromEmail || DEFAULT_FROM_EMAIL_ADDRESS, // Use configured 'from' or a default fallback
        to: DEFAULT_TO_EMAIL_ADDRESS, // Always send to the default recipient
        replyTo: email, // Allow replying directly to the user
        subject: `New Contact Form Submission from ${name}`,
        text: `Name: ${name}\nEmail: ${email}\nMessage:\n${message}`,
        html: `
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Message:</strong></p>
          <p>${message.replace(/\n/g, '<br>')}</p>
        `,
      };

      // Send email to the site owner
      const infoAdmin = await transporter.sendMail(mailOptionsToAdmin);
      console.log('Message sent to admin: %s', infoAdmin.messageId);

      // Send confirmation email to the user
      const mailOptionsToUser = {
        from: `SlateNchalk Mindcare <${smtpConfig.fromEmail || DEFAULT_FROM_EMAIL_ADDRESS}>`, // Use a more friendly 'from' for the user
        to: email,
        subject: 'Thank you for contacting Slate & Chalk MindCare',
        text: `Hi ${name},\n\nThank you for reaching out to us. We have received your message and will get back to you as soon as possible.\n\nYour message:\n"${message}"\n\nBest regards,\nThe Slate & Chalk MindCare Team`,
        html: `
          <p>Hi ${name},</p>
          <p>Thank you for reaching out to us. We have received your message and will get back to you as soon as possible.</p>
          <p><strong>Your message:</strong></p>
          <p>${message.replace(/\n/g, '<br>')}</p>
          <p>Best regards,<br>The Slate & Chalk MindCare Team</p>
        `,
      };

      const infoUser = await transporter.sendMail(mailOptionsToUser);
      console.log('Confirmation message sent to user: %s', infoUser.messageId);



    } else {
      console.warn('SMTP settings not configured or host not found. Falling back to console log simulation.');
      // Fallback simulation as before
      console.log(`To: ${DEFAULT_TO_EMAIL_ADDRESS}`);
      console.log(`From: "${name}" <${DEFAULT_FROM_EMAIL_ADDRESS}>`);
      console.log(`Reply-To: "${name}" <${email}>`);
      console.log(`Subject: New Contact Form Submission from ${name}`);
      console.log('--- Message Body ---');
      console.log(message);
      console.log('---------------------------------------------');
      console.log('\n--- Simulating Confirmation Email to User (No SMTP Config) ---');
      console.log(`To: ${email}`);
      console.log(`From: "Slate & Chalk MindCare" <${DEFAULT_FROM_EMAIL_ADDRESS}>`);
      console.log(`Subject: Thank you for contacting Slate & Chalk MindCare`);
      console.log('--- Message Body (Copy) ---');
      console.log(`Hi ${name},\n\nThank you for reaching out to us. We have received your message:\n\n"${message}"\n\nWe will get back to you as soon as possible.\n\nBest regards,\nThe Slate & Chalk MindCare Team`);
      console.log('------------------------------------------');
    }

    await new Promise(resolve => setTimeout(resolve, 1000)); // Simulate delay

    return {
      success: true,
      message: 'Thank you for your message! We will get back to you soon. A copy of your message has been sent to your email address (simulated).',
    };
  } catch (error) {
    console.error('Error sending contact email:', error);
    return {
      success: false,
      message: 'An unexpected error occurred while trying to send your message. Please try again later.',
      errors: { general: ['Failed to send message due to a server error.'] }
    };
  }
}
