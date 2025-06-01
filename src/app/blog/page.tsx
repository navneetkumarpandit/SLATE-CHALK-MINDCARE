import React from 'react';

export default function BlogPage() {
  return (
    <div className="container mx-auto py-12 md:py-20">
      <section className="text-center mb-16">
        <h1 className="text-5xl font-bold text-primary mb-4">Blog</h1>
        <p className="text-xl text-foreground max-w-3xl mx-auto">
          Check back soon for our latest articles and insights on mental well-being.
        </p>
        {/* Placeholder for future blog post listing */}
        {/*
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {/* Blog posts will be loaded here */}
          {/* </div> */}
      </section>
    </div>
  );
}