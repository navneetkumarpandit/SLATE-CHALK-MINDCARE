// Required for form handling with useActionState or client-side interactions
'use client';

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Phone, Mail, MapPin } from "lucide-react";
import { useActionState, useEffect, useRef } from "react";
import { useToast } from '@/hooks/use-toast';
import Image from "next/image";
import type { ContactFormState } from './actions'; // Import the state type
import { sendContactEmailAction } from './actions'; // Import the server action

const initialFormState: ContactFormState = { success: false, message: '' };

export default function ContactPage() {
  const [state, formAction] = useActionState(sendContactEmailAction, initialFormState);
  const { toast } = useToast();
  const formRef = useRef<HTMLFormElement>(null); // Ref for resetting the form

  useEffect(() => {
    if (state.message) {
      toast({
        title: state.success ? "Message Sent!" : "Error",
        description: state.message,
        variant: state.success ? "default" : "destructive",
      });
      if (state.success && formRef.current) {
        formRef.current.reset(); // Reset the form on success
      }
    }
  }, [state, toast]);

  return (
    <div className="container mx-auto py-12 md:py-20">
      <section className="text-center mb-16">
        <h1 className="text-5xl font-bold text-primary mb-4">Get In Touch</h1>
        <p className="text-xl text-foreground max-w-2xl mx-auto">
          We're here to help. Reach out to us with any questions or to schedule an appointment.
        </p>
      </section>

      <div className="grid md:grid-cols-2 gap-12 items-start">
        <Card className="shadow-xl">
          <CardHeader>
            <CardTitle className="text-3xl text-primary">Send Us a Message</CardTitle>
          </CardHeader>
          <CardContent>
            <form ref={formRef} action={formAction} className="space-y-6" id="contact-form">
              <div>
                <Label htmlFor="name" className="font-medium">Full Name</Label>
                <Input type="text" id="name" name="name" required className="mt-1" />
                {state.errors?.name && <p className="text-sm text-destructive mt-1">{state.errors.name.join(', ')}</p>}
              </div>
              <div>
                <Label htmlFor="email" className="font-medium">Email Address</Label>
                <Input type="email" id="email" name="email" required className="mt-1" />
                {state.errors?.email && <p className="text-sm text-destructive mt-1">{state.errors.email.join(', ')}</p>}
              </div>
              <div>
                <Label htmlFor="message" className="font-medium">Message</Label>
                <Textarea id="message" name="message" rows={5} required className="mt-1" />
                {state.errors?.message && <p className="text-sm text-destructive mt-1">{state.errors.message.join(', ')}</p>}
              </div>
              {state.errors?.general && <p className="text-sm text-destructive mt-1">{state.errors.general.join(', ')}</p>}
              <Button type="submit" className="w-full bg-accent hover:bg-accent/90 text-accent-foreground" size="lg">
                Send Message
              </Button>
            </form>
          </CardContent>
        </Card>

        <div className="space-y-8">
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl text-primary">Contact Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center">
                <MapPin className="h-6 w-6 text-accent mr-3 shrink-0" />
                <p className="text-foreground">Mumbai,Maharashtra</p>
              </div>
              <div className="flex items-center">
                <Phone className="h-6 w-6 text-accent mr-3 shrink-0" />
                <p className="text-foreground"> +91 (993) 090-8294</p>
              </div>
              <div className="flex items-center">
                <Mail className="h-6 w-6 text-accent mr-3 shrink-0" />
                <p className="text-foreground">info@slatenchalkmindcare.com</p>
              </div>
            </CardContent>
          </Card>

          <div className="rounded-lg overflow-hidden shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d120630.26362627134!2d72.91361312046726!3d19.107007188193798!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c662b9c898d3%3A0xc20553787078a579!2sGhatkopar%2C%20Mumbai%2C%20Maharashtra%20400086%2C%20India!5e0!3m2!1sen!2sus!4v1705300035328!5m2!1sen!2sus"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}