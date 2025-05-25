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

        {/* Button & String Garments (optional 3rd item) */}
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
          href='/contact'
          className='inline-block bg-primary text-white font-semibold px-6 py-3 rounded hover:bg-primary/90 transition'
        >
          Let’s Build Yours Next
        </a>
      </div>
    </section>
  );
}
