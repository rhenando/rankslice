"use client";

import { Lightbulb, Brush, TrendingUp, LifeBuoy } from "lucide-react";

export default function HowItWorksSection() {
  return (
    <section className='w-full bg-[var(--premium-light)] py-16 px-6'>
      <div className='max-w-6xl mx-auto text-center'>
        <h2 className='text-3xl md:text-4xl font-bold text-[var(--premium-dark)] mb-4'>
          How It Works
        </h2>
        <p className='text-lg text-[var(--premium-dark)]/70 mb-12'>
          From idea to launch — we make it simple, strategic, and stress-free.
        </p>

        <div className='grid gap-8 md:grid-cols-2 lg:grid-cols-4 text-left'>
          {/* Step 1 */}
          <div className='bg-[var(--premium-light)] p-6 rounded-xl shadow-sm hover:shadow-lg hover:border hover:border-[var(--premium-primary)] transition'>
            <div className='flex items-center space-x-4 mb-4'>
              <Lightbulb size={32} className='text-[var(--premium-primary)]' />
              <h3 className='text-lg font-semibold text-[var(--premium-dark)]'>
                Discover
              </h3>
            </div>
            <p className='text-[var(--premium-dark)]/70'>
              We start with a call to understand your vision, goals, and
              audience — no tech jargon.
            </p>
          </div>

          {/* Step 2 */}
          <div className='bg-[var(--premium-light)] p-6 rounded-xl shadow-sm hover:shadow-lg hover:border hover:border-[var(--premium-primary)] transition'>
            <div className='flex items-center space-x-4 mb-4'>
              <Brush size={32} className='text-[var(--premium-primary)]' />
              <h3 className='text-lg font-semibold text-[var(--premium-dark)]'>
                Design & Build
              </h3>
            </div>
            <p className='text-[var(--premium-dark)]/70'>
              We create a beautiful, responsive website that’s tailored to your
              brand and built to convert.
            </p>
          </div>

          {/* Step 3 */}
          <div className='bg-[var(--premium-light)] p-6 rounded-xl shadow-sm hover:shadow-lg hover:border hover:border-[var(--premium-primary)] transition'>
            <div className='flex items-center space-x-4 mb-4'>
              <TrendingUp size={32} className='text-[var(--premium-primary)]' />
              <h3 className='text-lg font-semibold text-[var(--premium-dark)]'>
                SEO & Launch
              </h3>
            </div>
            <p className='text-[var(--premium-dark)]/70'>
              We optimize your site for Google and launch with confidence —
              fast, secure, and visible.
            </p>
          </div>

          {/* Step 4 */}
          <div className='bg-[var(--premium-light)] p-6 rounded-xl shadow-sm hover:shadow-lg hover:border hover:border-[var(--premium-primary)] transition'>
            <div className='flex items-center space-x-4 mb-4'>
              <LifeBuoy size={32} className='text-[var(--premium-primary)]' />
              <h3 className='text-lg font-semibold text-[var(--premium-dark)]'>
                Support
              </h3>
            </div>
            <p className='text-[var(--premium-dark)]/70'>
              After launch, we stay with you — for tweaks, updates, and growth
              strategies you can trust.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
