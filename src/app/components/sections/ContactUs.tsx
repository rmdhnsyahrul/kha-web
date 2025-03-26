import React from "react";
import SectionTitle from "../typography/SectionTitle";
import Image from "next/image";
import { getDictionary } from "@/get-dictionary";
import dotBlue from "../../../../public/images/dot-corner-5x5-blue.svg";
import khaPotrait from "../../../../public/images/2.png";
import Contact from "../Form/Contact";

export default function ContactUs({
  dictionary,
}: {
  dictionary: Awaited<ReturnType<typeof getDictionary>>["contact"];
}) {
  return (
    <section
      className="p-5 sm:py-[64px] sm:px-[80px] bg-white scroll-mt-20 sm:scroll-mt-12"
      id="contact-us"
    >
      <SectionTitle>{dictionary.title}</SectionTitle>
      <div className="flex flex-col sm:flex-row gap-y-8">
        <div className="flex flex-col items-center justify-center text-primary-blue font-bold text-xl">
          <Image
            src={khaPotrait}
            width={100}
            height={100}
            alt=""
            className="w-full h-[300px] object-contain"
            unoptimized
          />
          <h3 className="text-center px-6">{dictionary.notes}</h3>
        </div>
        <Contact dictionary={dictionary} />
      </div>
      <div className="flex justify-between mt-8">
        <Image
          src={dotBlue}
          width={100}
          height={100}
          alt=""
          className="w-8 h-8 sm:w-[88px] sm:h-[88px]"
          unoptimized
        />
        <Image
          src={dotBlue}
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
