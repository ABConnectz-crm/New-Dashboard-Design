import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/contexts/ThemeContext";
import { Sidebar } from "@/components/Sidebar";
import { TopNav } from "@/components/TopNav";

export const metadata: Metadata = {
  title: "ERP Dashboard - Lead Management System",
  description: "Enterprise-grade ERP system with lead management, campaigns, and automation",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider>
          <div className="flex min-h-screen">
            {/* Sidebar - Fixed Left */}
            <Sidebar />

            {/* Main Content Area */}
            <div className="flex-1 md:ml-20">
              {/* Top Navigation */}
              <TopNav />

              {/* Page Content */}
              <main className="min-h-[calc(100vh-80px)]">
                {children}
              </main>
            </div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
