import React from "react";
import * as Styled from "./styled";
import Btn from "../button";

interface InputFieldProps {
  label: string;
  type: string;
  placeholder: string;
  required?: boolean;
}

interface FieldsProps {
  columns: number;
  children: React.ReactNode | JSX.Element | JSX.Element[];
}

interface FormSectionProps {
  title?: string;
  children: React.ReactNode | JSX.Element | JSX.Element[];
}

interface FormActionProps {
  align: "left" | "center" | "right";
  children: React.ReactNode | JSX.Element | JSX.Element[];
}

export const InputField = ({ label, ...inputProps }: InputFieldProps) => {
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

export const FormSection = ({ title, children }: FormSectionProps) => {
  return (
    <Styled.FormSection className="form-section">
      {title && <span className="title">{title}</span>}
      {children}
    </Styled.FormSection>
  );
};

export const FormActions = ({ align, children }: FormActionProps) => {
  return (
    <Styled.FormActions className="form-action" $align={align}>
      {children}
    </Styled.FormActions>
  );
};

export const Form = () => {
  return (
    <Styled.FormContainer>
      <header>Registration</header>
      <form action="#">
        <FormSection title="Project Info">
          <Fields columns={3}>
            <InputField
              label="First Name"
              type="text"
              placeholder="Enter your first name"
            />
            <InputField
              label="Data of Birth"
              type="date"
              placeholder="Enter your birth date"
            />
            <InputField
              label="Email"
              type="text"
              placeholder="Enter your e-mail"
            />

            <InputField
              label="First Name"
              type="text"
              placeholder="Enter your first name"
            />
            <InputField
              label="Data of Birth"
              type="date"
              placeholder="Enter your birth date"
            />
            <InputField
              label="Email"
              type="text"
              placeholder="Enter your e-mail"
            />
          </Fields>
        </FormSection>

        <FormSection title="Client Info">
          <Fields columns={3}>
            <InputField
              label="First Name"
              type="text"
              placeholder="Enter your first name"
              required
            />
            <InputField
              label="Data of Birth"
              type="date"
              placeholder="Enter your birth date"
            />
            <InputField
              label="Email"
              type="text"
              placeholder="Enter your e-mail"
              required
            />
          </Fields>
          <Fields columns={2}>
            <InputField
              label="Email"
              type="text"
              placeholder="Enter your e-mail"
            />
            <InputField
              label="Age"
              type="number"
              placeholder="Enter your first name"
            />
            <InputField
              label="Data of Birth"
              type="date"
              placeholder="Enter your birth date"
            />
            <InputField
              label="Email"
              type="text"
              placeholder="Enter your e-mail"
              required
            />
          </Fields>
        </FormSection>
        <FormActions align="right">
          <Btn.Button text="Submit" />
        </FormActions>
      </form>
    </Styled.FormContainer>
  );
};
