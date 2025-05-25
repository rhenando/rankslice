"use client";

import { Code2, BarChart2 } from "lucide-react";

export default function ServicesSection() {
  return (
    <section className='w-full bg-background py-16 px-6'>
      <div className='max-w-6xl mx-auto text-center'>
        <h2 className='text-3xl md:text-4xl font-bold text-foreground mb-4'>
          What We Do
        </h2>
        <p className='text-muted-foreground text-lg mb-12'>
          We help you turn your ideas into high-performing websites that grow
          your business through clear, powerful SEO.
        </p>

        <div className='grid gap-8 md:grid-cols-2 text-left'>
          {/* Web Development */}
          <div className='bg-card rounded-xl p-6 shadow-sm hover:shadow-md transition'>
            <div className='flex items-center space-x-4 mb-4'>
              <Code2 size={32} className='text-primary' />
              <h3 className='text-xl font-semibold text-foreground'>
                Web Development
              </h3>
            </div>
            <p className='text-muted-foreground leading-relaxed'>
              We build fast, responsive websites tailored to your idea or
              business — whether you’re launching a brand, selling a service, or
              sharing your expertise. Clean code, great UX, and mobile-first
              design come standard.
            </p>
          </div>

          {/* SEO Optimization */}
          <div className='bg-card rounded-xl p-6 shadow-sm hover:shadow-md transition'>
            <div className='flex items-center space-x-4 mb-4'>
              <BarChart2 size={32} className='text-primary' />
              <h3 className='text-xl font-semibold text-foreground'>
                SEO Optimization
              </h3>
            </div>
            <p className='text-muted-foreground leading-relaxed'>
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
