import React, { ButtonHTMLAttributes } from "react";

export default function PrimaryButton({
  children,
  ...restProps
}: ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      className="inline-block transition-all duration-500 bg-blue-500 py-4 sm:py-[18px] px-3 sm:px-6 rounded-xl hover:bg-blue-100 hover:-translate-y-1.5 disabled:bg-disabled font-bold text-white"
      {...restProps}
    >
      {children}
    </button>
  );
}
