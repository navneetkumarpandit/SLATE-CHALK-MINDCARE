
import { BlogPostForm } from '@/components/blog/BlogPostForm';
import { createPost } from '@/app/blog/actions';
import type { Metadata } from 'next';
import { redirect } from 'next/navigation';

export const metadata: Metadata = {
  title: 'Create New Post | Slate & Chalk MindCare Blog',
  robots: { // Prevent search engines from indexing the new post page
    index: false,
    follow: false,
  }
};

export default async function NewPostPage() {
  return (
    <div className="container mx-auto py-12 md:py-20 max-w-3xl">
      <h1 className="text-4xl font-bold text-primary mb-10 text-center">Create New Post</h1>
      <BlogPostForm action={createPost} submitButtonText="Create Post" />
    </div>
  );
}
