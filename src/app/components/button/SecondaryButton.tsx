import React, { ButtonHTMLAttributes } from "react";

export default function SecondaryButton({
  children,
  ...restProps
}: ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      className="inline-block transition-all duration-500 bg-green-500 py-[18px] px-6 rounded-xl hover:bg-green-100  hover:-translate-y-1.5 disabled:bg-disabled font-bold text-white"
      {...restProps}
    >
      {children}
    </button>
  );
}
