import "./globals.css";
import { ReactNode } from "react";
import type { Metadata } from "next";
import { Syne } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";

const syne = Syne({
  subsets: ["latin"],
  display: "block",
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Vikramjeet singh",
  description:
    "Frontend Engineer and Web Designer, currently at UK. Focused on interfaces and experiences, working remotely from Birmingham, UK.",
  generator: "Next.js",
  applicationName: "Vikramjeet singh",
  keywords: [
    "freelance",
    "developer",
    "freelance developer",
    "frontend",
    "react",
    "frontend developer",
    "frontend engineer",
    "creative",
    "creative developer",
    "creative engineer",
    "tech",
    "nigeria",
    "software",
    "software developer",
    "portfolio",
    "frontend developer portfolio",
    "creative developer portfolio",
  ],
  colorScheme: "dark",
  openGraph: {
    title: "Vikramjeet singh",
    description:
      "Frontend Engineer and Web Designer, currently at UK. Focused on interfaces and experiences, working remotely from Birmingham, UK.",
    url: "https://vikramjeetsingh.vercel.app/",
    siteName: "https://vikramjeetsingh.vercel.app/",
    images: [
      {
        url: "public/coverpage.png",
        width: 1200,
        height: 630,
        alt: "Vikramjeet singh",
      },
    ],
    locale: "en-US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Vikramjeet singh",
    description:
      "Frontend Engineer and Web Designer, currently at UK. Focused on interfaces and experiences, working remotely from Birmingham, UK.",
    creator: "Vikramjeet singh",
    creatorId: "1243720976552144897",
    images: [
      "public/coverpage.png",
    ],
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: false,
      noimageindex: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  category: "technology",
};

type RootLayoutProps = {
  children: ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body
        className={`${syne.className} scroll-smooth scrollbar-thin scrollbar-track-[#0E1016] scrollbar-thumb-[#212531]`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}
