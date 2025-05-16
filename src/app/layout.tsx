"use client";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Sidebar from "@/ui/Sidebar";
import { usePathname } from "next/navigation";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  const hideSidebar = ["/login", "/register"].includes(pathname);

  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {hideSidebar ? children : <Sidebar>{children}</Sidebar>}
      </body>
    </html>
  );
}
