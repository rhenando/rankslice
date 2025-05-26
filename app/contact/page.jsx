import ContactForm from "./form"; // Imports the client-side form

export const metadata = {
  title: "Contact Us | Rank Slice",
  description:
    "Got a question or project in mind? Send Rank Slice a message and we’ll get back within 1 business day. Simple, friendly, and efficient communication.",
  keywords: [
    "contact rank slice",
    "talk to web developer",
    "SEO help",
    "contact SEO expert",
    "freelance developer philippines",
    "website project inquiry",
    "seo inquiry form",
  ],
  openGraph: {
    title: "Contact Rank Slice",
    description:
      "Let’s talk about your web or SEO project — no pressure, no jargon.",
    url: "https://rankslice.com/contact",
    siteName: "Rank Slice",
    images: [
      {
        url: "https://rankslice.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Contact Rank Slice",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Us | Rank Slice",
    description:
      "Let us know how we can help. Web development and SEO support done right.",
    images: ["https://rankslice.com/og-image.jpg"],
  },
};

export default function ContactPage() {
  return <ContactForm />;
}
