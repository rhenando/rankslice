"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function HeroSection() {
  return (
    <section className='relative w-full min-h-[90vh] flex items-center px-6 overflow-hidden bg-[var(--premium-light)]'>
      {/* 🔹 Background Image */}
      <div className='absolute inset-0 z-0'>
        <Image
          src='/hero-illustration.jpeg' // Replace with your actual image
          alt='Web development and SEO background'
          fill
          className='object-cover'
          priority
        />

        {/* 🔹 Optional Gradient Overlay (brand blue → white) */}
        <div className='absolute inset-0 bg-gradient-to-b from-[var(--premium-primary)]/30 to-[var(--premium-light)]' />
      </div>

      {/* 🔸 Foreground Content */}
      <div className='relative z-10 max-w-7xl mx-auto w-full'>
        <div className='grid md:grid-cols-2 gap-10 items-center'>
          {/* ✏️ Text Section */}
          <div>
            <h1 className='text-4xl md:text-5xl font-bold text-[var(--premium-dark)] leading-tight mb-6'>
              Build a Website That Ranks and Converts{" "}
              <br className='hidden md:block' /> — Without the Jargon
            </h1>

            <h2 className='text-lg text-[var(--premium-dark)]/80 mb-8 font-normal'>
              We help entrepreneurs and small business owners turn their ideas
              into beautiful, high-performing websites with SEO baked in from
              the start. No fluff. Just results.
            </h2>

            <div className='space-x-4'>
              <Button
                asChild
                aria-label='Schedule a free strategy call'
                className='bg-[var(--premium-primary)] text-[var(--premium-light)] hover:opacity-90'
              >
                <Link href='/contact'>Get a Free Strategy Call</Link>
              </Button>
              <Button
                variant='outline'
                asChild
                aria-label='View our portfolio'
                className='border-[var(--premium-primary)] text-[var(--premium-primary)] hover:bg-[var(--premium-primary)]/10'
              >
                <Link href='/portfolio'>See Our Work</Link>
              </Button>
            </div>
          </div>

          {/* Placeholder Right Column (optional for layout balance) */}
          <div className='hidden md:block' />
        </div>
      </div>
    </section>
  );
}
