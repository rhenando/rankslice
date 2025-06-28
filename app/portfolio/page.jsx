export const metadata = {
  title: "Portfolio | Rank Slice",
  description:
    "Explore our latest work — websites, SEO projects, and custom platforms crafted for clarity, performance, and growth.",
  keywords: [
    "web development portfolio",
    "seo case studies",
    "website projects",
    "rank slice clients",
    "next.js developer work",
    "freelance seo philippines",
  ],
  openGraph: {
    title: "Our Work | Rank Slice Portfolio",
    description:
      "Take a look at the websites and SEO platforms we’ve crafted for real clients — from ecommerce builds to local SEO wins.",
    url: "https://rankslice.com/portfolio",
    siteName: "Rank Slice",
    images: [
      {
        url: "https://rankslice.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Rank Slice Portfolio Projects",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Portfolio | Rank Slice",
    description:
      "See what we've built — Next.js websites, SEO growth, and digital results.",
    images: ["https://rankslice.com/og-image.jpg"],
  },
};

export default function PortfolioPage() {
  return (
    <section className='px-6 py-16 max-w-6xl mx-auto'>
      <h1 className='text-4xl font-bold text-center mb-10'>Our Work</h1>

      <p className='text-muted-foreground text-center max-w-2xl mx-auto mb-16'>
        Here are a few projects we’ve crafted — from custom websites to
        SEO-optimized platforms. Each one designed to grow the client's business
        with clarity, speed, and visibility.
      </p>

      {/* Portfolio Grid */}
      <div className='grid gap-10 md:grid-cols-2 lg:grid-cols-3'>
        {/* Marsos.sa */}
        <div className='rounded-lg shadow hover:shadow-lg transition overflow-hidden bg-white'>
          <img
            src='/portfolio/marsos.png'
            alt='Marsos Ecommerce Preview'
            className='w-full h-48 object-cover'
          />
          <div className='p-5'>
            <h3 className='text-xl font-semibold text-primary mb-1'>
              Marsos.sa – Saudi Product Marketplace
            </h3>
            <p className='text-gray-600 text-sm mb-3'>
              A custom-built B2B ecommerce platform developed from scratch using
              Next.js, Firebase, and Tailwind CSS. Features include
              multi-supplier management, chat-based cart, dynamic pricing, and
              bilingual support.
            </p>
            <a
              href='https://marsos.sa'
              target='_blank'
              className='text-sm font-medium text-primary hover:underline'
              rel='noopener noreferrer'
            >
              Visit Site →
            </a>
          </div>
        </div>

        {/* Cordova Property */}
        <div className='rounded-lg shadow hover:shadow-lg transition overflow-hidden bg-white'>
          <img
            src='/portfolio/cordova.png'
            alt='Cordova Property SEO Preview'
            className='w-full h-48 object-cover'
          />
          <div className='p-5'>
            <h3 className='text-xl font-semibold text-primary mb-1'>
              Cordova Property Management (Dubai)
            </h3>
            <p className='text-gray-600 text-sm mb-3'>
              Full SEO management for a Dubai-based real estate brand. Ranked to
              Page 1, #15 on Google for the highly competitive keyword{" "}
              <span className='italic'>"property management dubai"</span>.
            </p>
            <a
              href='https://cordovaproperty.com'
              target='_blank'
              className='text-sm font-medium text-primary hover:underline'
              rel='noopener noreferrer'
            >
              Visit Site →
            </a>
          </div>
        </div>

        {/* Button & String Garments */}
        <div className='rounded-lg shadow hover:shadow-lg transition overflow-hidden bg-white'>
          <img
            src='/portfolio/bsg.png'
            alt='Button & String Preview'
            className='w-full h-48 object-cover'
          />
          <div className='p-5'>
            <h3 className='text-xl font-semibold text-primary mb-1'>
              Button & String Garments
            </h3>
            <p className='text-gray-600 text-sm mb-3'>
              A corporate uniform brand site with custom product pages and
              mobile-first responsiveness built for conversion and clarity.
            </p>
            <a
              href='https://buttonandstring.com'
              target='_blank'
              className='text-sm font-medium text-primary hover:underline'
              rel='noopener noreferrer'
            >
              Visit Site →
            </a>
          </div>
        </div>
      </div>

      <div className='text-center mt-16'>
        <a
          href='https://calendly.com/fernando-rankslice/30min'
          target='_blank'
          rel='noopener'
          className='inline-block bg-[var(--premium-primary)] text-[var(--premium-light)] font-semibold px-6 py-3 rounded-md hover:bg-[var(--premium-primary)]/90 transition'
        >
          Let’s Build Yours Next
        </a>
      </div>
    </section>
  );
}
