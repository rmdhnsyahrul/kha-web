import { Locale } from "@/i18n-config";
import { Metadata } from "next";
import { Inter } from "next/font/google";
import React from "react";
import "../globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "KHA Mine Management System",
  description: "Cloud-based technology to simplify mining logistics",
  keywords:
    "KHA,Mining,FMS,Fleet Management System,GPS,Fuel Sensor,BAN,Coal,coaling,hauling,mining,Khairin,khairin anwar,batu bara,batu,bara,BBM,fuel,Mining Management System,Mining System,Coaling System,Sistem Tambang",
};

export default async function RootLayout(props: {
  children: React.ReactNode;
  params: Promise<{ lang: Locale }>;
}) {
  const params = await props.params;
  const { children } = props;

  return (
    <html lang={params.lang} className="scroll-smooth overflow-x-hidden">
      <body>{children}</body>
    </html>
  );
}
