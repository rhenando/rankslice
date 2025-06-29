"use client";

export default function TargetMarketsSection() {
  return (
    <section className='w-full bg-[var(--premium-light)] py-10 px-6'>
      <div className='max-w-4xl mx-auto text-center'>
        <h2 className='text-2xl md:text-3xl font-bold text-[var(--premium-dark)] mb-4'>
          Proudly Serving Clients Internationally
        </h2>
        <div className='flex justify-center gap-6 mb-4'>
          {/* Philippine Flag */}
          <div className='flex flex-col items-center'>
            <span className='text-4xl' role='img' aria-label='Philippines flag'>
              🇵🇭
            </span>
            <span className='mt-2 text-[var(--premium-dark)] font-medium'>
              Philippines
            </span>
          </div>
          {/* Saudi Arabia Flag */}
          <div className='flex flex-col items-center'>
            <span
              className='text-4xl'
              role='img'
              aria-label='Saudi Arabia flag'
            >
              🇸🇦
            </span>
            <span className='mt-2 text-[var(--premium-dark)] font-medium'>
              Saudi Arabia
            </span>
          </div>
          {/* UAE Flag */}
          <div className='flex flex-col items-center'>
            <span className='text-4xl' role='img' aria-label='UAE flag'>
              🇦🇪
            </span>
            <span className='mt-2 text-[var(--premium-dark)] font-medium'>
              UAE
            </span>
          </div>
        </div>
        <p className='text-lg text-[var(--premium-dark)]/70 mb-4'>
          Rank Slice is trusted by entrepreneurs and businesses in the
          Philippines, Saudi Arabia, and the United Arab Emirates—delivering
          high-impact websites and SEO that fit local needs and global
          ambitions.
        </p>
        <div className='mt-8 grid gap-6 md:grid-cols-2'>
          {/* Cordova */}
          <div className='bg-white rounded-xl p-6 shadow border border-gray-100 text-left'>
            <span className='text-[var(--premium-primary)] font-semibold'>
              UAE:
            </span>
            <br />
            <a
              href='https://cordovaproperty.com/'
              target='_blank'
              rel='noopener noreferrer'
              className='font-medium underline hover:text-[var(--premium-dark)]'
            >
              Cordova Property Management
            </a>
            <p className='mt-2 text-[var(--premium-dark)]/70 text-sm'>
              Modern website and SEO for a top Dubai property management firm.
            </p>
          </div>
          {/* Marsos */}
          <div className='bg-white rounded-xl p-6 shadow border border-gray-100 text-left'>
            <span className='text-[var(--premium-primary)] font-semibold'>
              Saudi Arabia:
            </span>
            <br />
            <a
              href='https://marsos.sa/'
              target='_blank'
              rel='noopener noreferrer'
              className='font-medium underline hover:text-[var(--premium-dark)]'
            >
              Marsos Trading
            </a>
            <p className='mt-2 text-[var(--premium-dark)]/70 text-sm'>
              B2B marketplace build for the Saudi industrial sector—fully
              bilingual, mobile-first.
            </p>
          </div>
        </div>
        <p className='mt-8 text-[var(--premium-dark)]/60 text-sm'>
          Looking for a web and SEO partner who understands your market?{" "}
          <a
            href='/contact'
            className='underline hover:text-[var(--premium-primary)]'
          >
            Contact us
          </a>{" "}
          to start your project.
        </p>
      </div>
    </section>
  );
}
