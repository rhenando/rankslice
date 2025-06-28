"use client";

import {
  ThumbsUp,
  BookOpen,
  DollarSign,
  Users,
  TrendingUp,
} from "lucide-react";

export default function WhyChooseUsSection() {
  return (
    <section className='w-full bg-[var(--premium-light)] py-16 px-6'>
      <div className='max-w-6xl mx-auto text-center'>
        <h2 className='text-3xl md:text-4xl font-bold text-[var(--premium-dark)] mb-4'>
          Why Choose Rank Slice?
        </h2>
        <p className='text-lg text-[var(--premium-dark)]/70 mb-12'>
          We don’t just build websites — we build clarity, confidence, and
          visibility.
        </p>

        <div className='grid gap-8 md:grid-cols-2 lg:grid-cols-4 text-left'>
          {/* Simple & Clear Process */}
          <div className='p-6 rounded-xl bg-[var(--premium-light)] shadow-sm hover:shadow-lg hover:border hover:border-[var(--premium-primary)] transition'>
            <div className='flex items-center space-x-4 mb-4'>
              <BookOpen size={32} className='text-[var(--premium-primary)]' />
              <h3 className='text-lg font-semibold text-[var(--premium-dark)]'>
                No Jargon. Just Clarity.
              </h3>
            </div>
            <p className='text-[var(--premium-dark)]/70'>
              We explain everything in plain English, so you stay informed and
              in control every step of the way.
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
              Every decision — from design to SEO — is made with your business
              growth in mind.
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
              No surprises, no hidden fees. We keep it honest, clear, and
              value-driven.
            </p>
          </div>

          {/* Friendly Support */}
          <div className='p-6 rounded-xl bg-[var(--premium-light)] shadow-sm hover:shadow-lg hover:border hover:border-[var(--premium-primary)] transition'>
            <div className='flex items-center space-x-4 mb-4'>
              <Users size={32} className='text-[var(--premium-primary)]' />
              <h3 className='text-lg font-semibold text-[var(--premium-dark)]'>
                Ongoing Support
              </h3>
            </div>
            <p className='text-[var(--premium-dark)]/70'>
              We’re here before, during, and after your launch. Need tweaks or
              advice? We’ve got your back.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
