import React from "react";
import * as Styled from "./styled";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  error?: boolean;
  errorMessage?: string;
}

function Input({
  title,
  error = false,
  errorMessage = "",
  ...inputProps
}: InputProps) {
  return (
    <Styled.Container>
      {title && <label>{`${title}${inputProps.required ? "*" : ""}:`}</label>}
      <input {...inputProps} />
      {error && (
        <span className="error-container">
          <Styled.ErrorIcon />
          <p>{errorMessage}</p>
        </span>
      )}
    </Styled.Container>
  );
}

export default Input;
