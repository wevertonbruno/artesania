import styled from "styled-components";

export const Container = styled.section`
  position: relative;
  height: 100vh;
  padding: 0.625rem 2.5rem;
  flex: 1;
  background-color: var(--body-color);
  transition: var(--tran-05);

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
  border-radius: var(--default-radius);
`;
