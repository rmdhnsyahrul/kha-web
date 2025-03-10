import React, { SVGProps } from "react";
type Props = {
  size?: number;
  color?: string;
  rotate?: number;
} & SVGProps<SVGSVGElement>;
export default function ChevronDown<T>({
  size = 20,
  color = "currentColor",
  style,
  rotate = 0,
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
        d="M6 9.98535L12 15.9854L18 9.98535"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={props.className}
      />
      <path
        d="M6 9.98535L12 15.9854L18 9.98535"
        stroke="white"
        strokeOpacity="0.2"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={props.className}
      />
    </svg>
  );
}
