"use client";

export default function WhoWeHelpSection() {
  return (
    <section className='w-full bg-background py-16 px-6'>
      <div className='max-w-6xl mx-auto text-center'>
        <h2 className='text-3xl md:text-4xl font-bold text-foreground mb-4'>
          Who We Help
        </h2>
        <p className='text-muted-foreground text-lg mb-12'>
          We partner with idea-driven individuals who are ready to launch, grow,
          and succeed online — without the overwhelm.
        </p>

        <div className='grid gap-8 md:grid-cols-3 text-left'>
          {/* Solo Entrepreneurs */}
          <div className='bg-card p-6 rounded-xl shadow-sm hover:shadow-md transition'>
            <h3 className='text-xl font-semibold text-foreground mb-2'>
              Solo Entrepreneurs
            </h3>
            <p className='text-muted-foreground text-sm leading-relaxed'>
              Got a product or service but no website? We help bring your vision
              online with a site that works as hard as you do.
            </p>
          </div>

          {/* Coaches & Consultants */}
          <div className='bg-card p-6 rounded-xl shadow-sm hover:shadow-md transition'>
            <h3 className='text-xl font-semibold text-foreground mb-2'>
              Coaches & Consultants
            </h3>
            <p className='text-muted-foreground text-sm leading-relaxed'>
              Share your message, attract the right audience, and convert
              visitors into clients through smart design and SEO.
            </p>
          </div>

          {/* Small Business Owners */}
          <div className='bg-card p-6 rounded-xl shadow-sm hover:shadow-md transition'>
            <h3 className='text-xl font-semibold text-foreground mb-2'>
              Small Business Owners
            </h3>
            <p className='text-muted-foreground text-sm leading-relaxed'>
              From local shops to online brands, we help you stand out, get
              found, and drive more leads with a site built to perform.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
