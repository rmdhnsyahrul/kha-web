"use client";

import React, { ChangeEvent, useCallback, useEffect, useState } from "react";
import * as yup from "yup";

export default function useForm<T extends object>({
  field,
  schema,
}: {
  field: T;
  schema: yup.ObjectSchema<T>;
}) {
  const [values, setValues] = useState({});
  const [errors, setErrors] = useState({});

  const handleChange = useCallback(async (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    /**
     * TODO:
     * validate
     */
    let formErrors = await schema.validate({ name: value });
    console.info(JSON.stringify(formErrors));

    setValues((values) => ({
      ...values,
      [name]: value,
    }));
  }, []);

  return [values, errors, handleChange];
}
