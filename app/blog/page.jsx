"use client";

import Link from "next/link";

export default function BlogPage() {
  const samplePosts = [
    {
      slug: "seo-for-small-business",
      title: "SEO for Small Businesses: What Actually Works in 2025",
      excerpt:
        "Learn the top practical SEO tactics small business owners can use to start ranking without wasting money.",
    },
    {
      slug: "web-design-mistakes",
      title: "5 Common Website Mistakes (And How to Fix Them)",
      excerpt:
        "Don't let simple errors tank your website performance. Here's what to avoid — and how to do it right.",
    },
  ];

  return (
    <section className='px-6 py-16 max-w-5xl mx-auto'>
      <h1 className='text-4xl font-bold text-center mb-6'>
        Insights & Articles
      </h1>
      <p className='text-muted-foreground text-center mb-12'>
        Tips, tutorials, and strategies on SEO, web development, and growing
        your online presence.
      </p>

      <div className='grid gap-10 md:grid-cols-2'>
        {samplePosts.map((post) => (
          <div
            key={post.slug}
            className='rounded-lg border border-border p-6 bg-white hover:shadow transition'
          >
            <h2 className='text-2xl font-semibold text-primary mb-2'>
              {post.title}
            </h2>
            <p className='text-muted-foreground mb-4'>{post.excerpt}</p>
            <Link
              href={`/blog/${post.slug}`}
              className='text-sm font-medium text-primary hover:underline'
            >
              Read More →
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}
