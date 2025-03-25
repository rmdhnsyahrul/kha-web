import Image from "next/image";
import React from "react";
import { PrimaryButton } from "../button";
import Link from "next/link";
import SectionTitle from "../typography/SectionTitle";
import { getDictionary } from "@/get-dictionary";
import aboutusImage from "../../../../public/images/about-us.jpg";
import dotCorner from "../../../../public/images/dot-corner-5x5.png";

export default function AboutUs({
  dictionary,
}: {
  dictionary: Awaited<ReturnType<typeof getDictionary>>["about"];
}) {
  return (
    <section
      className="content bg-white sm:bg-partial-blue scroll-mt-20 sm:scroll-mt-16 "
      id="about-us"
    >
      <div className="flex flex-row p-5 sm:py-[70px] sm:px-[80px] gap-[81px]">
        <section className="sm:w-1/2 w-full animate-fade-in [animation-timeline:view()] [animation-range-start:cover] [animation-range-end:400px] delay-300">
          <SectionTitle>{dictionary["about-us"]}</SectionTitle>
          <p className="pb-4 font-light text-lg mb-[40px]">
            {dictionary["p-1"]}
            <br />
            <br />
            {dictionary["p-2"]}
            <br />
            <br />
            <span className="text-[#323B60] font-bold">
              {dictionary.tagline}
            </span>
          </p>
          <PrimaryButton>
            <Link href={"#our-technology"}>{dictionary["know-more"]}</Link>
          </PrimaryButton>
        </section>
        <div className="sm:w-1/2 sm:block hidden">
          <div className="flex flex-row gap-[33px]">
            <Image
              src={aboutusImage}
              width={505}
              height={558}
              className="rounded-[40px] animate-slide-in-left [animation-timeline:view()] [animation-range-start:cover] [animation-range-end:500px] z-10"
              alt="about kha data Indonesia - kha mine management system"
              unoptimized
            />
            <div className="flex flex-col justify-between">
              <Image
                src={dotCorner}
                width={88}
                height={88}
                alt=""
                unoptimized
              />
              <Image
                src={dotCorner}
                width={88}
                height={88}
                alt=""
                className="rotate-90"
                unoptimized
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
