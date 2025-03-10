import React from "react";
type Props = {
  label: string;
  id: string;
  required?: boolean;
};
export default function Input({ label, id, required = false }: Props) {
  return (
    <div>
      <label className="block text-sm/6 sm:text-lg/6 font-medium sm:font-semibold text-[#0A0A0A]">
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      <div className="mt-2.5">
        <input
          type="text"
          name={id}
          id={id}
          // autoComplete="given-name"
          className="block w-full rounded-xl bg-[#F8FAFC] px-3.5 py-4 text-base text-gray-900 outline-1 -outline-offset-1 outline-[#CBD5E1] placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
        />
      </div>
    </div>
  );
}
