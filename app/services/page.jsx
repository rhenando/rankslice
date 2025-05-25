// /app/services/page.jsx or /pages/services.jsx

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
          href='/contact'
          className='inline-block bg-primary text-white font-semibold px-6 py-3 rounded hover:bg-primary/90 transition'
        >
          Start With a Free Strategy Call
        </a>
      </div>
    </section>
  );
}
