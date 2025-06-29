"use client";

import { useState } from "react";

const faqData = [
  {
    question: "How long does it take to build a website with Rank Slice?",
    answer:
      "Most projects take 3–6 weeks, depending on the size and complexity. We provide clear timelines after your free strategy call.",
  },
  {
    question: "Can you redesign my existing website or only build new ones?",
    answer:
      "We can do both! Whether you need a fresh build or want to improve your current site, we’ll tailor a solution that fits your goals and budget.",
  },
  {
    question: "What’s included in your SEO service?",
    answer:
      "Our SEO includes keyword research, on-page and technical optimization, content improvements, local SEO, and ongoing tracking/reporting. We focus on strategies that get results.",
  },
  {
    question: "Do you offer ongoing website support?",
    answer:
      "Yes. We offer maintenance, updates, and support packages to keep your website secure, fast, and up-to-date after launch.",
  },
  {
    question: "Which industries or regions do you serve?",
    answer:
      "We work with entrepreneurs and businesses in the Philippines, Saudi Arabia, the UAE, and beyond—across real estate, ecommerce, education, B2B, and more.",
  },
  {
    question: "How do I get started with Rank Slice?",
    answer:
      "Simply request a free strategy call using our contact form. We’ll discuss your needs and provide a custom plan with clear next steps.",
  },
  {
    question: "Is your SEO 'white hat' and ethical?",
    answer:
      "Absolutely. We use only ethical, Google-approved SEO practices that focus on long-term rankings and business growth.",
  },
  {
    question: "How much does a website or SEO service cost?",
    answer:
      "Pricing depends on project scope and needs. We offer transparent quotes and flexible packages—contact us for a personalized proposal.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section className='w-full bg-[var(--premium-light)] py-16 px-6'>
      <div className='max-w-3xl mx-auto'>
        <h2 className='text-3xl md:text-4xl font-bold text-[var(--premium-dark)] mb-8 text-center'>
          Frequently Asked Questions
        </h2>
        <div className='space-y-4'>
          {faqData.map((faq, idx) => (
            <div key={idx} className='bg-white rounded-xl shadow group'>
              <button
                className='w-full flex justify-between items-center px-6 py-4 text-lg font-medium text-left text-[var(--premium-dark)] hover:text-[var(--premium-primary)] transition'
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                aria-expanded={openIndex === idx}
                aria-controls={`faq-${idx}`}
              >
                <span>{faq.question}</span>
                <span className='ml-4 text-2xl font-bold select-none'>
                  {openIndex === idx ? "−" : "+"}
                </span>
              </button>
              {openIndex === idx && (
                <div
                  id={`faq-${idx}`}
                  className='px-6 pb-4 text-[var(--premium-dark)]/80 text-base'
                >
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
