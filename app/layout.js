import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title:
    "Trigmasoft Private Limited, Digital Marketing, IoT(VAS), Ad-Tech, Gaming, IT Solutions",
  description:
    "Trigmasoft Private Limited is a full-service based Web Agency We help in Strengthening Businesses.",
  authors: [{ name: "Trigmasoft Private Limited" }],
  keywords: [
    "Trigmasoft Private Limited",
    "Digital Marketing",
    "IoT(VAS)",
    "Ad-Tech",
    "Gaming",
    "IT Solutions",
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9135106114306396"
          crossOrigin="anonymous"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
