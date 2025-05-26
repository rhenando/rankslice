import { db } from "@/firebase/config";
import { collection, query, where, getDocs } from "firebase/firestore";
import { notFound } from "next/navigation";
import Image from "next/image";
import parse from "html-react-parser";

// ✅ Metadata generator for dynamic SEO
export async function generateMetadata({ params }) {
  const { slug } = params;
  const post = await fetchPost(slug);
  if (!post) return notFound();

  const imageUrl = post.coverImage || "https://rankslice.com/og-image.jpg";

  return {
    title: `${post.title} | Rank Slice`,
    description:
      post.excerpt ||
      "Read more on SEO, web development, and growth tips from Rank Slice.",
    openGraph: {
      title: post.title,
      description: post.excerpt || "",
      url: `https://rankslice.com/blog/${slug}`,
      type: "article",
      siteName: "Rank Slice",
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt || "",
      images: [imageUrl],
    },
  };
}

// ✅ Firestore query
async function fetchPost(slug) {
  if (typeof slug !== "string" || !slug.trim()) return null;

  const q = query(collection(db, "posts"), where("slug", "==", slug));
  const snapshot = await getDocs(q);
  if (snapshot.empty) return null;

  return { id: snapshot.docs[0].id, ...snapshot.docs[0].data() };
}

// ✅ Page component
export default async function BlogPostPage({ params }) {
  const { slug } = params;
  const post = await fetchPost(slug);
  if (!post) return notFound();

  return (
    <article className='max-w-3xl mx-auto px-6 py-16'>
      {post.coverImage && (
        <div className='relative w-full h-64 mb-8 rounded overflow-hidden'>
          <Image
            src={post.coverImage}
            alt={post.title}
            fill
            className='object-cover'
            priority
          />
        </div>
      )}

      <h1 className='text-4xl font-bold mb-4'>{post.title}</h1>
      <p className='text-gray-500 text-sm mb-8'>
        {post.publishedAt?.toDate?.().toLocaleDateString() || "Unpublished"}
      </p>

      <div className='prose max-w-none prose-p:leading-relaxed prose-headings:mt-8 prose-headings:mb-4 prose-img:rounded'>
        {parse(post.content)}
      </div>
    </article>
  );
}
