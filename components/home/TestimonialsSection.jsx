"use client";

import { MessageCircle } from "lucide-react";
import Image from "next/image";

export default function TestimonialsSection() {
  return (
    <section className='w-full bg-[var(--premium-light)] py-16 px-6'>
      <div className='max-w-6xl mx-auto text-center'>
        <h2 className='text-3xl md:text-4xl font-bold text-[var(--premium-dark)] mb-4'>
          What Our Clients Say
        </h2>
        <p className='text-lg text-[var(--premium-dark)]/70 mb-12'>
          Real feedback from founders and business owners we’ve helped grow
          online.
        </p>

        <div className='grid gap-8 md:grid-cols-2 lg:grid-cols-3'>
          {/* Testimonial 1 */}
          <div className='bg-[var(--premium-light)] rounded-xl p-6 shadow-sm hover:shadow-lg hover:border hover:border-[var(--premium-primary)] transition text-left'>
            <div className='flex items-center space-x-4 mb-4'>
              <Image
                src='/avatar1.jpg' // replace with your image or use a placeholder
                alt='Client 1'
                width={48}
                height={48}
                className='rounded-full object-cover'
              />
              <div>
                <p className='font-semibold text-[var(--premium-dark)]'>
                  Jane Rodriguez
                </p>
                <p className='text-sm text-[var(--premium-dark)]/60'>
                  Wellness Coach
                </p>
              </div>
            </div>
            <MessageCircle className='text-[var(--premium-primary)] mb-3' />
            <p className='text-[var(--premium-dark)]/80 text-sm leading-relaxed'>
              “Rank Slice made my website launch feel easy. I finally understood
              what SEO actually means — and now I get regular leads from
              Google!”
            </p>
          </div>

          {/* Testimonial 2 */}
          <div className='bg-[var(--premium-light)] rounded-xl p-6 shadow-sm hover:shadow-lg hover:border hover:border-[var(--premium-primary)] transition text-left'>
            <div className='flex items-center space-x-4 mb-4'>
              <Image
                src='/avatar2.jpg'
                alt='Client 2'
                width={48}
                height={48}
                className='rounded-full object-cover'
              />
              <div>
                <p className='font-semibold text-[var(--premium-dark)]'>
                  Marcus Lee
                </p>
                <p className='text-sm text-[var(--premium-dark)]/60'>
                  Startup Founder
                </p>
              </div>
            </div>
            <MessageCircle className='text-[var(--premium-primary)] mb-3' />
            <p className='text-[var(--premium-dark)]/80 text-sm leading-relaxed'>
              “The process was smooth, and the results were beyond what I
              expected. Within 3 weeks of launch, my startup was ranking
              locally.”
            </p>
          </div>

          {/* Testimonial 3 */}
          <div className='bg-[var(--premium-light)] rounded-xl p-6 shadow-sm hover:shadow-lg hover:border hover:border-[var(--premium-primary)] transition text-left'>
            <div className='flex items-center space-x-4 mb-4'>
              <Image
                src='/avatar3.jpg'
                alt='Client 3'
                width={48}
                height={48}
                className='rounded-full object-cover'
              />
              <div>
                <p className='font-semibold text-[var(--premium-dark)]'>
                  Aisha Karim
                </p>
                <p className='text-sm text-[var(--premium-dark)]/60'>
                  Online Boutique Owner
                </p>
              </div>
            </div>
            <MessageCircle className='text-[var(--premium-primary)] mb-3' />
            <p className='text-[var(--premium-dark)]/80 text-sm leading-relaxed'>
              “I was overwhelmed trying to start my online store. Rank Slice
              explained everything clearly and built a site that actually
              sells.”
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
