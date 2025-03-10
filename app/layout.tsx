"use client";
import React from "react";
import "./globals.css";
import Navbar from "@/app/components/navbar/page";
import { usePathname } from "next/navigation";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  console.log("Current pathname:", pathname); // Add this to debug
  const isLoginPage = pathname?.includes("/auth/login");

  return (
    <html lang="en">
      <body className={`antialiased`}>
        {!isLoginPage && <Navbar />}
        {children}
      </body>
    </html>
  );
}
