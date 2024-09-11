import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { BackgroundBeams } from "@/components/ui/background-beams";
import Navbar from "@/components/navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "License Wizard",
  description: "License key manager for your exposoft",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header className="z-[50] sticky top-0 w-full bg-neutral-950">
        <Navbar />
        </header>
        <div className=" bg-neutral-950">
          {/* <BackgroundBeams /> */}
          <div className="max-w-[84rem] w-full mx-auto  relative z-20">
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
