"use client";

export default function AboutSection() {
  return (
    <section className='w-full bg-white py-16 px-6'>
      <div className='max-w-3xl mx-auto text-center'>
        <img
          src='/akoitoformal.jpg' // Place your photo in /public/founder.jpg
          alt='Fernando Mendoza, Founder of Rank Slice'
          className='mx-auto w-36 h-36 rounded-full object-cover border-4 border-[var(--premium-primary)] shadow mb-6'
        />
        <h2 className='text-3xl md:text-4xl font-bold text-[var(--premium-dark)] mb-2'>
          Meet Our Founder
        </h2>
        <p className='text-xl font-semibold text-[var(--premium-primary)] mb-2'>
          Fernando Mendoza
        </p>
        <p className='text-lg text-[var(--premium-dark)]/70 mb-6'>
          Founder & CEO of Rank Slice
          <br />
          Web Developer & SEO Expert
        </p>
        <div className='bg-[var(--premium-light)] rounded-xl p-6 mb-6 text-left shadow-sm'>
          <p className='text-[var(--premium-dark)] mb-4'>
            <span className='font-semibold'>“Hi, I’m Fernando!”</span> <br />
            I’m a self-taught web developer and SEO specialist with a passion
            for helping business owners win online. My journey into digital
            started not in a classroom, but with curiosity, late nights, and a
            drive to make things work.
          </p>
          <p className='text-[var(--premium-dark)] mb-4'>
            I learned my craft by building real websites, solving real problems,
            and completing dozens of practical online courses. Every strategy
            and website I deliver at Rank Slice is grounded in hands-on
            experience—no fluff, just what actually moves the needle for your
            business.
          </p>
          <p className='text-[var(--premium-dark)] mb-4'>
            <span className='font-semibold'>My Mission</span>
            <br />I believe everyone—no matter their size or background—deserves
            honest, effective digital solutions. I’m here to make web
            development and SEO clear, straightforward, and genuinely impactful
            for entrepreneurs and growing businesses.
          </p>
          <p className='text-[var(--premium-dark)] font-semibold mb-2'>
            Why work with me?
          </p>
          <ul className='list-disc ml-6 mt-2 text-[var(--premium-dark)]/90'>
            <li>Personal attention and a partnership approach</li>
            <li>No jargon, just clear results</li>
            <li>
              Proven SEO and web strategies that deliver real business growth
            </li>
            <li>
              Continuous learning and adaptation to what works—never standing
              still
            </li>
          </ul>
        </div>
        <div className='mt-8'>
          <a
            href='/contact'
            className='inline-block px-6 py-3 rounded-xl bg-[var(--premium-primary)] text-white font-semibold hover:bg-[var(--premium-dark)] transition'
          >
            Book a Free Strategy Call
          </a>
        </div>
      </div>
    </section>
  );
}
