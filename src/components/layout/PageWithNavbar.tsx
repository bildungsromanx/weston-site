// "use client";

// import Navbar from "@/components/layout/Navbar";

// export default function PageWithNavbar({
//   children,
//   variant = "dark",
// }: {
//   children: React.ReactNode;
//   variant?: "light" | "dark";
// }) {
//   return (
//     <>
//       <Navbar variant={variant} />
//       {children}
//     </>
//   );
// }




"use client";

import Navbar from "@/components/layout/Navbar";

interface PageWithNavbarProps {
  children: React.ReactNode;
  variant?: "light" | "dark";
}

export default function PageWithNavbar({ children, variant = "dark" }: PageWithNavbarProps) {
  return (
    <>
      <Navbar variant={variant} />
      {children}
    </>
  );
}
