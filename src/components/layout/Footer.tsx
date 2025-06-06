// src/components/layout/Footer.tsx
'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import Image from 'next/image';

interface SocialLinks {
  linkedin?: string;
  instagram?: string;
  facebook?: string;
}

export function Footer({ socialLinks }: { socialLinks?: SocialLinks }) {
  console.log('Social Links in Footer:', socialLinks);
  const [currentYear, setCurrentYear] = useState<number | null>(null);

  const [isClient, setIsClient] = useState(false); // To track if component has mounted
  useEffect(() => { setIsClient(true); setCurrentYear(new Date().getFullYear()); }, []);

  return (
    <footer className="bg-gray-100 py-12">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Column 1: Site Logo */}
        <div>
          <div className="flex flex-col items-start">
            <Link href="/">
              <Image
                src="/images/SlatenChalk@1x.svg"
                alt="Slatenchalk MindCare Logo"
                width={150} 
                height={50}
                className="mb-2"
                unoptimized={true} // Add unoptimized for SVG
              />
            </Link>
          </div>
        </div>

        {/* Column 2: Company */}
        <div>
          <h3 className="text-lg font-semibold text-foreground mb-4">Company</h3>
          <ul className="space-y-2 text-muted-foreground">
            <li><Link href="/about" className="hover:text-primary transition-colors">About Us</Link></li>
            <li><Link href="/services" className="hover:text-primary transition-colors">Services</Link></li>
            {/* Temporarily hide blog link */}
            {/* <li><Link href="/blog" className="hover:text-primary transition-colors">Blog</Link></li> */}
            <li><Link href="/another-testimonials-page" className="hover:text-primary transition-colors">Testimonials</Link></li>
          </ul>
        </div>

        {/* Column 3: Support */}
        <div>
          <h3 className="text-lg font-semibold text-foreground mb-4">Support</h3>
          <ul className="space-y-2 text-muted-foreground">
            <li><Link href="/contact" className="hover:text-primary transition-colors">Contact Us</Link></li>
            <li><Link href="/privacy-policy" className="hover:text-primary transition-colors">Privacy Policy</Link></li>
            <li><Link href="/terms-of-service" className="hover:text-primary transition-colors">Terms of Service</Link></li>
          </ul>
        </div>

        {/* Column 4: Connect */}
        <div>
          <h3 className="text-lg font-semibold text-foreground mb-4">Connect</h3>
          <ul className="space-y-2 text-muted-foreground">
            {/* Only render social links on the client after mount */}
            {isClient && socialLinks?.linkedin && socialLinks.linkedin.trim() && (
              <li>
                <a
                  href="https://www.linkedin.com/in/slatenchalk"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors"
                >
                  LinkedIn
                </a>
              </li>
            )}
            {isClient && socialLinks?.instagram && socialLinks.instagram.trim() && (
              <li>
                <a
                  href="https://www.instagram.com/slatenchalk_mindcare/?igsh=MThuMzc2dXBlN25lMQ%3D%3D#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors"
                >
                  Instagram
                </a>
              </li>
            )}
            {isClient && socialLinks?.facebook && socialLinks.facebook.trim() && (
              <li>
                <a
                  href="https://www.facebook.com/share/1BZNzrqENS/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors"
                >
                  Facebook
                </a>
              </li>
            )}
          </ul>
        </div>
      </div>

      <div className="container mx-auto px-4 mt-8 text-center text-sm text-muted-foreground">
        {isClient && currentYear ? (
          `© ${currentYear} Slatenchalk Mindcare. All rights reserved.`
        ) : (
          // Fallback for server render and initial client render before currentYear is set
          `© Slatenchalk Mindcare. All rights reserved.`
        )}
      </div>
    </footer>
  );
}
