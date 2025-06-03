"use client";
import React from "react";

export default function BlogPage() {
  return (
    <>
      <div className="container mx-auto py-12 md:py-20">
        <h1 className="text-5xl font-bold text-center mb-8 text-primary">
          Blog Post on Mental Health
        </h1>

        <section className="container mx-auto px-4 py-8 pt-0">
          {" "}
          {/* Added pt-0 to reduce top padding in this section */}
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 mt-12">
            {/* Sample Blog Post 1 */}
            <div className="bg-purple-100 text-purple-900 border rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
              <h2 className="text-2xl font-semibold mb-2">
                Blog 1: The Silent Suffering – How Children Communicate
                Emotional Pain Without Words
              </h2>
              <p className="text-sm text-gray-500 mb-4 text-purple-900">
                Published: July 26, 2024
              </p>
              <p className="text-purple-900 text-base">
                Introduction: Children often experience emotional pain that goes
                unnoticed because they can’t always express it verbally. At
                Slate n Chalk, we understand that tantrums, withdrawal, or
                unusual behaviours are often silent cries for help.
              </p>
              <button className="text-blue-600 hover:underline mt-4">
 <a href="/blog/the-silent-suffering.tsx">
                Read More
 </a>
 </button>
            </div>

            {/* Sample Blog Post 2 */}
            <div className="bg-purple-100 text-purple-900 border rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
              <h2 className="text-2xl font-semibold mb-2">
                Sample Blog Post Title 2
              </h2>
              <p className="text-sm text-gray-500 mb-4 text-purple-900">
                Published: July 26, 2024
              </p>
              <p className="text-purple-900 text-base">
                Here is another sample blog post excerpt. This section gives
                readers a glimpse into what they can expect from the full
                article.
              </p>
 <button className="text-blue-600 hover:underline mt-4">
 <a href="/blog/post-two">
                Read More
 </a>
</button>
            </div>

            {/* Sample Blog Post 3 */}
            <div className="bg-purple-100 text-purple-900 border rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
              <h2 className="text-2xl font-semibold mb-2">
                Sample Blog Post Title 3
              </h2>
              <p className="text-sm text-gray-500 mb-4 text-purple-900">
                Published: July 26, 2024
              </p>
              <p className="text-purple-900 text-base">
                A third example of a blog post excerpt. This is just placeholder
                text to demonstrate the layout of the blog listing.
              </p>
              <button className="text-blue-600 hover:underline mt-4">
 <a href="/blog/post-three">
                Read More
 </a>
</button>

            </div>
          </div>
        </section>
      </div>
    </>
  );
}