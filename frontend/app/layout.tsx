import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ThemeProvider } from "@/components/ThemeContext";
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title:
    "Venkateswar Engg Works Pvt. Ltd. | Metallurgical Engineering & O&M Leader",
  description:
    "Official corporate website of Venkateswar Engg Works Pvt. Ltd. Leaders in Submerged Arc Furnace O&M, Metal Recovery Plants, Sinter Plants, BOOT/BOO models and Heavy Industrial Project Execution.",
  keywords:
    "Ferro Alloys, Metallurgical Engineering, Submerged Arc Furnace, Furnace O&M, Metal Recovery Plant, MRP, Sinter Plant, BOOT, BOO, Turnkey Projects, Heavy Engineering",
  authors: [{ name: "Venkateswar Engg Works Pvt. Ltd." }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function() { try { var saved = localStorage.getItem('vew-theme'); var prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches; if (saved === 'dark' || (!saved && prefersDark)) { document.documentElement.classList.add('dark'); } else { document.documentElement.classList.add('light'); } } catch (e) {} })();`,
          }}
        />
      </head>
      <body
        className={`${inter.variable} min-h-screen flex flex-col bg-[var(--bg-primary)] text-[var(--text-primary)] antialiased transition-colors duration-200 font-sans`}
      >
        <ThemeProvider>
          <Navbar />
          <main className="flex-grow">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
