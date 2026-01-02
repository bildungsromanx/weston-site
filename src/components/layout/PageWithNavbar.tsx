"use client";

import Navbar from "@/components/layout/Navbar";

export default function PageWithNavbar({
  children,
  variant = "dark",
}: {
  children: React.ReactNode;
  variant?: "light" | "dark";
}) {
  return (
    <>
      <Navbar variant={variant} />
      {children}
    </>
  );
}
