import React from 'react';

const AnotherTestimonialsPage: React.FC = () => {
  return (
    <main className="flex-grow container mx-auto px-4 py-8">
      <section className="text-center mb-8">
        <h1 className="text-4xl font-bold mb-4">Another Testimonials Page</h1>
        <p className="text-lg text-gray-700">
          This is a different page for displaying testimonials.
        </p>
      </section>

      {/* Placeholder for testimonial listing */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Testimonial cards or list will go here */}
      </div>
    </main>
  );
};

export default AnotherTestimonialsPage;