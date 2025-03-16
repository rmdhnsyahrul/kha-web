import Image from "next/image";
import React from "react";
import { PrimaryButton } from "../button";
import Link from "next/link";
import SectionTitle from "../typography/SectionTitle";

export default function OurServices() {
  return (
    <section className="content bg-white py-5 sm:py-[40px] " id="our-services">
      <div className="px-5 sm:px-[80px]">
        <SectionTitle>Our Services</SectionTitle>
      </div>
      <div className="hidden sm:block sm:bg-partial-blue-left mt-[40px] px-[80px] py-[67px] animate-fade-in [animation-timeline:view()] [animation-range-start:cover] [animation-range-end:500px]">
        <div className="flex flex-row gap-[33px] animate-fade-in [animation-timeline:view()] [animation-range-start:cover] [animation-range-end:500px]">
          <div className="flex flex-col justify-between animate-slide-in-left [animation-timeline:view()] [animation-range-start:cover] [animation-range-end:500px] delay-75">
            <Image
              src={"/images/dot-corner-5x5.png"}
              width={88}
              height={88}
              alt=""
              className="-rotate-90"
            />
            <Image
              src={"/images/dot-corner-5x5.png"}
              width={88}
              height={88}
              alt=""
              className="-rotate-180"
            />
          </div>
          <div className="flex-1">
            <Image
              src={"/images/our-services.jpg"}
              width={505}
              height={558}
              className="w-full h-[500px] object-cover rounded-[40px] animate-slide-in-right [animation-timeline:view()] [animation-range-start:cover] [animation-range-end:500px] delay-100"
              alt="about kha data Indonesia - kha mine management system"
            />
          </div>
        </div>
      </div>
      <section className="p-5 sm:px-[80px] sm:py-[56px] ">
        <div className="grid grid-flow-row sm:grid-cols-5 gap-6">
          {[
            [
              "/images/ic-on-specs.svg",
              "On Specs",
              "With real-time tracking, our clients will be able to evaluate the specifications of mining production results",
            ],
            [
              "/images/ic-on-stock.svg",
              "On Stock",
              "Our cloud-based systems will enable our clients to properly estimate mining reserves at any given time.",
            ],
            [
              "/images/ic-on-schedule.svg",
              "On Schedule",
              "Through our integrated systems, our clients will be track the delivery of the mining products across the value chain.",
            ],
            [
              "/images/ic-on-budget.svg",
              "On Budget",
              "Through our customizable financial models, our clients will be able to accurately estimate fuel, labor and other miningrelated costs to control their budget.",
            ],
            [
              "/images/ic-on-efficient-use.svg",
              "Efficient Use of Labor and Equipment",
              "Our cloud-based systems will enable our clients to make datadriven decisions on labor and equipment needed for mining production and transportation.",
            ],
          ].map(([icon, title, decsription]) => (
            <div
              className="bg-[#EAEAEA] rounded-[32px] px-5 py-8 animate-fade-in delay-75 [animation-timeline:view()] [animation-range-start:cover] [animation-range-end:500px]"
              key={title}
            >
              <Image src={icon} width={52} height={52} alt="" />
              <h3 className="text-2xl font-bold py-4 text-primary-blue">
                {title}
              </h3>
              <p className="font-poppins text-sm text-primary-black">
                {decsription}
              </p>
            </div>
          ))}
        </div>
      </section>

      <div className="flex justify-between px-5 sm:px-[80px]">
        <Image
          src={"/images/dot-corner-5x5.png"}
          width={88}
          height={88}
          alt=""
          className="rotate-180 w-8 h-8 sm:w-[88px] sm:h-[88px]"
        />
        <Image
          src={"/images/dot-corner-5x5.png"}
          width={88}
          height={88}
          alt=""
          className="rotate-90 w-8 h-8 sm:w-[88px] sm:h-[88px]"
        />
      </div>
    </section>
  );
}
