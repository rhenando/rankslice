"use client";

import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section className='w-full bg-background min-h-[90vh] flex items-center px-6'>
      <div className='max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center w-full'>
        {/* Text content */}
        <div>
          <h1 className='text-4xl md:text-5xl font-bold text-foreground leading-tight mb-6'>
            Build a Website That Ranks and Converts{" "}
            <br className='hidden md:block' /> — Without the Jargon
          </h1>

          <p className='text-lg text-muted-foreground mb-8'>
            We help entrepreneurs and small business owners turn their ideas
            into beautiful, high-performing websites with SEO baked in from the
            start. No fluff. Just results.
          </p>

          <div className='space-x-4'>
            <Button
              asChild
              className='bg-primary text-primary-foreground hover:opacity-90'
            >
              <Link href='/contact'>Get a Free Strategy Call</Link>
            </Button>
            <Button
              variant='outline'
              asChild
              className='border-primary text-primary hover:bg-primary/10'
            >
              <Link href='/portfolio'>See Our Work</Link>
            </Button>
          </div>
        </div>

        {/* Hero image */}
        <div className='relative w-full h-72 md:h-96'>
          <Image
            src='/hero-illustration.png'
            alt='Web development and SEO for startups'
            fill
            style={{ objectFit: "contain" }}
            className='rounded-xl'
            priority
          />
        </div>
      </div>
    </section>
  );
}
