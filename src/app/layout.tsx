import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Image from "next/image";
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
        <header
          style={{
            padding: "20px",
            textAlign: "center",
            height: "70px",
            backgroundColor: "#032b1eff",
            color: "white",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            position: "fixed",
            top: 0,
            width: "100%",
            zIndex: 1000,
            borderBottom: "1px solid #ffffffc9",
          }}
        >
          <div>
            <div style={{ fontSize: "27px", fontWeight: "900" }}>getHelp</div>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-around",
              alignItems: "center",
              width: "300px",
            }}
          >
            <div style={{ fontSize: "17px", fontWeight: "400" }}>terms</div>
            <div style={{ fontSize: "17px", fontWeight: "400" }}>about</div>
            <div
              style={{
                fontSize: "19px",
                fontWeight: "700",
                backgroundColor: "white",
                borderRadius: "18px",
                padding: "3px  10px",
                cursor: "pointer",
                color: "#032b1eff",
              }}
            >
              Get started
            </div>
          </div>
        </header>
        {children}
        <footer
          style={{
            padding: "20px",
            textAlign: "center",
            backgroundColor: "#14815fff",
            color: "white",
            width: "100%",
            height: "200px",
            marginTop: "50px",
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "20px",
          }}
        >
          <div
            style={{
              fontSize: "27px",
              fontWeight: "900",
              color: "white",
              width: "20rem",
            }}
          >
            getHelp
          </div>
          <div
            style={{ display: "flex", flexDirection: "column", gap: "18px" }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "flex-end",
                gap: "19px",
                alignItems: "center",
              }}
            >
              <div>
                <Image
                  src="/xwhite.png"
                  width={30}
                  height={30}
                  alt="free forever"
                />
              </div>
              <div>
                <Image
                  src="/email.png"
                  width={30}
                  height={30}
                  alt="free forever"
                />
              </div>
              <div>
                <Image
                  src="/whatsapp.png"
                  width={30}
                  height={30}
                  alt="free forever"
                />
              </div>
            </div>
            <div>2023 © All rights reserved | by Mutalibb</div>
          </div>
        </footer>
      </body>
    </html>
  );
}
