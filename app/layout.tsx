import React, { Suspense } from "react";
import { Inter } from "next/font/google";
import "./globals.css";
import StarsCanvas from "@/components/main/Particle";
import dynamic from "next/dynamic";

const NavbarWithNoSSR = dynamic(() => import("@/components/main/Navbar"), {
  ssr: false,
  loading: () => <p>Loading...</p>,
});

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Maximus Portofolio",
  description: "Website Portofolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body
        className={`${inter.className} bg-[#030014] overflow-y-scroll overflow-x-hidden`}
      >
        <Suspense fallback={<div>Loading...</div>}>
          <NavbarWithNoSSR />
        </Suspense>
        <StarsCanvas />
        {children}
      </body>
    </html>
  );
}
