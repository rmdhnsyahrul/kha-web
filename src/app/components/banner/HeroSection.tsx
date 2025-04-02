/**
 * main banner (image with linear gradient)
 * animation
 * mobile responsive
 */
import Image from "next/image";
import React from "react";
import { PrimaryButton, SecondaryButton } from "../button";
import Link from "next/link";
import { getDictionary } from "@/get-dictionary";
import bannerImage from "../../../../public/images/image-banner-1.jpg";

export default function HeroSection({
  dictionary,
}: {
  dictionary: Awaited<ReturnType<typeof getDictionary>>["hero-section"];
}) {
  return (
    <section className="content w-screen h-screen">
      <div className="overflow-hidden">
        <Image
          priority
          src={bannerImage}
          alt="mine management system"
          objectFit="cover"
          fill
          className="max-h-screen max-w-screen object-cover motion-scale-loop-[1.1] motion-duration-[10s] motion-ease-linear -z-10"
          unoptimized
        />
      </div>
      <div className="flex items-center h-screen">
        <div className="max-[413px]:w-[100%] w-[80%] sm:pl-[80px] sm:pt-[100px] pl-8 max-[413px]:px-4 relative">
          <div className="">
            <h3 className="sm:text-[60px]/[72px] font-bold text-white mb-6 max-[413px]:mb-4 text-[40px]/[52px] motion-preset-slide-left motion-duration-[1s] motion-ease-spring-smooth uppercase">
              {dictionary["title-1"]}
            </h3>
          </div>
          <p className="sm:text-[26px]/[32px] text-white font-light text-lg motion-preset-slide-right-sm motion-duration-[2s] motion-ease-spring-smooth">
            {dictionary["desc-1"]}
          </p>
          <div className="flex gap-4 mt-[40px] max-[413px]:mt-8 ">
            <Link href={"#about-us"}>
              <PrimaryButton>{dictionary["learn-more"]}</PrimaryButton>
            </Link>
            <div className="motion-preset-pulse-sm">
              <Link href={"#contact-us"}>
                <SecondaryButton>{dictionary["request-demo"]}</SecondaryButton>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
