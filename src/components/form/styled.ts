import styled from "styled-components";

export const FormContainer = styled.section`
  position: relative;
  width: 100%;
  border-radius: var(--default-radius);
  padding: 1.9rem;
  margin: 0 1rem;
  background-color: var(--sidebar-color);
  box-shadow: var(--box-shadow-default);

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
    margin-top: 1rem;
    background-color: var(--sidebar-color);

    .details {
      margin-top: 0.625rem;
    }

    .title {
      font-size: 1rem;
      font-weight: 500;
      margin: 0.375rem 0;
      color: var(--text-color);
    }

    .fields {
      display: flex;
      align-items: center;
      justify-content: space-between;

      .input-field {
        display: flex;
        width: calc(100% / 3 - 0.91rem);
        flex-direction: column;
        margin: 0.25rem 0;

        label {
          font-size: 0.75rem;
          font-weight: 500;
          color: var(--text-color);
          opacity: 0.9;
        }

        input {
          height: 2.625rem;
          margin: 0.5rem 0;
        }
      }
    }
  }
`;
