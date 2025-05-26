import ThankYouPage from "./content";

export const metadata = {
  title: "Thank You | Rank Slice",
  description:
    "Thank you for reaching out to Rank Slice. We've received your message and will respond within one business day.",
  openGraph: {
    title: "Thanks for Contacting Rank Slice",
    description:
      "We appreciate your message. You’ll hear back from us soon — see what we’ve built in the meantime.",
    url: "https://rankslice.com/thank-you",
    siteName: "Rank Slice",
    images: [
      {
        url: "https://rankslice.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Rank Slice Thank You",
      },
    ],
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Thank You | Rank Slice",
    description:
      "We’ll get back to you within one business day. Meanwhile, explore what we've built for others.",
    images: ["https://rankslice.com/og-image.jpg"],
  },
};

export default function ThankYou() {
  return <ThankYouPage />;
}
