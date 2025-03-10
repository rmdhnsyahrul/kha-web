import React from "react";
import SectionTitle from "../typography/SectionTitle";
import Accordion from "../accordion/Accordion";
import Image from "next/image";

export default function Faq() {
  return (
    <section className="p-5 sm:py-[64px] sm:px-[80px] bg-[#F6F6F6]">
      <SectionTitle>FAQ</SectionTitle>
      <section className="flex flex-col py-6 px-8 gap-4 rounded-[40px] bg-[#D9D9D9]">
        {[
          [
            "What does mine digitalization entails?",
            "Mining digitalization is the process of using the latest technology to increase efficiency and productivity throughout the mining cycle, from exploration and development, through production, to delivery and marketing.",
          ],
          [
            "What kind of digital solutions available for the mining industry?",
            "Mining digitalization is the process of using the latest technology to increase efficiency and productivity throughout the mining cycle, from exploration and development, through production, to delivery and marketing.",
          ],
          [
            "Why is mine digitalization important for the industry and the economy?",
            "Mining digitalization is the process of using the latest technology to increase efficiency and productivity throughout the mining cycle, from exploration and development, through production, to delivery and marketing.",
          ],
          [
            "How to implement digital solution for mining operations?",
            "Mining digitalization is the process of using the latest technology to increase efficiency and productivity throughout the mining cycle, from exploration and development, through production, to delivery and marketing.",
          ],
          [
            "What is the benefit of mine digitalization in day-to-day operations?",
            "Mining digitalization is the process of using the latest technology to increase efficiency and productivity throughout the mining cycle, from exploration and development, through production, to delivery and marketing.",
          ],
          [
            "How can I know more about PT KHA Data Indonesia cloudbased mining management systems?",
            "Mining digitalization is the process of using the latest technology to increase efficiency and productivity throughout the mining cycle, from exploration and development, through production, to delivery and marketing.",
          ],
        ].map(([question, answer], index) => (
          <Accordion question={question} answer={answer} key={index} />
        ))}
      </section>
      <div className="flex justify-between mt-8">
        <Image
          src={"/images/dot-corner-5x5-blue.svg"}
          width={100}
          height={100}
          alt=""
          className="w-8 h-8 sm:w-[88px] sm:h-[88px]"
        />
        <Image
          src={"/images/dot-corner-5x5-blue.svg"}
          width={100}
          height={100}
          alt=""
          className="-rotate-90 w-8 h-8 sm:w-[88px] sm:h-[88px]"
        />
      </div>
    </section>
  );
}
