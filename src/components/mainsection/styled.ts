import styled from "styled-components";

export const Container = styled.section`
  position: relative;
  left: 250px;
  height: 100vh;
  padding: 10px 40px;
  width: calc(100% - 250px);
  background-color: var(--body-color);
  transition: var(--tran-05);

  &.closed {
    left: 88px;
    width: calc(100% - 88px);
  }
`;
