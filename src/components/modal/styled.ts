import styled from "styled-components";

export const Container = styled.dialog`
  background: none;
  overflow: auto;
  &::backdrop {
    background-color: rgba(0, 0, 0, 0.5);
  }

  border: none;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  outline: none;
  &[open] {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  width: 100%;

  &.modal-sm .modal-content {
    max-width: 30rem;
    width: 100%;
  }

  &.modal-lg .modal-content {
    max-width: 50rem;
    width: 100%;
  }

  &.modal-xl .modal-content {
    max-width: 70rem;
    width: 100%;
  }
`;
