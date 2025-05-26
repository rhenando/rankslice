"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function HeroSection() {
  return (
    <section className='relative w-full min-h-[90vh] flex items-center px-6 overflow-hidden bg-background'>
      {/* 🔹 Background Image */}
      <div className='absolute inset-0 z-0'>
        <Image
          src='/hero-illustration.jpeg' // Replace with your actual image
          alt='Web development and SEO background'
          fill
          className='object-cover'
          priority
        />

        {/* 🔹 Optional Gradient Overlay (blue → background) */}
        <div className='absolute inset-0 bg-gradient-to-b from-[#2980b9]/30 to-background' />
      </div>

      {/* 🔸 Foreground Content */}
      <div className='relative z-10 max-w-7xl mx-auto w-full'>
        <div className='grid md:grid-cols-2 gap-10 items-center'>
          {/* ✏️ Text Section */}
          <div>
            <h1 className='text-4xl md:text-5xl font-bold text-black leading-tight mb-6'>
              Build a Website That Ranks and Converts{" "}
              <br className='hidden md:block' /> — Without the Jargon
            </h1>

            <h2 className='text-lg text-gray-800 mb-8 font-normal'>
              We help entrepreneurs and small business owners turn their ideas
              into beautiful, high-performing websites with SEO baked in from
              the start. No fluff. Just results.
            </h2>

            <div className='space-x-4'>
              <Button
                asChild
                aria-label='Schedule a free strategy call'
                className='bg-primary text-primary-foreground hover:opacity-90'
              >
                <Link href='/contact'>Get a Free Strategy Call</Link>
              </Button>
              <Button
                variant='outline'
                asChild
                aria-label='View our portfolio'
                className='border-primary text-primary hover:bg-primary/10'
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
