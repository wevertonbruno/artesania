import { BiSend } from "react-icons/bi";
import styled from "styled-components";

// type FieldProps = {
//   $columns?: number;
// };

type FormActionsProps = {
  $align: "left" | "center" | "right";
};

export const FormContainer = styled.section`
  position: relative;
  width: 100%;
  border-radius: var(--default-radius);
  background-color: var(--sidebar-color);

  header {
    position: relative;
    font-size: 1.25rem;
    font-weight: bold;
    color: var(--text-color);

    &::before {
      content: "";
      position: absolute;
      left: 0;
      bottom: -0.25rem;
      height: 0.1875rem;
      width: 1.7rem;
      border-radius: var(--default-radius);
      background-color: var(--primary-color);
    }
  }

  form {
    position: relative;
    background-color: var(--sidebar-color);

    > .form-section:not(:first-child) {
      margin-top: 2rem;
    }
  }
`;

export const FormSection = styled.div`
  margin-top: 0.625rem;

  .title {
    display: block;
    margin-bottom: 0.5rem;
    font-size: 1rem;
    font-weight: 500;
    margin: 0.375rem 0;
    color: var(--text-color);
  }
`;

export const FormActions = styled.div<FormActionsProps>`
  text-align: ${(props) => props.$align};
`;

export const SubmitIcon = styled(BiSend)``;
