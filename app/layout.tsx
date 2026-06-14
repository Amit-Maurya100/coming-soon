import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Maurya Textile Engg. Works — Coming Soon",
  description:
    "Maurya Textile Engg. Works — Manufacturer & Repairer of Textile Machinery. Website coming soon.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="h-full w-full overflow-hidden" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
