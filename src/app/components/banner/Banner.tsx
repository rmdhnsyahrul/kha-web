/**
 * main banner (image with linear gradient)
 * animation
 * mobile responsive
 */
import React from "react";
import { PrimaryButton, SecondaryButton } from "../button";
import Link from "next/link";

export default function Banner() {
  return (
    <section className="content">
      <div className="bg-cover bg-no-repeat w-screen h-screen flex flex-col justify-center bg-brand-gradient">
        <div className="w-[80%] sm:pl-[80px] sm:mt-[200px] mt-[100px] pl-8">
          <h5 className="text-[28px]/8 sm:text-[60px]/[72px] font-bold text-white mb-6">
            CLOUD-BASED TECHNOLOGY TO SIMPLIFY MINING LOGISTICS
          </h5>
          <p className="text-lg/6 sm:text-[26px]/[32px] text-white font-light">
            Through our patented mine management system, optimize your mining
            operations using data-driven insights from cloud-enabled sensors.
          </p>
          <div className="flex gap-4 mt-[40px]">
            <PrimaryButton>
              <Link href={""}>Learn More</Link>
            </PrimaryButton>
            <SecondaryButton>
              <Link href={""}>Request Demo</Link>
            </SecondaryButton>
          </div>
        </div>
      </div>
    </section>
  );
}
