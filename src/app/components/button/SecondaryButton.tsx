import React, { ButtonHTMLAttributes } from "react";
import { BaseButtonProps } from "./PrimaryButton";
import LoadingSpinner from "../loading/loading-spinner";

export default function SecondaryButton({
  children,
  loading = false,
  ...restProps
}: BaseButtonProps) {
  return (
    <button
      className="inline-block transition-all duration-500 bg-green-500 py-[18px] px-6 rounded-xl hover:bg-green-100  hover:-translate-y-1.5 disabled:bg-disabled font-bold text-white"
      {...restProps}
    >
      {loading ? <LoadingSpinner /> : children}
    </button>
  );
}
