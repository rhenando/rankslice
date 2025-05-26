// app/about/page.jsx

export const metadata = {
  title: "About Us | Rank Slice",
  description:
    "Learn how Rank Slice helps founders and small businesses build websites that rank, convert, and grow — without jargon or fluff.",
  keywords: [
    "about Rank Slice",
    "web development team",
    "SEO team for small business",
    "digital agency Philippines",
    "SEO Dubai",
    "web design KSA",
    "ethical SEO",
    "custom web development",
  ],
  openGraph: {
    title: "About Rank Slice",
    description:
      "We're not just designers or SEO specialists — we’re strategic partners helping you build a digital foundation that grows with you.",
    url: "https://rankslice.com/about",
    siteName: "Rank Slice",
    images: [
      {
        url: "https://rankslice.com/hero-illustration.jpeg",
        width: 800,
        height: 600,
        alt: "Team at Rank Slice",
      },
    ],
    locale: "en_US",
    type: "profile",
  },
  twitter: {
    card: "summary_large_image",
    title: "About Rank Slice",
    description:
      "Meet the team behind Rank Slice — helping founders build clean, high-performing websites with SEO built in.",
    images: ["https://rankslice.com/hero-illustration.jpeg"],
  },
};

export default function AboutPage() {
  return (
    <section className='px-6 py-16 max-w-4xl mx-auto'>
      <h1 className='text-4xl font-bold text-center mb-10'>About Rank Slice</h1>

      <div className='space-y-8 text-gray-700 leading-relaxed'>
        <p>
          At <span className='font-semibold text-primary'>Rank Slice</span>, we
          help idea-driven founders and small businesses bring their visions
          online — without the jargon, overwhelm, or wasted time. Whether you're
          launching your first website or rebuilding one that finally needs to
          rank and convert, we make it simple, powerful, and personal.
        </p>

        {/* Optional subheading for improved semantic structure */}
        <h2 className='text-2xl font-semibold text-black mt-10'>
          What Makes Rank Slice Different
        </h2>

        <p>
          We're not just designers or SEO specialists — we're strategic partners
          who believe in clarity, clean code, and content that actually works.
          From custom development to ethical SEO, we build digital foundations
          that grow with you.
        </p>

        <p>
          What makes us different? We speak human. We explain what’s happening
          under the hood without drowning you in tech talk. We design for
          results, not trends. And we treat every site like it’s our own —
          because your growth is our goal.
        </p>

        <p>
          Whether you're a solo entrepreneur, coach, or growing brand, we're
          here to help you build a web presence that stands out, gets found, and
          drives results — step by step, with clarity and care.
        </p>

        {/* CTA section with aria-label for accessibility */}
        <section className='mt-12 text-center' aria-label='Call to action'>
          <a
            href='/contact'
            className='inline-block bg-primary text-white font-semibold px-6 py-3 rounded hover:bg-primary/90 transition'
          >
            Let’s Work Together
          </a>
        </section>
      </div>
    </section>
  );
}
