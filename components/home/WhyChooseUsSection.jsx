"use client";

import { BookOpen, DollarSign, Users, TrendingUp } from "lucide-react";

export default function WhyChooseUsSection() {
  return (
    <section className='w-full bg-[var(--premium-light)] py-16 px-6'>
      <div className='max-w-6xl mx-auto text-center'>
        <h2 className='text-3xl md:text-4xl font-bold text-[var(--premium-dark)] mb-4'>
          Why Choose Rank Slice?
        </h2>
        <p className='text-lg text-[var(--premium-dark)]/70 mb-12'>
          Building your website should feel easy, transparent, and genuinely
          helpful—never overwhelming. Here’s what makes us different:
        </p>

        <div className='grid gap-8 md:grid-cols-2 lg:grid-cols-4 text-left'>
          {/* No Jargon, Just Clarity */}
          <div className='p-6 rounded-xl bg-[var(--premium-light)] shadow-sm hover:shadow-lg hover:border hover:border-[var(--premium-primary)] transition'>
            <div className='flex items-center space-x-4 mb-4'>
              <BookOpen size={32} className='text-[var(--premium-primary)]' />
              <h3 className='text-lg font-semibold text-[var(--premium-dark)]'>
                No Jargon—Just Clarity
              </h3>
            </div>
            <p className='text-[var(--premium-dark)]/70'>
              You’ll never feel lost or confused. We break down each project
              milestone—from kickoff to launch—in clear, simple terms. You
              always know what’s next, what’s needed, and what we’re working on,
              so you can make confident decisions without tech overwhelm.
            </p>
          </div>

          {/* Built for Results */}
          <div className='p-6 rounded-xl bg-[var(--premium-light)] shadow-sm hover:shadow-lg hover:border hover:border-[var(--premium-primary)] transition'>
            <div className='flex items-center space-x-4 mb-4'>
              <TrendingUp size={32} className='text-[var(--premium-primary)]' />
              <h3 className='text-lg font-semibold text-[var(--premium-dark)]'>
                Built for Results
              </h3>
            </div>
            <p className='text-[var(--premium-dark)]/70'>
              We’re obsessed with outcomes—not just pretty websites. Everything
              we do, from design to SEO, is measured against your business
              goals. We deliver sites that rank higher, load faster, and convert
              more visitors into leads or sales.
            </p>
          </div>

          {/* Transparent Pricing */}
          <div className='p-6 rounded-xl bg-[var(--premium-light)] shadow-sm hover:shadow-lg hover:border hover:border-[var(--premium-primary)] transition'>
            <div className='flex items-center space-x-4 mb-4'>
              <DollarSign size={32} className='text-[var(--premium-primary)]' />
              <h3 className='text-lg font-semibold text-[var(--premium-dark)]'>
                Transparent Pricing
              </h3>
            </div>
            <p className='text-[var(--premium-dark)]/70'>
              No hidden fees—ever. Choose from clear package tiers, custom
              quotes, or flat-rate options based on your needs and goals. We
              provide estimates up front and break down exactly what’s included,
              so you’re always in control of your budget.
            </p>
          </div>

          {/* Friendly, Ongoing Support */}
          <div className='p-6 rounded-xl bg-[var(--premium-light)] shadow-sm hover:shadow-lg hover:border hover:border-[var(--premium-primary)] transition'>
            <div className='flex items-center space-x-4 mb-4'>
              <Users size={32} className='text-[var(--premium-primary)]' />
              <h3 className='text-lg font-semibold text-[var(--premium-dark)]'>
                Friendly, Ongoing Support
              </h3>
            </div>
            <p className='text-[var(--premium-dark)]/70'>
              Our relationship doesn’t end at launch. Enjoy free post-launch
              tweaks for 30 days, flexible maintenance packages, and real human
              advice any time you need help. We’re in your corner—long after
              your website goes live.
            </p>
          </div>
        </div>
        <div className='mt-10 text-center'>
          <p className='text-[var(--premium-dark)]/70'>
            <span className='font-semibold'>
              Ready to get a website experience that’s clear, supportive, and
              results-focused?
            </span>{" "}
            <br />
            <a
              href='/contact'
              className='inline-block mt-3 px-6 py-3 rounded-xl bg-[var(--premium-primary)] text-white font-semibold hover:bg-[var(--premium-dark)] transition'
            >
              Get Your Free Strategy Call
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
