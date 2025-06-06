import React from 'react';

const AnotherTestimonialsPage: React.FC = () => {
  return (
    <main className="flex-grow container mx-auto px-4 py-8">
      <section className="text-center mb-8">        <h1 className="text-4xl font-bold mb-4">Testimonials</h1>
        <p className="text-lg text-gray-700">
          This is what our customer says about us.
        </p>
      </section>

      {/* Placeholder for testimonial listing */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Testimonial Card 1 */}
        <div className="bg-purple-100 text-purple-900 p-6 rounded-lg shadow-lg">
          <p className="text-sm mb-2">⭐⭐⭐⭐⭐</p>
          <p className="italic mb-4 text-lg">"This service was life-changing! Highly recommend."</p>
          <p className="font-semibold">- Navneet Kumar</p>
        </div>

        {/* Testimonial Card 2 */}
        <div className="bg-purple-100 text-purple-900 p-6 rounded-lg shadow-lg">
          <p className="text-sm mb-2">⭐⭐⭐⭐⭐⭒</p> {/* Using '⭒' for half-star */}
          <p className="italic mb-4 text-lg">"Professional and compassionate. A great experience."</p>
          <p className="font-semibold">- Ravi Pandey </p>
        </div>

        {/* Testimonial Card 3 */}
        <div className="bg-purple-100 text-purple-900 p-6 rounded-lg shadow-lg">
          <p className="text-sm mb-2">⭐⭐⭐⭐⭐</p>
          <p className="italic mb-4 text-lg">"Exceeded my expectations. Will definitely use again."</p>
          <p className="font-semibold">- Aman Dwivedi</p>
        </div>

        {/* Testimonial Card 4 */}
        <div className="bg-purple-100 text-purple-900 p-6 rounded-lg shadow-lg">
          <p className="text-sm mb-2">⭐⭐⭐⭐</p>
          <p className="italic mb-4 text-lg">"Very helpful and insightful. Thank you!"</p>
          <p className="font-semibold">- Lavina </p>
        </div>

        {/* Testimonial Card 5 */}
        <div className="bg-purple-100 text-purple-900 p-6 rounded-lg shadow-lg">
          <p className="text-sm mb-2">⭐⭐⭐⭐⭐</p>
          <p className="italic mb-4 text-lg">"A positive and supportive environment."</p>
          <p className="font-semibold">- Rohit singh</p>
        </div>

        {/* Testimonial Card 6 - Adding another one for variety */}
        <div className="bg-purple-100 text-purple-900 p-6 rounded-lg shadow-lg">
          <p className="text-sm mb-2">⭐⭐⭐⭐</p>
          <p className="italic mb-4 text-lg">"Helped me gain clarity and confidence."</p>
          <p className="font-semibold">- Pooja Kumari</p>
        </div>
      </div>
    </main>
  );
};

export default AnotherTestimonialsPage;