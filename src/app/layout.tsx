import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://rocknrolltourplanners.com"),
  title: {
    default: "Rock N Roll Tour Planners | Explore Incredible India",
    template: "%s | Rock N Roll Tour Planners",
  },
  description:
    "Plan your dream vacations across India with Rock N Roll Tour Planners. We offer customized travel packages, curated destinations, and unforgettable experiences for every explorer.",
  keywords: [
    "India tours",
    "travel agency",
    "tour packages",
    "Rock N Roll Tour Planners",
    "holiday planner",
    "honeymoon packages",
    "Kerala trips",
    "travel across India",
  ],
  openGraph: {
    title: "Rock N Roll Tour Planners | Explore Incredible India",
    description:
      "Discover India's best destinations with Rock N Roll Tour Planners. Trusted travel planners offering custom tour packages, curated adventures, and memorable journeys.",
    url: "https://rocknrolltourplanners.com",
    siteName: "Rock N Roll Tour Planners",
    images: [
      {
        url: "/seo.png",
        width: 1200,
        height: 630,
        alt: "Rock N Roll Tour Planners - Travel Across India",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Rock N Roll Tour Planners | Explore Incredible India",
    description:
      "Explore India’s finest destinations with Rock N Roll Tour Planners. Curated packages and personalized trips just for you.",
    images: ["/seo.png"],
  },
  icons: {
    icon: "/seo.png",
    shortcut: "/seo.png",
    apple: "/seo.png",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <Analytics/>
      </body>
    </html>
  );
}
