import React from "react";
import * as Styled from "./styled";
import {
  FieldValues,
  UseFormRegister,
  RegisterOptions,
  FieldErrors,
} from "react-hook-form";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  name: string;
  register: UseFormRegister<FieldValues>;
  schema?: RegisterOptions<FieldValues, string>;
  errors?: FieldErrors<FieldValues>;
}

function Input({ title, register, schema, errors, ...inputProps }: InputProps) {
  return (
    <Styled.Container>
      {title && <label>{`${title}${inputProps.required ? "*" : ""}:`}</label>}
      <input {...inputProps} {...register(inputProps.name, schema)} />
      {errors && errors[inputProps.name] && (
        <span className="error-container">
          <Styled.ErrorIcon />
          <p>{errors[inputProps.name]?.message as string}</p>
        </span>
      )}
    </Styled.Container>
  );
}

export default Input;
