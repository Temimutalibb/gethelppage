import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Track family and friends,| Alert users around incase of emergency",
  description: "A most have  app for every household",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        style={{
          backgroundColor: "#73e6c1ff",
        }}
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <header className="fixed top-0 w-full z-[1000] bg-[#032b1eff] text-white border-b border-white/80 h-[70px] flex items-center justify-between px-5">
          <Link href="/">
            <div className="text-[27px] font-black">getHelp</div>
          </Link>

          <div className="flex items-center gap-5">
            {/* Hide these on small screens */}
            <div className="hidden md:flex items-center gap-5">
              <Link href="/terms" className="text-[17px] font-normal">
                terms
              </Link>
              <Link href="/" className="text-[17px] font-normal">
                about
              </Link>
            </div>

            {/* Always visible */}
            <div className="text-[19px] font-bold bg-white text-[#032b1eff] rounded-[18px] px-[10px] py-[3px] cursor-pointer">
              Get started
            </div>
          </div>
        </header>

        {children}
        <footer className="w-full h-[200px] bg-[#14815fff] text-white mt-[50px] px-5 py-5 flex flex-wrap items-center gap-5 md:justify-between justify-start text-left">
          <div className="flex items-center flex-row gap-[9px] justify-center">
            <Image src="/gethelplogo.png" width={33} height={33} alt="x" />
            <div className="text-[27px] font-black w-[20rem]">getHelp</div>
          </div>

          <div className="flex flex-col gap-[18px]">
            <div className="flex items-center gap-[19px] md:justify-end justify-start">
              <div>
                <Image src="/xwhite.png" width={30} height={30} alt="x" />
              </div>
              <div>
                <Image src="/email.png" width={30} height={30} alt="email" />
              </div>
              <div>
                <Image
                  src="/whatsapp.png"
                  width={30}
                  height={30}
                  alt="whatsapp"
                />
              </div>
            </div>
            <div>
              2023 © All rights reserved |
              <a href="https://x.com/mutalibb">by Mutalibb</a>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
