import { collection, getDocs, orderBy, query } from "firebase/firestore";
import { db } from "@/firebase/config";
import Link from "next/link";

export const dynamic = "force-dynamic"; // ensure fresh server data

// ✅ SEO metadata block
export const metadata = {
  title: "Blog | Rank Slice SEO & Web Tips",
  description:
    "Read practical SEO insights, web performance advice, and digital growth strategies from the Rank Slice team — written from real experience.",
  keywords: [
    "seo tips",
    "seo blog",
    "web development blog",
    "digital marketing insights",
    "rank slice blog",
    "seo for small businesses",
    "web performance optimization",
    "content marketing",
  ],
  openGraph: {
    title: "Rank Slice Blog",
    description:
      "Explore SEO tips, web development insights, and growth strategies for startups and small businesses.",
    url: "https://rankslice.com/blog",
    siteName: "Rank Slice",
    images: [
      {
        url: "https://rankslice.com/hero-illustration.jpeg",
        width: 800,
        height: 600,
        alt: "Blog header for SEO and web growth tips",
      },
    ],
    locale: "en_US",
    type: "website", // ✅ FIXED value
  },
  twitter: {
    card: "summary_large_image",
    title: "Blog | Rank Slice SEO & Web Tips",
    description:
      "Real-world tips on SEO, performance, and strategy — from the Rank Slice team.",
    images: ["https://rankslice.com/hero-illustration.jpeg"],
  },
};

// ✅ Firestore data fetch
async function getPosts() {
  const q = query(collection(db, "posts"), orderBy("publishedAt", "desc"));
  const snapshot = await getDocs(q);
  return snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
}

export default async function BlogPage() {
  const posts = await getPosts();

  return (
    <section className='max-w-4xl mx-auto px-6 py-16'>
      <h1 className='text-4xl font-bold mb-6 text-center'>Blog</h1>

      <h2 className='text-muted-foreground text-center mb-12 max-w-xl mx-auto font-normal text-lg'>
        Read tips, guides, and insights on SEO, web performance, and digital
        growth — written from real experience.
      </h2>

      <div className='space-y-8' aria-label='Blog post list'>
        {posts.map((post) => (
          <article
            key={post.id}
            className='p-6 bg-white rounded-lg shadow hover:shadow-md transition'
          >
            <h3 className='text-2xl font-semibold text-primary mb-1'>
              <Link href={`/blog/${post.slug}`}>{post.title}</Link>
            </h3>
            <p className='text-sm text-gray-500 mb-2'>
              {post.publishedAt?.toDate?.().toLocaleDateString() || "—"}
            </p>
            <p className='text-gray-700 mb-4'>{post.excerpt}</p>
            <Link
              href={`/blog/${post.slug}`}
              className='text-sm text-primary font-medium hover:underline'
            >
              Read More →
            </Link>
          </article>
        ))}
      </div>
    </section>
  );
}
