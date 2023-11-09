import styled from "styled-components";

export const Container = styled.div`
  word-wrap: break-word;
  background-clip: initial;
  background-color: var(--sidebar-color);
  border-radius: var(--default-radius);
  display: flex;
  flex-direction: column;
  min-width: 0;
  position: relative;
  box-shadow: var(--box-shadow-default);
`;

export const Body = styled.div`
  position: relative;
  color: var(--text-color);
  flex: 1 1 auto;
  padding: 1.5rem;
`;

export const Title = styled.h5`
  margin-bottom: 0.5rem;
  line-height: 1.2;
  font-size: 1.3rem;
`;

export const SubTitle = styled.h6`
  margin-top: -0.5rem;
  font-size: 0.8rem;
`;

export const Header = styled.div`
  border-bottom: 1px solid var(--border-color);
  color: var(--text-color);
  margin-bottom: 0;
  padding: 1rem;

  &:first-child {
    border-radius: var(--default-radius);
  }
`;

export const Content = styled.div``;

export const Footer = styled.div``;
