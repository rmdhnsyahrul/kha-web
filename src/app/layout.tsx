import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import MainNav from "./components/nav/MainNav";
import Footer from "./components/sections/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "KHA Mine Management System",
  description: "Cloud-based technology to simplify mining logistics",
  keywords:
    "KHA,Mining,FMS,Fleet Management System,GPS,Fuel Sensor,BAN,Coal,coaling,hauling,mining,Khairin,khairin anwar,batu bara,batu,bara,BBM,fuel,Mining Management System,Mining System,Coaling System,Sistem Tambang",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth overflow-x-hidden">
      <body className={inter.className}>
        <MainNav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
