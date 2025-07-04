// app/page.jsx

import AboutSection from "@/components/home/AboutSection";
import CaseStudiesSection from "@/components/home/CaseStudiesSection";
import FAQSection from "@/components/home/FAQSection";
import FinalCTASection from "@/components/home/FinalCTASection";
import HeroSection from "@/components/home/HeroSection";
import HowItWorksSection from "@/components/home/HowItWorksSection";
import ServicesSection from "@/components/home/ServicesSection";
import TargetMarketsSection from "@/components/home/TargetMarketsSection";
import WhoWeHelpSection from "@/components/home/WhoWeHelpSection";
// import TestimonialsSection from "@/components/home/TestimonialsSection";
import WhyChooseUsSection from "@/components/home/WhyChooseUsSection";

import React from "react";

// ✅ SEO Metadata
export const metadata = {
  title: "Rank Slice | Web Development & SEO Experts",
  description:
    "Need a high-performing website? We help entrepreneurs in the Philippines, Saudi Arabia, and UAE launch SEO-optimized sites that get results.",
  keywords: [
    "web development",
    "seo services",
    "seo philippines",
    "seo dubai",
    "web design saudi arabia",
    "small business website",
    "seo expert philippines",
  ],
  openGraph: {
    title: "Rank Slice | Web Development & SEO That Converts",
    description:
      "Build a website that ranks and converts — without the jargon. Done-for-you web development and SEO for entrepreneurs worldwide.",
    url: "https://rankslice.com",
    siteName: "Rank Slice",
    images: [
      {
        url: "https://rankslice.com/hero-illustration.jpeg",
        width: 800,
        height: 600,
        alt: "Web development and SEO background",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Rank Slice | SEO-Friendly Web Design",
    description:
      "Turn your idea into a high-performing website with SEO built-in. Trusted by founders in PH, UAE, and KSA.",
    images: ["https://rankslice.com/hero-illustration.jpeg"],
  },
};

export default function HomePage() {
  return (
    <div className='flex'>
      {/* Main content */}
      <main className='flex-1'>
        <HeroSection />
        <ServicesSection />
        <CaseStudiesSection />
        <HowItWorksSection />
        <WhyChooseUsSection />
        {/* <TestimonialsSection /> */}
        <AboutSection />
        <TargetMarketsSection />
        <WhoWeHelpSection />
        <FAQSection />
        <FinalCTASection />
      </main>
    </div>
  );
}
