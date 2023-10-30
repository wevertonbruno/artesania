import styled from "styled-components";

export const Container = styled.div`
  position: absolute;
  right: 0;
  border-radius: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  min-width: 60px;
  cursor: pointer;
  background: var(--primary-color-light);

  &.switch-active {
    span::before {
      left: 24px;
    }
  }
`;

export const Toggle = styled.span`
  position: relative;
  height: 22px;
  width: 44px;
  border-radius: 25px;
  background: var(--toggle-color);

  &::before {
    content: "";
    position: absolute;
    height: 15px;
    width: 15px;
    border-radius: 50%;
    top: 50%;
    left: 5px;
    transform: translateY(-50%);
    background: var(--sidebar-color);
    transition: var(--tran-03);
  }
`;
