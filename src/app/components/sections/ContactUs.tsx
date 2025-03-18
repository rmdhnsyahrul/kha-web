import React from "react";
import SectionTitle from "../typography/SectionTitle";
import Image from "next/image";
import Input from "../Form/Input";
import { PrimaryButton } from "../button";

export default function ContactUs() {
  return (
    <section
      className="p-5 sm:py-[64px] sm:px-[80px] bg-white scroll-mt-20 sm:scroll-mt-12"
      id="contact-us"
    >
      <SectionTitle>Contact Us</SectionTitle>
      <div className="flex flex-col sm:flex-row gap-y-8">
        <div className="flex flex-col items-center justify-center text-primary-blue font-bold text-xl">
          <Image
            src={"./images/kha-potrait-4x.png"}
            width={100}
            height={100}
            alt=""
            className="w-full h-[300px] object-contain"
            unoptimized
          />
          <h3 className="text-center px-6">
            If you are interested in our product and want to request demo
            product, please fill the following form.
          </h3>
        </div>
        <form
          action="#"
          method="POST"
          className="mx-auto w-full max-w-xl animate-slide-in-left [animation-timeline:view()] [animation-range-start:cover] [animation-range-end:500px]"
        >
          <div className="grid grid-cols-1 gap-x-8 gap-y-4 mb-6">
            <Input label="Name" required id="customer-name" />
            <Input label="Email address" required id="customer-email" />
            <Input label="Company" required id="company" />
            <Input label="Job title" required id="job-title" />
            <Input label="Message" required id="message" />
          </div>
          <div className="animate-fade-in [animation-timeline:view()] [animation-range-start:cover] [animation-range-end:100px]">
            <PrimaryButton>Book a meeting</PrimaryButton>
          </div>
        </form>
      </div>
      <div className="flex justify-between mt-8">
        <Image
          src={"./images/dot-corner-5x5-blue.svg"}
          width={100}
          height={100}
          alt=""
          className="w-8 h-8 sm:w-[88px] sm:h-[88px]"
          unoptimized
        />
        <Image
          src={"./images/dot-corner-5x5-blue.svg"}
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
