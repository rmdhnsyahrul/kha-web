"use client";

import React, { useCallback, useRef, useState } from "react";
import { PrimaryButton } from "../button";
import { getDictionary } from "@/get-dictionary";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import TextInput from "./TextInput";
import { sendMail } from "@/lib/send-mail";
import ReCAPTCHA from "react-google-recaptcha";
import { useToast } from "@/hooks/use-toast";

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
  const recaptchaRef = useRef<ReCAPTCHA>(null);
  const [isVerified, setIsVerified] = useState(false);
  const { toast } = useToast();

  async function handleCaptchaSubmission(token: string | null) {
    try {
      if (token) {
        await fetch("/api/recapthca", {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ token }),
        });
        setIsVerified(true);
      }
    } catch (e) {
      setIsVerified(false);
    }
  }
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
  const [isSending, setIsSending] = useState(false);

  const onSubmitHandler = async (values: FormData) => {
    const mailText = `Name: ${values.name}\n  Email: ${values.email}\n Company: ${values.company}\n Job Title: ${values.jobTitle}\n Message: ${values.message}`;
    setIsSending(true);
    try {
      await sendMail({
        email: values.email as string,
        subject: "New Contact Us Form",
        text: mailText,
      });

      setIsSubmitted(true);
      reset();

      toast({
        title: dictionary["success-title"],
        description: dictionary["success-description"],
      });
    } catch (e) {
      toast({
        title: dictionary["error-title"],
        description: dictionary["error-description"],
        variant: "destructive",
      });
    }
    setIsSending(false);
  };

  const handleChange = useCallback((token: string | null) => {
    handleCaptchaSubmission(token);
  }, []);

  const handleExpired = useCallback(() => {
    setIsVerified(false);
  }, []);

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
        <ReCAPTCHA
          sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY || ""}
          ref={recaptchaRef}
          onChange={handleChange}
          onExpired={handleExpired}
          className="border-none"
        />
      </div>
      <PrimaryButton
        loadingTitle={dictionary.sending}
        loading={isSending}
        disabled={
          Boolean(errors.name || errors.email || errors.message) ||
          isSubmmited ||
          !isVerified
        }
      >
        {dictionary.button}
      </PrimaryButton>
    </form>
  );
}
