import React, { SVGProps } from "react";
type Props = { size?: number; color?: string } & SVGProps<SVGSVGElement>;
export default function Hamburger({
  size = 20,
  color = "currentColor",
  ...props
}: Props) {
  return (
    <svg
      width={size}
      height={size + 1}
      viewBox="0 0 24 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M5.19626 7.18275H23.8878"
        stroke={color}
        strokeWidth="1.31425"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M5.19626 14.1925H23.8878"
        stroke={color}
        strokeWidth="1.31425"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M5.19626 21.2013H23.8878"
        stroke={color}
        strokeWidth="1.31425"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
