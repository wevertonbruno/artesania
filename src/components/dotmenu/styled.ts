import styled from "styled-components";
import { BiDotsVerticalRounded } from "react-icons/bi";

interface DotMenuProps {
  $position?: {
    x: number;
    y: number;
  };
}

export const MenuWrapper = styled.div<DotMenuProps>`
  ${(props) =>
    props.$position
      ? `position: absolute; top: ${props.$position.y}rem; right: ${props.$position.x}rem;`
      : "position: relative;"}

  display: inline-flex;

  > div {
    position: relative;
  }
`;

export const Menu = styled.div`
  position: absolute;
  right: 1.5rem;
  top: 0.25rem;
  padding: 0.3rem;
  border-radius: var(--default-radius);
  overflow: hidden;
  font-size: 0.875rem;
  z-index: 3;
  /* background: var(--sidebar-color); */
  backdrop-filter: blur(100px);
  box-shadow: rgba(0, 0, 0, 0.1) 0rem 0.625rem 0.9375rem -0.1875rem,
    rgba(0, 0, 0, 0.05) 0rem 0.25rem 0.375rem -0.125rem;

  opacity: 0;
  transform: scale(0);
  transform-origin: 176px 0px;
  transition: opacity 0.2s ease, transform 0.4s ease;

  &.open {
    transform: scale(1);
    opacity: 1;
  }

  ul {
    list-style: none;
    position: relative;
    outline: 0;

    hr {
      margin: 4px 0px;
      border-width: 0px 0px thin;
      border-color: rgba(145, 158, 171, 0.2);
      border-style: dashed;
    }

    li {
      background-color: transparent;
      white-space: nowrap;
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
      padding: 0.2rem 0.6rem;
      padding-right: 1rem;
      border-radius: var(--default-radius);
      font-size: 0.875rem;
      transition: background-color 300ms ease 0s, color 300ms ease 0s;

      &.risk {
        color: var(--error-color);
      }

      svg {
        width: 1.2rem;
        height: 1.2rem;
        margin-right: 1rem;
        flex-shrink: 0;
      }

      &:hover,
      &:focus {
        background-color: var(--border-color);
      }
    }
  }
`;

export const MenuIcon = styled(BiDotsVerticalRounded)`
  cursor: pointer;
  width: 1.5rem;
  height: 1.5rem;
`;
