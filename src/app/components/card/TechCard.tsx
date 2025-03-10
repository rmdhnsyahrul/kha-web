import Image from "next/image";
import React from "react";
type Props = {
  icon?: string;
  title: string;
  description: string;
  secondary?: boolean;
};
export default function TechCard({
  icon,
  title,
  description,
  secondary = false,
}: Props) {
  return (
    <div
      className={`py-8 px-4 gap-4 rounded-[32px] h-[288px] ${
        secondary ? "bg-primary-grey" : "bg-primary-blue"
      }`}
    >
      {icon && <Image src={icon} width={32} height={32} alt={title} />}
      {title && (
        <h2
          className={`font-bold py-4 text-2xl ${
            secondary ? "text-primary-blue " : "text-white"
          } align-text-bottom`}
        >
          {title}
        </h2>
      )}
      {description && (
        <p
          className={`text-sm font-poppins ${
            secondary ? "text-primary-black" : "text-[#F2F2F2]"
          }`}
        >
          {description}
        </p>
      )}
    </div>
  );
}
