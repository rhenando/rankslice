"use client";

import Link from "next/link";
import Image from "next/image";
import { Facebook, Linkedin, Instagram, SendHorizonal } from "lucide-react";

const navLinks = [
  { label: "Services", href: "/services" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

const Footer = () => {
  return (
    <footer className='w-full bg-[var(--premium-light)] border-t border-[var(--premium-primary)] pt-16 pb-8 px-6'>
      <div className='max-w-7xl mx-auto grid md:grid-cols-4 gap-12'>
        {/* Logo & Tagline */}
        <div className='space-y-4 col-span-1'>
          <Link href='/' className='flex items-center space-x-2'>
            <Image
              src='/logo.svg'
              alt='Rank Slice Logo'
              width={140}
              height={30}
              className='object-contain'
              priority
            />
          </Link>
          <p className='text-sm text-[var(--premium-dark)]/70'>
            Web development & SEO made simple, clear, and effective — so you can
            launch and grow with confidence.
          </p>
        </div>

        {/* Navigation */}
        <div>
          <h4 className='text-sm font-semibold text-[var(--premium-dark)] mb-4'>
            Quick Links
          </h4>
          <ul className='space-y-2 text-sm'>
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className='text-[var(--premium-dark)] hover:text-[var(--premium-primary)] transition'
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* CTA / Contact */}
        <div>
          <h4 className='text-sm font-semibold text-[var(--premium-dark)] mb-4'>
            Work With Us
          </h4>
          <p className='text-sm mb-4 text-[var(--premium-dark)]/70'>
            Have an idea? Let’s talk about how to bring it to life.
          </p>
          <Link
            href='/contact'
            className='inline-block text-[var(--premium-primary)] font-medium hover:underline'
          >
            Book a Free Strategy Call →
          </Link>
          <div className='flex space-x-4 mt-6'>
            <Link
              href='https://facebook.com/'
              target='_blank'
              aria-label='Facebook'
            >
              <Facebook
                className='text-[var(--premium-dark)] hover:text-[var(--premium-primary)] transition'
                size={20}
              />
            </Link>
            <Link
              href='https://linkedin.com/'
              target='_blank'
              aria-label='LinkedIn'
            >
              <Linkedin
                className='text-[var(--premium-dark)] hover:text-[var(--premium-primary)] transition'
                size={20}
              />
            </Link>
            <Link
              href='https://instagram.com/'
              target='_blank'
              aria-label='Instagram'
            >
              <Instagram
                className='text-[var(--premium-dark)] hover:text-[var(--premium-primary)] transition'
                size={20}
              />
            </Link>
          </div>
        </div>

        {/* Newsletter (Placeholder) */}
        <div>
          <h4 className='text-sm font-semibold text-[var(--premium-dark)] mb-4'>
            Newsletter
          </h4>
          <p className='text-sm mb-3 text-[var(--premium-dark)]/70'>
            Stay in the loop. No spam, just good stuff.
          </p>
          <form className='flex items-center border border-[var(--premium-primary)] rounded-lg overflow-hidden'>
            <input
              type='email'
              placeholder='you@example.com'
              className='flex-1 px-4 py-2 bg-[var(--premium-light)] text-sm outline-none text-[var(--premium-dark)]'
              disabled
            />
            <button
              type='button'
              disabled
              className='px-3 text-[var(--premium-dark)] hover:text-[var(--premium-primary)]'
              title='Coming Soon'
            >
              <SendHorizonal size={18} />
            </button>
          </form>
        </div>
      </div>

      {/* Copyright */}
      <div className='mt-12 text-center text-xs text-[var(--premium-dark)]/60'>
        &copy; {new Date().getFullYear()} Rank Slice. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
