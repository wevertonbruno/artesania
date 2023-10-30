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
  padding: 0;
  overflow: hidden;
  border-width: 0;
  outline: none;
  border-radius: 2px;
  cursor: pointer;

  background-color: var(--btn-primary-color);
  color: var(--text-color);

  transition: background-color 0.3s;

  span {
    display: block;
    padding: 12px 24px;
    color: inherit;
    font-size: 16px;
  }

  > * {
    position: relative;
  }

  &:hover,
  &:focus {
    background-color: var(--primary-color);
    color: var(--sidebar-color);
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
    background-color: var(--primary-color);
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
    font-size: ${(props) => (props.fontSize ? props.fontSize + "px" : "16px")};
  }
`;

export const PlusButton = styled.div<BtnIconProps>`
  ${btn}
  height: ${(props) => (props.size ? props.size + "px" : "40px")};
  width: ${(props) => (props.size ? props.size + "px" : "40px")};

  svg {
    height: inherit;
    width: inherit;
    padding: ${(props) => (props.padding ? props.padding + "px" : "10px")};
  }

  border-radius: ${(props) => (props.radius ? props.radius : "50%")};
`;

export const PlusIcon = styled(BiPlus)``;
