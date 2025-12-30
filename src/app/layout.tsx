import "./globals.css";
import type { ReactNode } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ClientWrapper from "@/components/ClientWrapper";

export const metadata = {
  title: "Client Website",
  description: "Modern website built with Next.js",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
<body className="bg-white text-black dark:bg-black dark:text-white transition-colors duration-300">
        <ClientWrapper>
          <Navbar />
          {children}
          <Footer />
        </ClientWrapper>
      </body>
    </html>
  );
}
