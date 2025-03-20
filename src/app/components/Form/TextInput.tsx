import { ComponentPropsWithoutRef } from "react";
import {
  Controller,
  ControllerProps,
  FieldPath,
  FieldValues,
} from "react-hook-form";

type TextInputProps<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>
> = Pick<ControllerProps<TFieldValues, TName>, "name" | "control" | "rules"> &
  ComponentPropsWithoutRef<"input">;

export default function TextInput<
  T extends FieldValues = FieldValues,
  U extends FieldPath<T> = FieldPath<T>
>({
  name,
  control,
  rules,
  onChange,
  onBlur,
  label,
  required,
  ...rest
}: TextInputProps<T, U> & { label: string; required?: boolean }) {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState }) => (
        <div>
          <label
            htmlFor={name}
            className="block text-sm/6 sm:text-lg/6 font-medium sm:font-semibold text-[#0A0A0A] pb-2"
          >
            {label} {required && <span className="text-red-500">*</span>}
          </label>
          <input
            {...rest}
            {...field}
            onBlur={(e) => {
              field.onBlur();
              onBlur?.(e);
            }}
            onChange={(e) => {
              field.onChange(e);
              onChange?.(e);
            }}
            className={`block w-full rounded-xl bg-[#F8FAFC] px-3.5 py-4 text-base text-gray-900  outline-1 -outline-offset-1 placeholder:text-gray-400  ${
              fieldState.error
                ? "outline-red-500"
                : "outline-[#CBD5E1] focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
            }`}
          />
          {fieldState.error && fieldState.error.message && (
            <div className="text-red-500">{fieldState.error.message}</div>
          )}
        </div>
      )}
    />
  );
}
