import React from "react";
import SectionTitle from "../typography/SectionTitle";
import Accordion from "../accordion/Accordion";
import Image from "next/image";
import { getDictionary } from "@/get-dictionary";
import dotCorner from "../../../../public/images/dot-corner-5x5-blue.svg";

export default function Faq({
  dictionary,
}: {
  dictionary: Awaited<ReturnType<typeof getDictionary>>["faq"];
}) {
  return (
    <section
      className="p-5 sm:py-[64px] sm:px-[80px] bg-[#F6F6F6] scroll-mt-20 sm:scroll-mt-14"
      id="faq"
    >
      <SectionTitle>FAQ</SectionTitle>
      <section className="flex flex-col py-6 px-8 gap-4 rounded-[40px] bg-[#D9D9D9] animate-slide-in-right [animation-timeline:view()] [animation-range-start:cover] [animation-range-end:500px]">
        {[
          [dictionary["q-1"], dictionary["a-1"]],
          [dictionary["q-2"], dictionary["a-2"]],
          [dictionary["q-3"], dictionary["a-3"]],
          [dictionary["q-4"], dictionary["a-4"]],
          [dictionary["q-5"], dictionary["a-5"]],
          [dictionary["q-6"], dictionary["a-6"]],
        ].map(([question, answer], index) => (
          <Accordion question={question} answer={answer} key={index} />
        ))}
      </section>
      <div className="flex justify-between mt-8">
        <Image
          src={dotCorner}
          width={100}
          height={100}
          alt=""
          className="w-8 h-8 sm:w-[88px] sm:h-[88px]"
          unoptimized
        />
        <Image
          src={dotCorner}
          width={100}
          height={100}
          alt=""
          className="-rotate-90 w-8 h-8 sm:w-[88px] sm:h-[88px]"
          unoptimized
        />
      </div>
    </section>
  );
}
