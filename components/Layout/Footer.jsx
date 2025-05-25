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
    <footer className='w-full bg-background border-t border-border text-muted-foreground pt-16 pb-8 px-6'>
      <div className='max-w-7xl mx-auto grid md:grid-cols-4 gap-12'>
        {/* Logo & Tagline */}
        <div className='space-y-4 col-span-1'>
          <Link href='/' className='flex items-center space-x-2'>
            <span className='text-lg font-semibold text-foreground'>
              <span className='line-through decoration-[#2980b9]'>Rank</span>{" "}
              Slice
            </span>
          </Link>
          <p className='text-sm'>
            Web development & SEO made simple, clear, and effective — so you can
            launch and grow with confidence.
          </p>
        </div>

        {/* Navigation */}
        <div>
          <h4 className='text-sm font-semibold text-foreground mb-4'>
            Quick Links
          </h4>
          <ul className='space-y-2 text-sm'>
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className='hover:text-primary transition'
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* CTA / Contact */}
        <div>
          <h4 className='text-sm font-semibold text-foreground mb-4'>
            Work With Us
          </h4>
          <p className='text-sm mb-4'>
            Have an idea? Let’s talk about how to bring it to life.
          </p>
          <Link
            href='/contact'
            className='inline-block text-primary font-medium hover:underline'
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
                className='text-muted-foreground hover:text-primary'
                size={20}
              />
            </Link>
            <Link
              href='https://linkedin.com/'
              target='_blank'
              aria-label='LinkedIn'
            >
              <Linkedin
                className='text-muted-foreground hover:text-primary'
                size={20}
              />
            </Link>
            <Link
              href='https://instagram.com/'
              target='_blank'
              aria-label='Instagram'
            >
              <Instagram
                className='text-muted-foreground hover:text-primary'
                size={20}
              />
            </Link>
          </div>
        </div>

        {/* Newsletter (Placeholder) */}
        <div>
          <h4 className='text-sm font-semibold text-foreground mb-4'>
            Newsletter
          </h4>
          <p className='text-sm mb-3'>
            Stay in the loop. No spam, just good stuff.
          </p>
          <form className='flex items-center border border-input rounded-lg overflow-hidden'>
            <input
              type='email'
              placeholder='you@example.com'
              className='flex-1 px-4 py-2 bg-background text-sm outline-none'
              disabled
            />
            <button
              type='button'
              disabled
              className='px-3 text-muted-foreground hover:text-primary'
              title='Coming Soon'
            >
              <SendHorizonal size={18} />
            </button>
          </form>
          <p className='text-xs text-muted-foreground mt-1 italic'>
            Coming soon
          </p>
        </div>
      </div>

      {/* Copyright */}
      <div className='mt-12 text-center text-xs text-muted-foreground'>
        &copy; {new Date().getFullYear()} Rank Slice. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
