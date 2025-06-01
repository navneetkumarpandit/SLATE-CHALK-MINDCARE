
// src/app/admin/testimonials/[id]/edit/page.tsx
import { getTestimonialById } from '@/lib/testimonials-data';
import { notFound, redirect } from 'next/navigation';
import { TestimonialForm } from '@/components/testimonials/TestimonialForm';
import { updateTestimonialAction } from '@/app/admin/testimonials/actions';
import type { Metadata } from 'next';

interface EditTestimonialPageProps {
  params: { id: string };
}

export async function generateMetadata({ params }: EditTestimonialPageProps): Promise<Metadata> {
  const testimonial = await getTestimonialById(params.id);
  if (!testimonial) {
    return { title: 'Testimonial Not Found', robots: { index: false, follow: false } };
  }
  return {
    title: `Edit Testimonial: ${testimonial.name} | Admin`,
    robots: { index: false, follow: false }
  };
}

export default async function EditTestimonialPage({ params }: EditTestimonialPageProps) {
  console.log(`[Edit Testimonial Page /${params.id}] Fetching testimonial.`);
  const testimonial = await getTestimonialById(params.id);

  if (!testimonial) {
      console.log(`[Edit Testimonial Page /${params.id}] Testimonial not found after admin check.`);
    notFound();
  }

  // Bind the ID to the update action
  const updateActionWithId = updateTestimonialAction.bind(null, testimonial.id);

  return (
    <div className="container mx-auto py-12 md:py-20 max-w-3xl">
      <h1 className="text-4xl font-bold text-primary mb-10 text-center">Edit Testimonial</h1>
      <TestimonialForm testimonial={testimonial} action={updateActionWithId} submitButtonText="Update Testimonial" />
    </div>
  );
}

