"use client";

import { Code2, BarChart2 } from "lucide-react";
import Link from "next/link"; // for client-side routing

export default function ServicesSection() {
  return (
    <section className='w-full bg-[var(--premium-light)] py-16 px-6'>
      <div className='max-w-6xl mx-auto text-center'>
        <h2 className='text-3xl md:text-4xl font-bold text-[var(--premium-dark)] mb-4'>
          What We Do
        </h2>
        <p className='text-lg text-[var(--premium-dark)]/70 mb-12'>
          We help you turn your ideas into high-performing websites that grow
          your business through clear, powerful SEO.
        </p>

        <div className='grid gap-8 md:grid-cols-2 text-left'>
          {/* Web Development */}
          <div className='bg-[var(--premium-light)] rounded-xl p-6 shadow-sm hover:shadow-lg hover:border hover:border-[var(--premium-primary)] transition flex flex-col'>
            <div className='flex items-center space-x-4 mb-4'>
              <Code2 size={32} className='text-[var(--premium-primary)]' />
              <h3 className='text-xl font-semibold text-[var(--premium-dark)]'>
                Web Development
              </h3>
            </div>
            <p className='text-[var(--premium-dark)]/70 leading-relaxed flex-1'>
              At Rank Slice, we build custom websites designed to make your
              brand stand out and succeed. Every project starts with a strategy
              session to clarify your vision and goals. We then design a unique,
              user-friendly site—built with the latest tech (React, Next.js,
              WordPress, Shopify, and more)—to ensure top performance and
              scalability.
              <br />
              <br />
              <span className='font-semibold'>Our sites are:</span> <br />–{" "}
              <b>Fast-loading</b> and fully responsive for all devices
              <br />– <b>SEO-ready</b> from day one
              <br />
              – Built with clean, maintainable code and modern UI/UX
              <br />
              <br />
              You get secure hosting, mobile-first layouts, and a collaborative
              process—plus ongoing support and guidance. Whether you’re
              launching a startup, selling online, or growing your service
              business, we make sure your website works as hard as you do.
            </p>
            <div className='mt-6'>
              <Link
                href='/portfolio'
                className='inline-block px-5 py-2 rounded-xl bg-[var(--premium-primary)] text-white font-semibold hover:bg-[var(--premium-dark)] transition'
              >
                See Real Results in Our Portfolio
              </Link>
              <br />
              <Link
                href='/services'
                className='inline-block mt-2 text-[var(--premium-primary)] underline hover:text-[var(--premium-dark)]'
              >
                Learn more about Web Development
              </Link>
            </div>
          </div>

          {/* SEO Optimization */}
          <div className='bg-[var(--premium-light)] rounded-xl p-6 shadow-sm hover:shadow-lg hover:border hover:border-[var(--premium-primary)] transition flex flex-col'>
            <div className='flex items-center space-x-4 mb-4'>
              <BarChart2 size={32} className='text-[var(--premium-primary)]' />
              <h3 className='text-xl font-semibold text-[var(--premium-dark)]'>
                SEO Optimization
              </h3>
            </div>
            <p className='text-[var(--premium-dark)]/70 leading-relaxed flex-1'>
              Being online means nothing if people can’t find you. Our SEO
              services help you climb Google’s rankings and attract your target
              audience. We use proven, ethical strategies—including keyword
              research, on-page and technical SEO, optimized content, and local
              SEO for your market (Philippines, Saudi Arabia, UAE).
              <br />
              <br />
              <span className='font-semibold'>What we deliver:</span>
              <br />
              – In-depth keyword research and SEO strategy
              <br />
              – On-page optimization (meta tags, headings, content structure)
              <br />
              – Technical SEO (speed, schema, mobile usability)
              <br />
              – Regular progress reports and transparent results
              <br />
              <br />
              We demystify SEO—so you always know what’s happening and why. Turn
              your website into a lead-generating machine, build lasting
              authority, and watch your business grow with Rank Slice’s
              results-driven SEO.
            </p>
            <div className='mt-6'>
              <Link
                href='/services'
                className='inline-block px-5 py-2 rounded-xl bg-[var(--premium-primary)] text-white font-semibold hover:bg-[var(--premium-dark)] transition'
              >
                Learn Our SEO Process
              </Link>
              <br />
              <Link
                href='/contact'
                className='inline-block mt-2 text-[var(--premium-primary)] underline hover:text-[var(--premium-dark)]'
              >
                Get a Free SEO Consultation
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
