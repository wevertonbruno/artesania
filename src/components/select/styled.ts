import { BiChevronDown, BiChevronUp } from "react-icons/bi";
import styled from "styled-components";

export const Container = styled.div`
  .dropdown {
    position: relative;

    &-select {
      position: relative;
      outline: none;
      padding: 0 0.9rem;
      border: 1px solid var(--border-color);
      border-radius: var(--default-radius);
      height: 2.625rem;
      margin: 0.5rem 0;
      background-color: var(--sidebar-color);
      font-weight: 400;
      font-size: 0.875rem;
      color: var(--text-color);
      transition: all 0.3s ease-in-out;
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    &-menu {
      position: absolute;
      display: block;
      transform: scaleY(0);
      transform-origin: top;
      top: 100%;
      left: 0;
      width: 100%;
      z-index: 10;
      border-radius: 0.25rem;
      background-color: var(--sidebar-color);
      /* box-shadow: var(--box-shadow-default); */
      border: 1px solid var(--border-color);
      border-top: none;
      overflow: hidden;
      transition: transform 0.3s cubic-bezier(0.075, 0.82, 0.165, 1);

      &.active {
        transform: scaleY(1);
      }

      &-inner {
        max-height: 16rem;
        overflow-y: scroll;
        overflow-x: hidden;

        &::-webkit-scrollbar {
          width: 5px;
          height: auto;
        }

        &::-webkit-scrollbar-thumb {
          border-radius: 0.25rem;
          background-color: rgba(0, 0, 0, 0.1);
        }
      }

      &-item {
        font-family: inherit;
        font-size: 1rem;
        font-weight: normal;
        line-height: inherit;
        cursor: pointer;
        user-select: none;
        padding: 0.65rem 1.25rem;
        background-color: var(--sidebar-color);

        &:hover {
          color: var(--text-color);
          background-color: var(--border-color);
        }

        &.is-select,
        &.is-select:hover {
          color: var(--text-color);
          background-color: var(--border-color);
        }
      }

      &-search {
        display: block;
        font-family: inherit;
        font-size: 1rem;
        font-weight: 400;
        line-height: 1.5;
        width: 100%;
        height: auto;
        padding: 0.65rem 1.25rem;
        border: none;
        outline: none;
        color: var(--text-color);
        background-clip: padding-box;
        background-color: var(--primary-color-light);
      }
    }
  }
`;

export const ChevronUpIcon = styled(BiChevronUp)`
  width: 1.5rem;
  height: 1.5rem;
`;

export const ChevronDownIcon = styled(BiChevronDown)`
  width: 1.5rem;
  height: 1.5rem;
`;
