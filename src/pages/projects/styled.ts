import styled from "styled-components";

export const Container = styled.section`
  .new-btn {
    position: absolute;
    bottom: 1.5rem;
    right: 1.5rem;
  }
`;

export const TitleWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 0.5rem;
  > * {
    font-size: inherit;
    margin-bottom: 0.5rem;
  }
`;
