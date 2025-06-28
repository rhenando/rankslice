"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function FinalCTASection() {
  return (
    <section className='w-full bg-[var(--premium-primary)] text-[var(--premium-light)] py-20 px-6'>
      <div className='max-w-4xl mx-auto text-center'>
        <h2 className='text-3xl md:text-4xl font-bold mb-4'>
          Ready to Launch a Website That Ranks and Converts?
        </h2>
        <p className='text-lg md:text-xl text-[var(--premium-light)]/90 mb-8'>
          Let’s take your idea and turn it into something powerful — a site that
          actually works for your business.
        </p>
        <Button
          asChild
          className='bg-[var(--premium-light)] text-[var(--premium-primary)] border border-[var(--premium-primary)] hover:bg-[var(--premium-light-soft)] px-6 py-3 text-lg font-semibold transition'
        >
          <Link href='/contact'>Book a Free Strategy Call</Link>
        </Button>
      </div>
    </section>
  );
}
