import "./globals.css";
import type { ReactNode } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export const metadata = {
  title: "Weston Throckmorton",
  description: "dunno yeth",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-[#faf6f1] text-[#242424] transition-colors duration-300">
          <Navbar />
          {children}
          <Footer />
      </body>
    </html>
  );
}
