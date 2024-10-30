import type { Metadata } from "next";
import "./globals.css";
import AppWrapper from "./appwrappper";
import { Inter, Poppins, Orbitron } from "next/font/google";

const interFont = Inter({
  subsets: ["latin"],
  variable: "--font-Inter",
});

const poppinsFont = Poppins({
  subsets: ["latin"],
  variable: "--font-Poppins",
  weight: ["400", "500"],
});

const orbitronFont = Orbitron({
  subsets: ["latin"],
  variable: "--font-Orbitron",
});

export const metadata: Metadata = {
  title: "Quokka-X",
  description: "A crowd funding Dapp",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${interFont.variable} ${poppinsFont.variable} ${orbitronFont.variable} antialiased`}
      >
        <AppWrapper>{children}</AppWrapper>
      </body>
    </html>
  );
}
