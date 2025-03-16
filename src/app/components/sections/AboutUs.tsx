import Image from "next/image";
import React from "react";
import { PrimaryButton } from "../button";
import Link from "next/link";
import SectionTitle from "../typography/SectionTitle";

export default function AboutUs() {
  return (
    <section className="content bg-white sm:bg-partial-blue " id="about-us">
      <div className="flex flex-row p-5 sm:py-[70px] sm:px-[80px] gap-[81px]">
        <section className="sm:w-1/2 w-full animate-fade-in [animation-timeline:view()] [animation-range-start:cover] [animation-range-end:400px] delay-300">
          <SectionTitle>About us</SectionTitle>
          <p className="pb-4 font-light text-lg mb-[40px]">
            PT. KHA Data Indonesia is an Indonesian registered company that
            holds a patent for a cloud-based technology to help mining companies
            optimize their operations through digitalization. Our team consists
            of experts in the mining and information technology fields who have
            extensive experience in the mining industry.
            <br />
            <br />
            We provide mine monitoring solutions that are integrated and can be
            tailored to our clients&apos; needs. Our systems are designed to
            provide full visibility of mining operations, enabling our clients
            to access data in real time and make informed decisions to increase
            efficiency and productivity.
            <br />
            <br />
            <span className="text-[#323B60] font-bold">
              We exist to make #MiningSimplified for you
            </span>
          </p>
          <PrimaryButton>
            <Link href={"#"}>Know More</Link>
          </PrimaryButton>
        </section>
        <div className="sm:w-1/2 sm:block hidden">
          <div className="flex flex-row gap-[33px]">
            <Image
              src={"/images/about-us.jpg"}
              width={505}
              height={558}
              className="rounded-[40px] animate-slide-in-left [animation-timeline:view()] [animation-range-start:cover] [animation-range-end:500px] z-10"
              alt="about kha data Indonesia - kha mine management system"
            />
            <div className="flex flex-col justify-between">
              <Image
                src={"/images/dot-corner-5x5.png"}
                width={88}
                height={88}
                alt=""
              />
              <Image
                src={"/images/dot-corner-5x5.png"}
                width={88}
                height={88}
                alt=""
                className="rotate-90"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
