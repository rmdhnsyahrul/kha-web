/**
 * main banner (image with linear gradient)
 * animation
 * mobile responsive
 */
import Image from "next/image";
import React from "react";
import { PrimaryButton, SecondaryButton } from "../button";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="content w-screen h-screen">
      <div className="overflow-hidden">
        <Image
          priority
          src={"./images/hero-section-1.jpg"}
          alt="mine management system"
          objectFit="cover"
          fill
          className="absolute inset-0 max-h-screen max-w-screen object-cover motion-scale-loop-[1.1] motion-duration-[10s] motion-ease-linear -z-10"
          unoptimized
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[rgba(10,10,0,0)] to-[rgba(10,10,0,1)] opacity-90" />
      </div>
      <div className="flex items-center h-screen">
        <div className="w-[80%] sm:pl-[80px] sm:pt-[100px] pl-8 relative">
          <h5 className="sm:text-[60px]/[72px] font-bold text-white mb-6 text-[40px]/[52px] motion-preset-slide-left motion-duration-[1s] motion-ease-spring-smooth">
            CLOUD-BASED TECHNOLOGY TO SIMPLIFY MINING LOGISTICS
          </h5>
          <p className="sm:text-[26px]/[32px] text-white font-light text-lg motion-preset-slide-right-sm motion-duration-[2s] motion-ease-spring-smooth">
            Through our patented mine management system, optimize your mining
            operations using data-driven insights from cloud-enabled sensors.
          </p>
          <div className="flex gap-4 mt-[40px]">
            <PrimaryButton>
              <Link href={""}>Learn More</Link>
            </PrimaryButton>
            <div className="motion-preset-pulse-sm">
              <SecondaryButton>
                <Link href={""}>Request Demo</Link>
              </SecondaryButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
