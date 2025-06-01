import type { Metadata } from 'next';
import { Montserrat } from 'next/font/google';
import './globals.css';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer'; // Import the Footer component
import { Toaster } from "@/components/ui/toaster";
import PageTransitionLayout from '@/components/layout/PageTransitionLayout';

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
  display: 'swap',
  weight: ['300', '400', '500', '700', '900'],
});

export const metadata: Metadata = {
  title: 'Slatenchalk MindCare',
  description: 'Nurturing minds, fostering well-being. Expert psychological care and counseling services.',
};

const socialLinks = {
  linkedin: 'https://www.linkedin.com/in/yourprofile', // Replace with actual LinkedIn link
  instagram: 'https://www.instagram.com/yourhandle', // Replace with actual Instagram link
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${montserrat.variable}`}>
      <body>
        <div className="flex flex-col min-h-screen">
          <Header />
          <main className="flex-grow">
            <PageTransitionLayout>
              {children}
            </PageTransitionLayout>
          </main>
          
        </div>
        <Footer socialLinks={socialLinks} /> {/* Pass an empty object as socialLinks */}
        <Toaster />
      </body></html>
  );
}
