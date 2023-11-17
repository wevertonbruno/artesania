import React from "react";
import * as Styled from "./styled";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  columnSize?: number;
  columnLg?: number;
  columnMd?: number;
  columnXl?: number;
  columnSm?: number;
}

interface Nested {
  children: React.ReactNode | JSX.Element | JSX.Element[];
}

interface FieldsProps extends Nested {}

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
const Input = ({
  title,
  columnSize,
  columnLg: lg,
  columnMd: md,
  columnXl: xl,
  columnSm: sm,
  ...inputProps
}: InputProps) => {
  const gridClass = `${xl && `col-xl-${xl}`}${lg && `col-lg-${lg}`}${
    md && `col-md-${md}`
  }${sm && `col-sm-${sm}`}`;

  return (
    <Styled.InputField className={gridClass}>
      {title && <label>{`${title}${inputProps.required ? "*" : ""}`}</label>}
      <input {...inputProps} />
    </Styled.InputField>
  );
};

const Fields = ({ children }: FieldsProps) => {
  return <Styled.Fields className="row">{children}</Styled.Fields>;
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
