"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu as MenuIcon, X as XIcon } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const navLinks = [
    { label: "About", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Portfolio", href: "/portfolio" },
    { label: "Blog", href: "/blog" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <header className='sticky top-0 z-50 bg-background border-b border-border shadow-sm'>
      <div className='max-w-7xl mx-auto px-4 py-4 flex items-center justify-between'>
        {/* Logo */}
        <Link href='/' className='flex items-center'>
          <Image
            src='/logo.svg'
            alt='Rank Slice Logo'
            width={160} // ⬅️ increase this for larger logo
            height={26} // optional: control vertical height
            className='object-contain'
            priority
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className='hidden md:flex items-center space-x-6'>
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className='text-muted-foreground hover:text-primary font-medium transition'
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* CTA Button */}
        <div className='hidden md:flex'>
          <Button className='bg-primary text-primary-foreground hover:opacity-90'>
            Get a Free Strategy Call
          </Button>
        </div>

        {/* Mobile Toggle */}
        <button
          className='md:hidden p-2 text-foreground'
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label='Toggle menu'
        >
          {mobileOpen ? <XIcon size={24} /> : <MenuIcon size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className='md:hidden bg-background border-t border-border'>
          <div className='px-4 py-4 space-y-3'>
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className='block text-muted-foreground hover:text-primary font-medium'
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Button className='w-full mt-2 bg-primary text-primary-foreground hover:opacity-90'>
              Get a Free Strategy Call
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
