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

/* display: flex;
  gap: 0.91rem;
  flex-wrap: wrap;

  .input-field {
    flex: 1 1 calc(100% / ${(props) => props.$columns} - 0.91rem);
  } */
export const Fields = styled.div``;

export const InputField = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: end;

  label {
    font-size: 0.75rem;
    font-weight: 500;
    color: var(--text-color);
    opacity: 0.9;
  }

  input {
    outline: none;
    padding: 0 0.9rem;
    border: 1px solid var(--border-color);
    border-radius: var(--default-radius);
    height: 2.625rem;
    margin: 0.5rem 0;
    background-color: var(--sidebar-color);
    font-weight: 400;
    font-size: 0.875rem;
    color: var(--text-color);

    &::placeholder {
      color: var(--text-color);
      opacity: 0.5;
    }
  }
`;

export const FormActions = styled.div<FormActionsProps>`
  text-align: ${(props) => props.$align};
`;

export const SubmitIcon = styled(BiSend)``;
