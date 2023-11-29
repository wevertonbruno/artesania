import React from "react";
import * as Styled from "./styled";

interface Nested {
  children: React.ReactNode | JSX.Element | JSX.Element[];
}

interface SectionProps extends Nested {
  title?: string;
}

interface FormProps extends Nested {
  title?: string;
  action?: string;
  onSubmit?: (e: React.FormEvent<HTMLFormElement>) => void;
}

export const FormTitle = ({ children }: SectionProps) => {
  return <header>{children}</header>;
};

export const FormSection = ({ title, children }: SectionProps) => {
  return (
    <Styled.FormSection className="form-section">
      {title && <span className="title">{title}</span>}
      {children}
    </Styled.FormSection>
  );
};

const defaultSubmit = (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();
};

export const Form = ({
  title,
  children,
  action,
  onSubmit = defaultSubmit,
}: FormProps) => {
  return (
    <Styled.FormContainer>
      <form action={action} onSubmit={onSubmit}>
        {title && <FormTitle>{title}</FormTitle>}
        {children}
      </form>
    </Styled.FormContainer>
  );
};
