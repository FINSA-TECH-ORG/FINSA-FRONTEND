
import {Geist_Mono, Libre_Franklin } from "next/font/google";
import "./globals.css";
import Navbar from "./component/nav";
import Link from "next/link";
import { Footer } from "./component/footer";


const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistMono.variable}`}
      >
    
        <Navbar/>
{children}
<Footer/>
      </body>
    </html>
  );
}
