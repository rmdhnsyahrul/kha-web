import React, { SVGProps } from "react";
type Props = { size?: number; color?: string } & SVGProps<SVGSVGElement>;
export default function ChevronUp({
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
        d="M6 15.9854L12 9.98535L18 15.9854"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
