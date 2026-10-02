import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Nav from "@/components/Nav";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Yaowen Lu, PhD, CFA",
  description:
    "Academic and professional page of Yaowen Lu — Adjunct Lecturer at UQ and Quantitative Developer at Jacobi Strategies.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100 antialiased`}>
        <Nav />
        {children}
      </body>
    </html>
  );
}
