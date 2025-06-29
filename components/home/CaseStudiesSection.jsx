"use client";

export default function CaseStudiesSection() {
  return (
    <section className='w-full bg-white py-16 px-6'>
      <div className='max-w-6xl mx-auto'>
        <h2 className='text-3xl md:text-4xl font-bold text-[var(--premium-dark)] mb-4 text-center'>
          Success Stories
        </h2>
        <p className='text-lg text-[var(--premium-dark)]/70 mb-12 text-center'>
          Real results for real businesses. Explore how Rank Slice helped
          clients in Saudi Arabia and the UAE grow online and boost their leads.
        </p>

        <div className='grid gap-10 md:grid-cols-2'>
          {/* Cordova Property Management */}
          <div className='bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl border border-gray-100 flex flex-col transition'>
            <img
              src='/portfolio/cordova2.png'
              alt='Cordova Property Management Website'
              className='w-full h-48 object-cover'
            />
            <div className='flex-1 flex flex-col p-6'>
              <h3 className='text-xl font-semibold text-[var(--premium-primary)] mb-2'>
                Cordova Property Management (UAE)
              </h3>
              <p className='text-[var(--premium-dark)]/80 mb-2'>
                <b>Project Overview:</b> Boosted Google rankings and qualified
                leads for a Dubai property management firm—without a full
                redesign.
              </p>
              <ul className='mb-2 ml-4 list-disc text-[var(--premium-dark)]/70 text-sm'>
                <li>
                  <b>Challenge:</b> Low organic rankings, thin content, and
                  missed local search opportunities.
                </li>
                <li>
                  <b>Solution:</b> Targeted on-page SEO—content rewrites,
                  keyword research, meta tags, internal linking, and image
                  optimization.
                </li>
                <li>
                  <b>Result:</b> Higher rankings for “property management in
                  Dubai,” more organic traffic, and a noticeable jump in
                  qualified inquiries.
                </li>
              </ul>
              <a
                href='https://cordovaproperty.com/'
                target='_blank'
                rel='noopener noreferrer'
                className='mt-auto inline-block text-[var(--premium-primary)] font-medium underline hover:text-[var(--premium-dark)]'
              >
                View Project
              </a>
            </div>
          </div>

          {/* Marsos Trading */}
          <div className='bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl border border-gray-100 flex flex-col transition'>
            <img
              src='/portfolio/marsos.png'
              alt='Marsos Trading Website'
              className='w-full h-48 object-cover'
            />
            <div className='flex-1 flex flex-col p-6'>
              <h3 className='text-xl font-semibold text-[var(--premium-primary)] mb-2'>
                Marsos Trading (Saudi Arabia)
              </h3>
              <p className='text-[var(--premium-dark)]/80 mb-2'>
                <b>Project Overview:</b> Built a bilingual, mobile-first B2B
                marketplace for Saudi industrial products, empowering both
                suppliers and buyers.
              </p>
              <ul className='mb-2 ml-4 list-disc text-[var(--premium-dark)]/70 text-sm'>
                <li>
                  <b>Challenge:</b> Needed supplier self-service, B2B features
                  (RFQs, price tiers), Arabic/English, and KSA legal compliance.
                </li>
                <li>
                  <b>Solution:</b> Custom platform on Next.js + Firebase,
                  real-time chat, admin dashboard, multi-tier pricing, and
                  VAT/CR compliance.
                </li>
                <li>
                  <b>Result:</b> Launched Saudi’s first dedicated B2B industrial
                  marketplace—streamlined procurement, live suppliers, and
                  positive industry feedback.
                </li>
              </ul>
              <a
                href='https://marsos.sa/'
                target='_blank'
                rel='noopener noreferrer'
                className='mt-auto inline-block text-[var(--premium-primary)] font-medium underline hover:text-[var(--premium-dark)]'
              >
                View Project
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
