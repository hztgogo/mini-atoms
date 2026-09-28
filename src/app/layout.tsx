import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Mini Atoms",
  description: "AI App Builder",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="zh">
      <body className="min-h-screen bg-white font-sans antialiased">
        {children}
      </body>
    </html>
  );
}