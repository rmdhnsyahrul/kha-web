"use client";

import React, { useState } from "react";
import { PrimaryButton } from "../button";
import { getDictionary } from "@/get-dictionary";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import TextInput from "./TextInput";
import { sendMail } from "@/lib/send-mail";
export type FormData = {
  name?: string;
  email?: string;
  company?: string;
  jobTitle?: string;
  message?: string;
};
export default function Contact({
  dictionary,
}: {
  dictionary: Awaited<ReturnType<typeof getDictionary>>["contact"];
}) {
  const formSchema = yup.object().shape({
    name: yup.string().required(),
    email: yup.string().email(),
    company: yup.string(),
    jobTitle: yup.string(),
    message: yup.string().required(),
  });

  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>({
    resolver: yupResolver(formSchema) as any,
  });

  const [isSubmmited, setIsSubmitted] = useState(false);
  const onSubmitHandler = async (values: FormData) => {
    const mailText = `Name: ${values.name}\n  Email: ${values.email}\n Company: ${values.company}\n Job Title: ${values.jobTitle}\n Message: ${values.message}`;

    try {
      await sendMail({
        email: values.email as string,
        subject: "New Contact Us Form",
        text: mailText,
      });

      setIsSubmitted(true);
      reset();
    } catch (e) {
      console.info(JSON.stringify(e));
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmitHandler)}
      className="mx-auto w-full max-w-xl animate-slide-in-left [animation-timeline:view()] [animation-range-start:cover] [animation-range-end:500px]"
    >
      <div className="grid grid-cols-1 gap-x-8 gap-y-4 mb-6">
        <TextInput label="Name" required control={control} name="name" />
        <TextInput label="Email" required control={control} name="email" />
        <TextInput label="Company" required control={control} name="company" />
        <TextInput
          label="Job Title"
          required
          control={control}
          name="jobTitle"
        />
        <TextInput label="Message" required control={control} name="message" />
      </div>
      <div className="animate-fade-in [animation-timeline:view()] [animation-range-start:cover] [animation-range-end:100px]">
        <PrimaryButton
          disabled={
            Boolean(errors.name || errors.email || errors.message) ||
            isSubmmited
          }
        >
          {dictionary.button}
        </PrimaryButton>
      </div>
    </form>
  );
}
