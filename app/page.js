// app/page.jsx

import FinalCTASection from "@/components/home/FinalCTASection";
import HeroSection from "@/components/home/HeroSection";
import HowItWorksSection from "@/components/home/HowItWorksSection";
import ServicesSection from "@/components/home/ServicesSection";
import WhoWeHelpSection from "@/components/home/WhoWeHelpSection";
// import TestimonialsSection from "@/components/home/TestimonialsSection";
import WhyChooseUsSection from "@/components/home/WhyChooseUsSection";

import React from "react";

export default function HomePage() {
  return (
    <div className='flex'>
      {/* Main content */}
      <main className='flex-1'>
        <HeroSection />
        <ServicesSection />
        <HowItWorksSection />
        <WhyChooseUsSection />
        {/* <TestimonialsSection /> */}
        <WhoWeHelpSection />
        <FinalCTASection />
      </main>
    </div>
  );
}
