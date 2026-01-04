// import "./globals.css";
// import type { ReactNode } from "react";
// import Footer from "@/components/layout/Footer";



// export default function RootLayout({
//   children,
// }: {
//   children: ReactNode;
// }) {
//   return (
//     <html lang="en">
//       <body className="bg-[#faf6f1] text-[#242424] transition-colors duration-300">
//         {children}
//         <Footer />
//       </body>
//     </html>
//   );
// }


import "./globals.css";
import type { ReactNode } from "react";
import Footer from "@/components/layout/Footer";
import { Cormorant_Garamond } from "next/font/google";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400",],
  variable: "--font-cormorant",
});

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${cormorant.variable} font-cormorant bg-[#faf6f1] text-[#242424] transition-colors duration-300`}
      >
        {children}
        <Footer />
      </body>
    </html>
  );
}
