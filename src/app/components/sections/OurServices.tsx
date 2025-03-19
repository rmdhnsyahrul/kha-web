import Image from "next/image";
import React from "react";
import SectionTitle from "../typography/SectionTitle";
import { getDictionary } from "@/get-dictionary";
import dotCorner from "../../../../public/images/dot-corner-5x5.png";
import serviceImage from "../../../../public/images/our-services.jpg";
import icOnSpek from "../../../../public/images/ic-on-specs.svg";
import icOnStock from "../../../../public/images/ic-on-stock.svg";
import icOnSchedule from "../../../../public/images/ic-on-schedule.svg";
import icOnBudget from "../../../../public/images/ic-on-budget.svg";
import icOnEfficient from "../../../../public/images/ic-on-efficient-use.svg";

export default function OurServices({
  dictionary,
}: {
  dictionary: Awaited<ReturnType<typeof getDictionary>>["service"];
}) {
  return (
    <section
      className="content bg-white py-5 sm:py-[40px] scroll-mt-20"
      id="our-services"
    >
      <div className="px-5 sm:px-[80px]">
        <SectionTitle>{dictionary["our-service"]}</SectionTitle>
      </div>
      <div className="hidden sm:block sm:bg-partial-blue-left mt-[40px] px-[80px] py-[67px] animate-fade-in [animation-timeline:view()] [animation-range-start:cover] [animation-range-end:500px]">
        <div className="flex flex-row gap-[33px] animate-fade-in [animation-timeline:view()] [animation-range-start:cover] [animation-range-end:500px]">
          <div className="flex flex-col justify-between animate-slide-in-left [animation-timeline:view()] [animation-range-start:cover] [animation-range-end:500px] delay-75">
            <Image
              src={dotCorner}
              width={88}
              height={88}
              alt=""
              className="-rotate-90"
              unoptimized
            />
            <Image
              src={dotCorner}
              width={88}
              height={88}
              alt=""
              className="-rotate-180"
              unoptimized
            />
          </div>
          <div className="flex-1">
            <Image
              src={serviceImage}
              width={505}
              height={558}
              className="w-full h-[500px] object-cover rounded-[40px] animate-slide-in-right [animation-timeline:view()] [animation-range-start:cover] [animation-range-end:500px] delay-100"
              alt="about kha data Indonesia - kha mine management system"
              unoptimized
            />
          </div>
        </div>
      </div>
      <section className="p-5 sm:px-[80px] sm:py-[56px] ">
        <div className="grid grid-flow-row sm:grid-cols-5 gap-6">
          {[
            [icOnSpek, dictionary.spec, dictionary["spec-desc"]],
            [icOnStock, dictionary.stock, dictionary["stock-desc"]],
            [icOnSchedule, dictionary.schedule, dictionary["schedule-desc"]],
            [icOnBudget, dictionary.budget, dictionary["budget-desc"]],
            [icOnEfficient, dictionary.efficient, dictionary["efficient-desc"]],
          ].map(([icon, title, decsription]) => (
            <div
              className="bg-[#EAEAEA] rounded-[32px] px-5 py-8 animate-fade-in delay-75 [animation-timeline:view()] [animation-range-start:cover] [animation-range-end:500px]"
              key={title}
            >
              <Image src={icon} width={52} height={52} alt={title} />
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
  );
}
