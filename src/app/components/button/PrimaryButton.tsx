import React, { ButtonHTMLAttributes } from "react";
import LoadingSpinner from "../loading/loading-spinner";

export interface BaseButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  loading?: boolean;
  loadingTitle?: string;
}
export default function PrimaryButton({
  children,
  loading = false,
  loadingTitle = "Sending...",
  ...restProps
}: BaseButtonProps) {
  return (
    <button
      className="inline-block transition-all duration-500 bg-blue-500 py-4 sm:py-[18px] px-3 sm:px-6 rounded-xl hover:bg-blue-100 hover:-translate-y-1.5 disabled:bg-disabled font-bold text-white"
      {...restProps}
    >
      {loading ? <LoadingSpinner title={loadingTitle} /> : children}
    </button>
  );
}
