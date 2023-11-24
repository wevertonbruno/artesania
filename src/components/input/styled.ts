import { BiErrorCircle } from "react-icons/bi";
import styled from "styled-components";

export const Container = styled.div`
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

  .error-container {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    margin-top: -4px;
    color: var(--error-color);
    font-size: small;
  }
`;

export const ErrorIcon = styled(BiErrorCircle)``;
