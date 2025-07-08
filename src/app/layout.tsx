import type { Metadata } from "next";
import "../styles/globals.css";

export const metadata: Metadata = {
  title: "Slerate — Accelerate Your Sales at Lightning Speed",
  description:
    "Boost your sales productivity with real-time insights, smart automation, and seamless integrations. Join 15,000+ teams scaling faster with Slerate.",
  keywords: [
    "Sales Automation",
    "CRM",
    "Sales Platform",
    "SaaS",
    "Sales Productivity",
    "Real-Time Analytics",
    "Sales Team Tool",
    "Slerate",
  ],
  metadataBase: new URL("https://slerate-sales-boost-green.vercel.app"),
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
    other: [
      {
        rel: "mask-icon",
        url: "/safari-pinned-tab.svg",
        color: "#5bbad5",
      },
    ],
  },
  manifest: "/site.webmanifest",
  themeColor: "#ffffff",
  openGraph: {
    title: "Slerate — Accelerate Your Sales at Lightning Speed",
    description:
      "Take your sales team to the next level with Slerate Sales Boost. Real-time insights, automation, and intelligent outreach built for growth.",
    url: "https://slerate-sales-boost-green.vercel.app",
    siteName: "Slerate",
    images: [
      {
        url: "https://slerate-sales-boost-green.vercel.app/assets/slerate-logo.webp",
        width: 1200,
        height: 630,
        alt: "Slerate OpenGraph Preview",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Slerate — Accelerate Your Sales at Lightning Speed",
    description:
      "Smarter sales start here. Join 15,000+ teams scaling with Slerate.",
    images: [
      "https://slerate-sales-boost-green.vercel.app/assets/slerate-logo.webp",
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>

      <body className={` antialiased`}>{children}</body>
    </html>
  );
}
