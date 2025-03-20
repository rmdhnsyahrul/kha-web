import React from "react";
import SectionTitle from "../typography/SectionTitle";
import Image from "next/image";
import { getDictionary } from "@/get-dictionary";
import gpsTracking from "../../../../public/images/image-k-1.jpg";
import monitoring from "../../../../public/images/image-k-2.jpg";
import integrated from "../../../../public/images/image-k-3.jpg";
import fuelMonitoring from "../../../../public/images/image-k-4.jpg";

export default function OurTechnology({
  dictionary,
}: {
  dictionary: Awaited<ReturnType<typeof getDictionary>>["technology"];
}) {
  return (
    <section
      className="flex flex-col p-5 sm:py-[64px] sm:px-[80px] bg-[#F6F6F6] scroll-mt-20 sm:scroll-mt-16"
      id="our-technology"
    >
      <SectionTitle>{dictionary["our-technology"]}</SectionTitle>
      <section>
        <div className="mt-4">
          {[
            [
              dictionary["tech-title-1"],
              dictionary["tech-desc-1"],
              gpsTracking,
            ],
            [dictionary["tech-title-2"], dictionary["tech-desc-2"], monitoring],
            [dictionary["tech-title-3"], dictionary["tech-desc-3"], integrated],
            [
              dictionary["tech-title-4"],
              dictionary["tech-desc-4"],
              fuelMonitoring,
            ],
          ].map(([title, description, imageUrl], index) => (
            <div
              className="grid grid-flow-row sm:grid-cols-4 gap-[30px] mb-[48px] animate-fade-in [animation-timeline:view()] [animation-range-start:cover] [animation-range-end:500px]"
              key={title.toString().trim()}
            >
              {index % 2 === 0 ? (
                <>
                  <div className="col-span-3 sm:col-span-1 ">
                    <div className="relative">
                      <Image
                        src={imageUrl}
                        width={323}
                        height={323}
                        className="rounded-[32px] w-full h-auto"
                        alt={title as string}
                        unoptimized
                      />
                      <div className="image-bg-tech left" />
                    </div>
                  </div>
                  <div className="col-span-3 animate-slide-in-left delay-75 [animation-timeline:view()] [animation-range-start:cover] [animation-range-end:500px]">
                    <h3 className="text-lg/8 sm:text-[40px]/[72px] font-bold pb-2 text-primary-blue">
                      {title as string}
                    </h3>
                    <p className="sm:text-[18px]/[32px] text-[#0A0A0A] !text-justify">
                      {description as string}
                    </p>
                  </div>
                </>
              ) : (
                <>
                  <div className="col-span-3 sm:hidden">
                    <div className="relative">
                      <Image
                        src={imageUrl}
                        width={323}
                        height={323}
                        className="rounded-[32px] w-full h-auto"
                        alt={title as string}
                        unoptimized
                      />
                      <div className="image-bg-tech left" />
                    </div>
                  </div>
                  <div className="col-span-3 text-right animate-slide-in-right delay-75 [animation-timeline:view()] [animation-range-start:cover] [animation-range-end:500px]">
                    <h3 className="text-lg/8 sm:text-[40px]/[72px] font-bold pb-2 text-primary-blue">
                      {title as string}
                    </h3>
                    <p className="sm:text-[18px]/[32px] text-[#0A0A0A] !text-justify">
                      {description as string}
                    </p>
                  </div>
                  <div className="hidden sm:block sm:col-1">
                    <div className="relative">
                      <Image
                        src={imageUrl}
                        width={323}
                        height={323}
                        className="rounded-[32px] w-full h-auto"
                        alt={title as string}
                        unoptimized
                      />
                      <div className="image-bg-tech left" />
                    </div>
                  </div>
                </>
              )}
            </div>
          ))}
        </div>
      </section>
    </section>
  );
}
