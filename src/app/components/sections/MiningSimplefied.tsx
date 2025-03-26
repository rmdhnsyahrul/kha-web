import Image from "next/image";
import React from "react";
import SectionTitle from "../typography/SectionTitle";
import TechCard from "../card/TechCard";
import heavyVehicle from "../../../../public/images/heavy-vehicles.jpg";
import icCloud from "../../../../public/images/ic-cloud-based.svg";
import icExpert from "../../../../public/images/ic-trusted-expert.svg";
import icCustom from "../../../../public/images/ic-customizeable.svg";
import icCost from "../../../../public/images/ic-cost-effective.svg";
import icMineral from "../../../../public/images/ic-mineral-extraction.svg";
import icHauling from "../../../../public/images/ic-hauling.svg";
import icBarging from "../../../../public/images/ic-barging.svg";
import khaLogo from "../../../../public/images/2.png";
import dotCorner from "../../../../public/images/dot-corner-5x5.png";
import { getDictionary } from "@/get-dictionary";

export default function MiningSimplefied({
  dictionary,
}: {
  dictionary: Awaited<ReturnType<typeof getDictionary>>["service"];
}) {
  return (
    <section className="bg-white">
      <div className="relative">
        <Image
          src={heavyVehicle}
          width={1000}
          height={342}
          className="w-full h-[342] object-center animate-fade-in [animation-timeline:view()] [animation-range-start:cover] [animation-range-end:500px]"
          alt=""
          unoptimized
        />
      </div>
      <section className="p-5 sm:py-[64px] sm:px-[80px]" id="our-technology">
        <SectionTitle>{dictionary["mining-simplified"]}</SectionTitle>
        <div className="px-0 sm:px-[62px] sm:block hidden">
          <div className="grid sm:grid-cols-3 grid-flow-col">
            <div className="col-1">&nbsp;</div>
            <TechCard
              icon={icCloud}
              title={dictionary["cloud-based"]}
              description={dictionary["cloud-based-desc"]}
              secondary
            />
            <div className="col-1">&nbsp;</div>
          </div>
          <div className="grid sm:grid-cols-3 grid-flow-col">
            <TechCard
              icon={icExpert}
              title={dictionary.expert}
              description={dictionary["expert-desc"]}
            />
            <div className="relative col-1">
              <Image
                src={khaLogo}
                width={100}
                height={100}
                alt=""
                className="w-full h-[300px] object-contain"
                unoptimized
              />
            </div>
            <TechCard
              icon={icCustom}
              title={dictionary.custom}
              description={dictionary["custom-desc"]}
            />
          </div>
          <div className="grid sm:grid-cols-3 grid-flow-col">
            <div className="col-1">&nbsp;</div>
            <TechCard
              icon={icCost}
              title={dictionary.cost}
              description={dictionary["cost-desc"]}
              secondary
            />
            <div className="col-1">&nbsp;</div>
          </div>
        </div>

        <div className="grid grid-flow-row sm:hidden gap-y-4">
          <TechCard
            icon={icCloud}
            title={dictionary["cloud-based"]}
            description={dictionary["cloud-based-desc"]}
            secondary
          />
          <TechCard
            icon={icExpert}
            title={dictionary.expert}
            description={dictionary["expert-desc"]}
          />
          <div className="relative col-1">
            <Image
              src={khaLogo}
              width={100}
              height={100}
              alt=""
              className="w-full h-[300px] object-contain"
              unoptimized
            />
          </div>
          <TechCard
            icon={icCustom}
            title={dictionary.custom}
            description={dictionary["custom-desc"]}
          />
          <TechCard
            icon={icCost}
            title={dictionary.cost}
            description={dictionary["cost-desc"]}
            secondary
          />
        </div>

        <div className="flex justify-between">
          <Image
            src={dotCorner}
            width={88}
            height={88}
            alt=""
            className="rotate-180 w-8 h-8 sm:w-[88px] sm:h-[88px]"
            unoptimized
          />
          <Image
            src={dotCorner}
            width={88}
            height={88}
            alt=""
            className="rotate-90 w-8 h-8 sm:w-[88px] sm:h-[88px]"
            unoptimized
          />
        </div>
      </section>
      <section className="p-5 sm:py-[64px] sm:px-[80px]">
        <h1 className="text-3xl sm:text-[60px]/[72px] sm:px-[145px] text-primary-blue font-bold text-center animate-slide-in-left [animation-timeline:view()] [animation-range-start:cover] [animation-range-end:500px]">
          Integrated Data-Driven Insights Across Value Chain
        </h1>
        <div className="grid sm:grid-cols-3 grid-flow-row gap-6 py-[34px]">
          <TechCard
            icon={icMineral}
            title={dictionary.extraction}
            description={dictionary["extraction-desc"]}
            secondary
          />
          <TechCard
            icon={icHauling}
            title={dictionary.hauling}
            description={dictionary["hauling-desc"]}
          />
          <TechCard
            icon={icBarging}
            title={dictionary.barging}
            description={dictionary["barging-desc"]}
            secondary
          />
        </div>
        <div className="flex justify-between">
          <Image
            src={dotCorner}
            width={88}
            height={88}
            alt=""
            className="rotate-180 w-8 h-8 sm:w-[88px] sm:h-[88px]"
            unoptimized
          />
          <Image
            src={dotCorner}
            width={88}
            height={88}
            alt=""
            className="rotate-90 w-8 h-8 sm:w-[88px] sm:h-[88px]"
            unoptimized
          />
        </div>
      </section>
    </section>
  );
}
