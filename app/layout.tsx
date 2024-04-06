import { Inter } from "next/font/google";
import "./globals.css";
import StarsCanvas from "@/components/main/Particle";

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
        <StarsCanvas />
        {children}
      </body>
    </html>
  );
}
