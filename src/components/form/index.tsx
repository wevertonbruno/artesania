import React from "react";
import * as Styled from "./styled";
import Btn from "../button";

interface InputProps {
  label: string;
  type: string;
  placeholder: string;
  required?: boolean;
}

interface Nested {
  children: React.ReactNode | JSX.Element | JSX.Element[];
}

interface FieldsProps extends Nested {
  columns: number;
}

interface SectionProps extends Nested {
  title?: string;
}

interface ActionBarProps extends Nested {
  align: "left" | "center" | "right";
}

interface FormProps extends Nested {
  title: string;
}

// TODO: Add style for required inputs
export const Input = ({ label, ...inputProps }: InputProps) => {
  return (
    <Styled.InputField className="input-field">
      <label>{`${label}${inputProps.required ? "*" : ""}`}</label>
      <input {...inputProps} />
    </Styled.InputField>
  );
};

export const Fields = ({ columns, children }: FieldsProps) => {
  return (
    <Styled.Fields className="fields" $columns={columns}>
      {children}
    </Styled.Fields>
  );
};

export const Section = ({ title, children }: SectionProps) => {
  return (
    <Styled.FormSection className="form-section">
      {title && <span className="title">{title}</span>}
      {children}
    </Styled.FormSection>
  );
};

export const ActionBar = ({ align, children }: ActionBarProps) => {
  return (
    <Styled.FormActions className="form-action" $align={align}>
      {children}
    </Styled.FormActions>
  );
};

export const Container = ({ title, children }: FormProps) => {
  return (
    <Styled.FormContainer>
      <header>{title}</header>
      <form action="#">{children}</form>
    </Styled.FormContainer>
  );
};
