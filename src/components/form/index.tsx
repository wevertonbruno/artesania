import React from "react";
import * as Styled from "./styled";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

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
  title?: string;
}

// TODO: Add style for required inputs
const Input = ({ title, ...inputProps }: InputProps) => {
  return (
    <Styled.InputField className="input-field">
      {title && <label>{`${title}${inputProps.required ? "*" : ""}`}</label>}
      <input {...inputProps} />
    </Styled.InputField>
  );
};

const Fields = ({ columns, children }: FieldsProps) => {
  return (
    <Styled.Fields className="fields" $columns={columns}>
      {children}
    </Styled.Fields>
  );
};

const Title = ({ children }: SectionProps) => {
  return <header>{children}</header>;
};

const Section = ({ title, children }: SectionProps) => {
  return (
    <Styled.FormSection className="form-section">
      {title && <span className="title">{title}</span>}
      {children}
    </Styled.FormSection>
  );
};

const ActionBar = ({ align, children }: ActionBarProps) => {
  return (
    <Styled.FormActions className="form-action" $align={align}>
      {children}
    </Styled.FormActions>
  );
};

const Container = ({ title, children }: FormProps) => {
  return (
    <Styled.FormContainer>
      <form action="#">
        {title && <Title>{title}</Title>}
        {children}
      </form>
    </Styled.FormContainer>
  );
};

const Form = {
  Input,
  Fields,
  Section,
  ActionBar,
  Container,
  Title,
};

export default Form;
