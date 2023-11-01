import styled from "styled-components";

export const Container = styled.div`
  position: absolute;
  right: 0;
  border-radius: 0.375rem;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  min-width: 3.75rem;
  cursor: pointer;
  background: var(--primary-color-light);

  &.switch-active {
    span::before {
      left: 1.5rem;
    }
  }
`;

export const Toggle = styled.span`
  position: relative;
  height: 1.375rem;
  width: 2.75rem;
  border-radius: 1.5625rem;
  background: var(--toggle-color);

  &::before {
    content: "";
    position: absolute;
    height: 0.9375rem;
    width: 0.9375rem;
    border-radius: 50%;
    top: 50%;
    left: 0.3125rem;
    transform: translateY(-50%);
    background: var(--sidebar-color);
    transition: var(--tran-03);
  }
`;
