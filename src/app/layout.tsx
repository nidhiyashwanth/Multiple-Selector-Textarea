import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/common/theme-provider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Shadcn UI Extensions | Enhanced Components for Modern Web Apps",
    template: "%s | Shadcn UI Extensions",
  },
  description:
    "A collection of enhanced and extended Shadcn UI components for building beautiful, accessible, and performant web applications.",
  keywords: [
    "shadcn",
    "ui",
    "components",
    "react",
    "nextjs",
    "tailwind",
    "shadcn-ui",
    "extensions",
    "multiple selector",
    "image badge",
    "tooltip slider",
  ],
  authors: [
    {
      name: "nidhiyashwanth",
      url: "https://github.com/nidhiyashwanth",
    },
  ],
  creator: "nidhiyashwanth",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://shadcn-ui-extensions.vercel.app/",
    title: "Shadcn UI Extensions | Enhanced Components for Modern Web Apps",
    description:
      "A collection of enhanced and extended Shadcn UI components for building beautiful, accessible, and performant web applications.",
    siteName: "Shadcn UI Extensions",
  },
  twitter: {
    card: "summary_large_image",
    title: "Shadcn UI Extensions | Enhanced Components for Modern Web Apps",
    description:
      "A collection of enhanced and extended Shadcn UI components for building beautiful, accessible, and performant web applications.",
    creator: "@nidhiyashwanth",
  },
  metadataBase: new URL("https://shadcn-ui-extensions.vercel.app"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
