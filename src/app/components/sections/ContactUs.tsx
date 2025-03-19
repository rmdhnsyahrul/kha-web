import React from "react";
import SectionTitle from "../typography/SectionTitle";
import Image from "next/image";
import Input from "../Form/Input";
import { PrimaryButton } from "../button";
import { getDictionary } from "@/get-dictionary";
import dotBlue from "../../../../public/images/dot-corner-5x5-blue.svg";
import khaPotrait from "../../../../public/images/kha-potrait-4x.png";

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
        <form
          action="#"
          method="POST"
          className="mx-auto w-full max-w-xl animate-slide-in-left [animation-timeline:view()] [animation-range-start:cover] [animation-range-end:500px]"
        >
          <div className="grid grid-cols-1 gap-x-8 gap-y-4 mb-6">
            <Input label={dictionary.name} required id="customer-name" />
            <Input label={dictionary.email} required id="customer-email" />
            <Input label={dictionary.company} required id="company" />
            <Input label={dictionary.job} required id="job-title" />
            <Input label={dictionary.message} required id="message" />
          </div>
          <div className="animate-fade-in [animation-timeline:view()] [animation-range-start:cover] [animation-range-end:100px]">
            <PrimaryButton>{dictionary.button}</PrimaryButton>
          </div>
        </form>
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
