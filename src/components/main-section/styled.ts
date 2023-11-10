import styled from "styled-components";

export const Container = styled.section`
  position: relative;
  left: 15.625rem;
  height: 100vh;
  padding: 0.625rem 2.5rem;
  width: calc(100% - 15.625rem);
  background-color: var(--body-color);
  transition: var(--tran-05);

  &.closed {
    left: 5.5rem;
    width: calc(100% - 5.5rem);
  }

  .section-content {
    margin: 0.5rem 0;
  }
`;

export const Title = styled.div`
  padding: 1rem 0;
  > * {
    font-size: 2rem;
  }
`;
export const Cover = styled.img`
  height: 15rem;
  object-fit: cover;
`;
