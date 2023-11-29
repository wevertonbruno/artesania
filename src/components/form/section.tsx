import { HTMLAttributes } from "react";
import * as Styled from "./styled";

interface SectionProps extends HTMLAttributes<HTMLDivElement> {
  title: string;
}

export function Section({ title, children }: SectionProps) {
  return (
    <Styled.FormSection className="form-section">
      {title && <span className="title">{title}</span>}
      {children}
    </Styled.FormSection>
  );
}
