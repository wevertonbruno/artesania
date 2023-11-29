import { BiChevronDown, BiChevronUp, BiSearch } from "react-icons/bi";
import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: end;

  label {
    font-size: 0.75rem;
    font-weight: 500;
    color: var(--text-color);
    opacity: 0.9;
  }

  .dropdown-title {
    font-size: 0.75rem;
    font-weight: 500;
    color: var(--text-color);
    opacity: 0.9;
  }

  .dropdown-select {
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
    color: #bbbbbb;
    transition: all 0.3s ease-in-out;
    display: flex;
    align-items: center;
    justify-content: space-between;

    .is-select {
      color: var(--text-color);
    }
  }

  .dropdown-menu {
    position: absolute;
    display: block;
    transform: scaleY(0);
    transform-origin: top;
    top: 100%;
    left: calc(1.5rem * 0.5);
    width: calc(100% - 1.5rem);
    z-index: 10;
    border-radius: 0.25rem;

    background-color: var(--sidebar-color);
    /* box-shadow: var(--box-shadow-default); */
    border: 1px solid var(--border-color);

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

    hr {
      margin: 4px 0px;
      border-width: 0px 0px thin;
      border-color: rgba(145, 158, 171, 0.2);
      border-style: dashed;
    }

    &-search {
      position: relative;
      display: flex;
      align-items: center;
      margin: 0.65rem 0.6rem;
      border: 1px solid var(--border-color);
      border-radius: var(--default-radius);

      svg {
        position: absolute;
        left: 1rem;
        height: 1rem;
        width: 1rem;
      }

      input {
        height: 2rem;
        width: 100%;
        font-size: 1rem;
        padding: 0 1rem 0 3rem;
        outline: none;
        border: none;
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

export const SearchIcon = styled(BiSearch)``;
