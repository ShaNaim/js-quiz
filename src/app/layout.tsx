import type { Metadata } from "next";
import { Jersey_10 } from "next/font/google";
import "./globals.css";
const jersey_10 = Jersey_10({
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
      <body className={`${jersey_10.className} min-h-screen`}>{children}</body>
    </html>
  );
}
