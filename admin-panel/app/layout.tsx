import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeContext";
import AdminLayout from "@/components/AdminLayout";
export const metadata: Metadata = {
  title: "Venkateswar Engg Works Pvt. Ltd. | Enterprise Admin Portal",
  description:
    "Enterprise Content Management Console for Venkateswar Engg Works Pvt. Ltd.",
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
            __html: ` (function() { try { var saved = localStorage.getItem('vew-admin-theme'); if (saved === 'light') { document.documentElement.classList.add('light'); } else { document.documentElement.classList.add('dark'); } } catch (e) {} })(); `,
          }}
        />
      </head>
      <body className="min-h-screen bg-[var(--admin-bg)] text-[var(--admin-text-primary)] antialiased transition-colors duration-200">
        <ThemeProvider> 
          <AdminLayout>
            {children} 
          </AdminLayout>
        </ThemeProvider>
      </body>
    </html>
  );
}
