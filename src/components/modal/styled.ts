import styled from "styled-components";

export const Container = styled.dialog`
  &::backdrop {
    background-color: rgba(0, 0, 0, 0.5);
  }

  border: none;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  outline: none;
`;
