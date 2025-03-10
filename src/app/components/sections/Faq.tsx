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
            "There are many digital solutions available for the mining industry, such as automation and control technology, IoT, AI and data analysis, cloud computing, and supply chain management systems. PT. KHA Data Indonesia has the resources to help you implement digital solutions for your day-to-day mining oprations.",
          ],
          [
            "Why is mine digitalization important for the industry and the economy?",
            "Digitalization helps increase efficiency, reduce costs and minimize risks in mining operations. Apart from that, digitalization also helps mining businesses prepare for an increasingly digital and interconnected future.",
          ],
          [
            "How to implement digital solution for mining operations?",
            "Implementing digital solutions for mining requires a mature strategy and careful planning. Mining companies must identify their business needs, evaluate available technologies, and select the most appropriate solutions. PT. KHA Data Indonesia will provide consulting and advisory services for you to help train staff and implement digital solution for your mining operations.",
          ],
          [
            "What is the benefit of mine digitalization in day-to-day operations?",
            "The benefits of mining digitalization in day-to-day operations include increasing efficiency and productivity, reducing costs, improving occupational safety and health, and minimizing risks in mining operations. Digitalization also helps increase customer satisfaction and strengthen the company's position in the market.",
          ],
          [
            "How can I know more about PT KHA Data Indonesia cloudbased mining management systems?",
            "Please contact us using the form below and we would be more than happy to customize a solution for you and your mining operations.",
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
