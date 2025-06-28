"use client";

import { Code2, BarChart2 } from "lucide-react";

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
          <div className='bg-[var(--premium-light)] rounded-xl p-6 shadow-sm hover:shadow-lg hover:border hover:border-[var(--premium-primary)] transition'>
            <div className='flex items-center space-x-4 mb-4'>
              <Code2 size={32} className='text-[var(--premium-primary)]' />
              <h3 className='text-xl font-semibold text-[var(--premium-dark)]'>
                Web Development
              </h3>
            </div>
            <p className='text-[var(--premium-dark)]/70 leading-relaxed'>
              We build fast, responsive websites tailored to your idea or
              business — whether you’re launching a brand, selling a service, or
              sharing your expertise. Clean code, great UX, and mobile-first
              design come standard.
            </p>
          </div>

          {/* SEO Optimization */}
          <div className='bg-[var(--premium-light)] rounded-xl p-6 shadow-sm hover:shadow-lg hover:border hover:border-[var(--premium-primary)] transition'>
            <div className='flex items-center space-x-4 mb-4'>
              <BarChart2 size={32} className='text-[var(--premium-primary)]' />
              <h3 className='text-xl font-semibold text-[var(--premium-dark)]'>
                SEO Optimization
              </h3>
            </div>
            <p className='text-[var(--premium-dark)]/70 leading-relaxed'>
              Your website should get found. We use modern, ethical SEO to help
              you rank higher on Google, attract your ideal audience, and turn
              visitors into clients — with transparent strategies you’ll
              actually understand.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
