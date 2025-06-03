// src/app/terms-of-service/page.tsx
import React from 'react';

const TermsOfServicePage = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-6">Terms of Service</h1>
      <div className="prose max-w-none">
        <h2 id="agreement-to-terms" className="mb-4">Agreement to Terms</h2>
        <p className="mb-4">
          By accessing or using the website and services of SLATENCHALK MINDCARE, you agree to be bound by these Terms of Service.
        </p>

        <h2 id="description-of-services" className="mb-4">Description of Services</h2>
        <p className="mb-4">
          SLATENCHALK MINDCARE provides psychological care and counseling services. The specific services offered are described on our website.
        </p>

        <h2 className="mb-4">User Responsibilities</h2>
        <p className="mb-4">
          You agree to use our website and services lawfully and in accordance with these terms. You are responsible for maintaining the confidentiality of any account information.
        </p>

        <h2 className="mb-4">Disclaimer</h2>
        <p className="mb-4">
          The information provided on this website is for informational purposes only and does not constitute medical advice or diagnosis. Our services are not a substitute for professional medical or psychiatric care in cases of emergency or severe mental health conditions. Always consult with a qualified healthcare provider for any health concerns.
        </p>
         <p className="mb-4">
          While we strive to provide accurate and up-to-date information, we make no warranties or representations about the accuracy, reliability, completeness, or timeliness of the content on this site.
        </p>

        <h2>Limitation of Liability</h2>
        <p>
          In no event shall SLATENCHALK MINDCARE be liable for any direct, indirect, incidental, special, or consequential damages arising out of or in connection with your use of our website or services.
        </p>

        <h2 className="mb-4">Governing Law</h2>
        <p className="mb-4">
          These Terms of Service shall be governed by and construed in accordance with the laws of [Your Jurisdiction], without regard to its conflict of law principles.
        </p>

        <h2 className="mb-4">Changes to Terms</h2>
        <p className="mb-4">
          We reserve the right to modify these Terms of Service at any time. Your continued use of the website and services after any such changes constitutes your acceptance of the new terms.
        </p>

        <h2 className="mb-4">Contact Information</h2>
        <p className="mb-4">
          If you have any questions about these Terms of Service, please contact us through our website.
        </p>
      </div>
    </div>
  );
};

export default TermsOfServicePage;
