export const metadata = {
  title: "Services | Rank Slice",
  description:
    "Explore Rank Slice's web development and SEO services designed to help entrepreneurs build, rank, and grow online with clarity and performance.",
  keywords: [
    "web development services",
    "SEO packages philippines",
    "Next.js developer",
    "technical SEO",
    "freelance web developer",
    "seo for startups",
    "custom websites",
    "seo retainer",
  ],
  openGraph: {
    title: "Our Services | Rank Slice",
    description:
      "From high-performing websites to results-driven SEO, discover how Rank Slice helps your brand grow online.",
    url: "https://rankslice.com/services",
    siteName: "Rank Slice",
    images: [
      {
        url: "https://rankslice.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Rank Slice Services",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Services | Rank Slice",
    description:
      "We build and optimize websites with SEO baked in. Explore Rank Slice’s custom web and SEO packages.",
    images: ["https://rankslice.com/og-image.jpg"],
  },
};

export default function ServicesPage() {
  return (
    <section className='px-6 py-16 max-w-5xl mx-auto'>
      <h1 className='text-4xl font-bold text-center mb-10'>Our Services</h1>

      <div className='space-y-12'>
        {/* Web Development */}
        <div>
          <h2 className='text-2xl font-semibold text-primary mb-2'>
            Custom Web Development
          </h2>
          <p className='text-muted-foreground mb-2'>
            We build beautiful, high-performing websites that reflect your brand
            and convert visitors into clients.
          </p>
          <ul className='list-disc list-inside text-gray-600'>
            <li>Responsive design for all devices</li>
            <li>Fast, clean code with SEO best practices</li>
            <li>Built with scalability in mind (no bloat)</li>
          </ul>
        </div>

        {/* SEO Services */}
        <div>
          <h2 className='text-2xl font-semibold text-primary mb-2'>
            SEO Optimization
          </h2>
          <p className='text-muted-foreground mb-2'>
            Your site won’t just look good — it’ll be findable. We offer real
            SEO that brings real traffic.
          </p>
          <ul className='list-disc list-inside text-gray-600'>
            <li>On-page optimization (titles, structure, speed)</li>
            <li>Keyword research tailored to your niche</li>
            <li>Content strategy and technical audits</li>
          </ul>
        </div>

        {/* Add-on or Retainer Option */}
        <div>
          <h2 className='text-2xl font-semibold text-primary mb-2'>
            Ongoing Support & Growth
          </h2>
          <p className='text-muted-foreground mb-2'>
            Need regular updates or monthly SEO care? We’ve got you covered.
          </p>
          <ul className='list-disc list-inside text-gray-600'>
            <li>Website edits and maintenance</li>
            <li>SEO reporting and keyword tracking</li>
            <li>Blog content writing (optional)</li>
          </ul>
        </div>
      </div>

      <div className='text-center mt-12'>
        <a
          href='https://calendly.com/fernando-rankslice/30min'
          target='_blank'
          rel='noopener'
          className='inline-block bg-[var(--premium-primary)] text-[var(--premium-light)] font-semibold px-6 py-3 rounded-md hover:bg-[var(--premium-primary)]/90 transition'
        >
          Start With a Free Strategy Call
        </a>
      </div>
    </section>
  );
}
