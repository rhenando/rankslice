// app/layout.jsx
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css"; // Tailwind + keen-slider CSS
import Header from "@/components/Layout/Header";
import Footer from "@/components/Layout/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Rank Slice | Web Development & SEO Made Simple",
  description:
    "Rank Slice helps entrepreneurs and small businesses turn ideas into high-performing websites with built-in SEO — simple, clear, and conversion-focused.",
  keywords: [
    "web development",
    "SEO services",
    "Rank Slice",
    "website design for startups",
    "freelance SEO expert",
    "Next.js developer",
    "small business websites",
    "SEO for entrepreneurs",
    "convert with clarity",
  ],
  authors: [{ name: "Rank Slice" }],
  creator: "Rank Slice",
  themeColor: "#2980b9",
  openGraph: {
    title: "Rank Slice | Web Development & SEO Made Simple",
    description:
      "We build clear, conversion-focused websites with SEO baked in — no jargon, no fluff, just results.",
    url: "https://rankslice.com/",
    siteName: "Rank Slice",
    images: [
      {
        url: "https://rankslice.com/og-image.jpg", // Replace with your actual image
        width: 1200,
        height: 630,
        alt: "Rank Slice – Web Development & SEO",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Rank Slice | Web Development & SEO Made Simple",
    description:
      "Turn your idea into a high-performing website. Rank Slice builds sites that look great and get found.",
    creator: "@yourhandle", // Optional
    images: ["https://https://rankslice.com/og-image.jpg"], // Replace with actual image
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased flex flex-col min-h-screen`}
      >
        <Header />

        <main className='flex-1'>{children}</main>

        <Footer />
      </body>
    </html>
  );
}
