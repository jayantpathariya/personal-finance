import type { Metadata } from "next";
import localFont from "next/font/local";

import "./globals.css";

const publicSans = localFont({
  src: "./fonts/PublicSans-VariableFont_wght.ttf",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Personal Finance Tracker",
  description: "A personal finance tracker",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${publicSans.className} bg-beige-100 antialiased`}>
        {children}
      </body>
    </html>
  );
}
