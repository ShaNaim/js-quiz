import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import "./globals.css";
const jersey_10 = Open_Sans({
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "Home",
  description: "A Quiz App for JS core topics",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${jersey_10.className} min-h-screen p-4`}>{children}</body>
    </html>
  );
}
