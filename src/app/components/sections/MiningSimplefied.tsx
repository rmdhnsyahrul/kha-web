import Image from "next/image";
import React from "react";
import SectionTitle from "../typography/SectionTitle";
import TechCard from "../card/TechCard";

export default function MiningSimplefied() {
  return (
    <section className="bg-white">
      <div className="relative">
        <Image
          src={"/images/heavy-vehicles.jpg"}
          // fill
          width={1000}
          height={342}
          className="w-full h-[342] object-center animate-fade-in [animation-timeline:view()] [animation-range-start:cover] [animation-range-end:500px]"
          alt=""
        />
        {/* <div className="absolute inset-0 w-full h-[342] z-1 bg-[#000000BF] opacity-5" /> */}
      </div>
      <section className="p-5 sm:py-[64px] sm:px-[80px]" id="our-technology">
        <SectionTitle>Mining Simplified</SectionTitle>
        <div className="px-0 sm:px-[62px] sm:block hidden">
          <div className="grid sm:grid-cols-3 grid-flow-col">
            <div className="col-1">&nbsp;</div>
            <TechCard
              icon="/images/ic-cloud-based.svg"
              title="Cloud-Based Technology"
              description="Our cloud-based systems allow you to access critical data such as production, equipment health and personnel safety, so you can make informed decisions and improve overall efficiency."
              secondary
            />
            <div className="col-1">&nbsp;</div>
          </div>
          <div className="grid sm:grid-cols-3 grid-flow-col">
            <TechCard
              icon="/images/ic-trusted-expert.svg"
              title="Trusted Expertise"
              description="Our expertise in mining operations and IT solutions allows us to provide comprehensive and reliable mine monitoring systems."
            />
            <div className="relative col-1">
              <Image
                src={"/images/kha-potrait-4x.png"}
                width={100}
                height={100}
                alt=""
                className="w-full h-[300px] object-contain"
              />
            </div>
            <TechCard
              icon="/images/ic-customizeable.svg"
              title="Customizable Solutions"
              description="Every mining operation is unique, and we offer solutions that can be customized to suit your needs. Our team works closely with you to understand your needs and provide solutions that meet your business goals."
            />
          </div>
          <div className="grid sm:grid-cols-3 grid-flow-col">
            <div className="col-1">&nbsp;</div>
            <TechCard
              icon="/images/ic-cost-effective.svg"
              title="Cost-Effective"
              description="Our solutions are designed to provide maximum value for your investment. Our effective monitoring system helps you reduce operational costs, minimize downtime and increase productivity"
              secondary
            />
            <div className="col-1">&nbsp;</div>
          </div>
        </div>

        <div className="grid grid-flow-row sm:hidden gap-y-4">
          <TechCard
            icon="/images/ic-cloud-based.svg"
            title="Cloud-Based Technology"
            description="Our cloud-based systems allow you to access critical data such as production, equipment health and personnel safety, so you can make informed decisions and improve overall efficiency."
            secondary
          />
          <TechCard
            icon="/images/ic-trusted-expert.svg"
            title="Trusted Expertise"
            description="Our expertise in mining operations and IT solutions allows us to provide comprehensive and reliable mine monitoring systems."
          />
          <div className="relative col-1">
            <Image
              src={"/images/kha-potrait-4x.png"}
              width={100}
              height={100}
              alt=""
              className="w-full h-[300px] object-contain"
            />
          </div>
          <TechCard
            icon="/images/ic-customizeable.svg"
            title="Customizable Solutions"
            description="Every mining operation is unique, and we offer solutions that can be customized to suit your needs. Our team works closely with you to understand your needs and provide solutions that meet your business goals."
          />
          <TechCard
            icon="/images/ic-cost-effective.svg"
            title="Cost-Effective"
            description="Our solutions are designed to provide maximum value for your investment. Our effective monitoring system helps you reduce operational costs, minimize downtime and increase productivity"
            secondary
          />
        </div>

        <div className="flex justify-between">
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
      <section className="p-5 sm:py-[64px] sm:px-[80px]">
        <h1 className="text-3xl sm:text-[60px]/[72px] sm:px-[145px] text-primary-blue font-bold text-center animate-slide-in-left [animation-timeline:view()] [animation-range-start:cover] [animation-range-end:500px]">
          Integrated Data-Driven Insights Across Value Chain
        </h1>
        <div className="grid sm:grid-cols-3 grid-flow-row gap-6 py-[34px]">
          <TechCard
            icon="/images/ic-mineral-extraction.svg"
            title="Mineral Extraction"
            description="Our clients will be able to make data-driven decisions to estimate the resource needed and properly benchmark daily land clearing, overburden removal and mineral extractions"
            secondary
          />
          <TechCard
            icon="/images/ic-hauling.svg"
            title="Transportation"
            description="Real-time tracking of fuel consumption and monitoring of truck volume to mitigate unnecessary losses during the transportation process."
          />
          <TechCard
            icon="/images/ic-barging.svg"
            title="Barging"
            description="Transparent documentation of required permits and realtime GPS tracking of barge transportation to Mother Vessel"
            secondary
          />
        </div>
        <div className="flex justify-between">
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
    </section>
  );
}
