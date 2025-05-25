import "./globals.css";
import Header from "@/components/Layout/Header";
import Footer from "@/components/Layout/Footer";
import { Manrope } from "next/font/google";
import { Toaster } from "sonner"; // ✅ Import Toaster

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
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
        url: "https://rankslice.com/og-image.jpg",
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
    creator: "@yourhandle",
    images: ["https://rankslice.com/og-image.jpg"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body
        className={`${manrope.variable} font-sans antialiased flex flex-col min-h-screen`}
      >
        <Toaster richColors position='top-center' /> {/* ✅ Sonner added */}
        <Header />
        <main className='flex-1'>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
