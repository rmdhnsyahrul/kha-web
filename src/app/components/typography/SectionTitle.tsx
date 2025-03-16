import Image from "next/image";
import React from "react";
type Props = {
  children: JSX.Element | string;
};
export default function SectionTitle({ children }: Props) {
  return (
    <div className="flex flex-row items-center gap-4 mb-6 animate-fade-in [animation-timeline:view()] [animation-range-start:cover] [animation-range-end:500px]">
      <Image
        src={"./images/dot-corner-3x3.svg"}
        width={38}
        height={38}
        alt=""
        unoptimized
      />
      <h5 className="text-[28px]/8 sm:text-[40px]/[72px] font-bold text-primary-blue">
        {children}
      </h5>
    </div>
  );
}
