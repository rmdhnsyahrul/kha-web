import React from "react";
import { ChevronDown } from "../icons";
type Props = {
  question: string;
  answer: string;
};
export default function Accordion({ question, answer }: Props) {
  return (
    <label>
      <input className="peer/showLabel absolute scale-0" type="checkbox" />
      <span className="block max-h-20 sm:max-h-16 overflow-hidden rounded-lg bg-white px-6 py-1.5 text-primary-black transition-all duration-300 peer-checked/showLabel:bg-primary-blue peer-checked/showLabel:text-white peer-checked/showLabel:max-h-full ">
        <div className="flex h-20 sm:h-14 cursor-pointer items-center font-bold justify-between">
          <h3>{question}</h3>
          <ChevronDown />
        </div>
        <p className="mb-2">{answer}</p>
      </span>
    </label>
  );
}
