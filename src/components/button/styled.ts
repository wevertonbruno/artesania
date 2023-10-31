import styled, { css } from "styled-components";
import { BiPlus } from "react-icons/bi";
import { IconType } from "react-icons";

interface BtnProps {
  fontSize?: number;
}

interface BtnIconProps {
  size?: number;
  padding?: number;
  radius?: string;
}

const btn = css`
  position: relative;
  padding: 0.7rem 1.4rem;
  overflow: hidden;
  border-width: 0;
  outline: none;
  border-radius: var(--default-radius);
  cursor: pointer;
  box-shadow: var(--box-shadow-default);
  min-width: 5rem;
  display: flex;

  background-color: var(--btn-primary-color);
  color: var(--btn-primary-text);

  transition: background-color 0.3s;

  span {
    display: block;
    color: inherit;
    font-size: 1rem;
  }

  > * {
    position: relative;
  }

  &:hover,
  &:focus {
    background-color: var(--btn-primary-hover);
    color: var(--btn-primary-text);
  }

  &::before {
    content: "";

    position: absolute;
    top: 50%;
    left: 50%;

    display: block;
    width: 0;
    padding-top: 0;

    border-radius: 100%;

    background-color: rgba(236, 240, 241, 0.3);

    -webkit-transform: translate(-50%, -50%);
    -moz-transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
    -o-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
  }

  &:active {
    background-color: var(--btn-primary-hover);
  }

  &:active::before {
    width: 120%;
    padding-top: 120%;

    transition: width 0.2s ease-out, padding-top 0.2s ease-out;
  }
`;

export const Container = styled.button<BtnProps>`
  ${btn}
  span {
    font-size: ${(props) => (props.fontSize ? props.fontSize + "rem" : "1rem")};
  }
`;

export const IconButton = styled.button<BtnIconProps>`
  ${btn}
  height: ${(props) => (props.size ? props.size + "rem" : "2rem")};
  width: ${(props) => (props.size ? props.size + "rem" : "2rem")};
  min-width: ${(props) => (props.size ? props.size + "rem" : "2rem")};
  padding: 0;

  svg {
    height: inherit;
    width: inherit;
    padding: ${(props) => (props.padding ? props.padding + "rem" : ".3rem")};
  }

  border-radius: ${(props) => (props.radius ? props.radius : "50%")};
`;

export const PlusIcon = styled(BiPlus)``;
