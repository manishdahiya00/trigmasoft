import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title:
    "Trigmasoft Private Limited, Digital Marketing, IoT(VAS), Ad-Tech, Gaming, IT Solutions",
  description:
    "Trigmasoft Private Limited is a full-service based Web Agency We help in Strengthening Businesses.",
  author: "Trigmasoft Private Limited",
  keywords:
    "Trigmasoft Private Limited,Digital Marketing,IoT(VAS),Ad-Tech, Gaming,IT Solutions",
  favicon: "/favicon.ico",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <meta name="google-adsense-account" content="ca-pub-9135106114306396" />
      </Head>
      <body className={inter.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
