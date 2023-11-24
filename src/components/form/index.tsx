import React from "react";
import * as Styled from "./styled";

interface Nested {
  children: React.ReactNode | JSX.Element | JSX.Element[];
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

function getGrid(type: string, size?: number): string {
  return size ? ` col-${type}-${size}` : "";
}

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
  Section,
  ActionBar,
  Container,
  Title,
};

export default Form;
