import { BiDotsVerticalRounded } from "react-icons/bi";
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
  overflow: hidden;
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
  margin-top: calc(0.5rem * -0.5);
  font-size: 1rem;
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

export const MenuWrapper = styled.div`
  position: absolute;
  right: 1rem;
  top: 1rem;
`;

export const Menu = styled.div`
  position: absolute;
  right: 1.5rem;
  top: 0rem;
  padding: 0.5rem;
  border-radius: var(--default-radius);
  overflow: hidden;
  font-size: 0.875rem;
  z-index: 3;
  background: var(--sidebar-color);
  box-shadow: rgba(0, 0, 0, 0.1) 0rem 0.625rem 0.9375rem -0.1875rem,
    rgba(0, 0, 0, 0.05) 0rem 0.25rem 0.375rem -0.125rem;

  opacity: 0;
  transform: scale(0);
  transform-origin: 176px 0px;
  transition: all 246ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;

  &.open {
    opacity: 1;
    transform: scale(1);
  }

  ul {
    list-style: none;
    position: relative;
    outline: 0;
    li {
      background-color: transparent;
      cursor: pointer;
      user-select: none;
      vertical-align: middle;
      appearance: none;
      font-weight: 400;
      line-height: 1.625;
      letter-spacing: 0.00938em;
      display: flex;
      justify-content: flex-start;
      align-items: center;
      position: relative;
      text-decoration: none;
      min-width: 10rem;
      min-height: unset;
      padding: 0.3rem 1rem;
      border-radius: 0.375rem;
      font-size: 0.875rem;
      transition: background-color 300ms ease 0s, color 300ms ease 0s;

      &:hover,
      &:focus {
        background-color: var(--border-color);
      }
    }
  }
`;

export const Content = styled.div``;

export const Footer = styled.div``;

export const MenuIcon = styled(BiDotsVerticalRounded)`
  cursor: pointer;
  width: 1.5rem;
  height: 1.5rem;
`;
