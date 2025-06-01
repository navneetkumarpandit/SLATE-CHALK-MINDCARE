
// src/app/admin/testimonials/new/page.tsx
import { TestimonialForm } from '@/components/testimonials/TestimonialForm';
import { createTestimonialAction } from '@/app/admin/testimonials/actions';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Add New Testimonial | Admin',
  robots: { index: false, follow: false }
};

export default async function NewTestimonialPage() {
  console.log('[New Testimonial Page] Admin verified, rendering form.');
  return (
    <div className="container mx-auto py-12 md:py-20 max-w-3xl">
      <h1 className="text-4xl font-bold text-primary mb-10 text-center">Add New Testimonial</h1>
      <TestimonialForm action={createTestimonialAction} submitButtonText="Add Testimonial" />
    </div>
  );
}

