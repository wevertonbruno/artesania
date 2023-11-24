import styled, { css } from "styled-components";
import { BiPlus } from "react-icons/bi";

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
  padding: 0.5rem 1.2rem;
  overflow: hidden;
  border-width: 0;
  outline: none;
  border-radius: var(--default-radius);
  cursor: pointer;
  box-shadow: var(--box-shadow-default);

  background-color: var(--btn-primary-color);
  color: var(--btn-primary-text);

  transition: background-color 0.3s;

  span {
    display: block;
    color: inherit;
    font-size: 1rem;
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

  border-radius: ${(props) =>
    props.radius ? props.radius : "var(--default-radius)"};
`;

export const PlusIcon = styled(BiPlus)``;

export const ButtonPrimary = styled.button`
  display: inline-flex;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: center;
  justify-content: center;
  position: relative;
  box-sizing: border-box;
  -webkit-tap-highlight-color: transparent;
  outline: 0px;
  border: 0px;
  margin: 0px;
  cursor: pointer;
  user-select: none;
  vertical-align: middle;
  appearance: none;
  text-decoration: none;
  font-weight: 600;

  font-size: 0.875rem;
  line-height: 1.5;
  min-width: 64px;

  color: var(--btn-primary-text);
  background-color: var(--btn-primary-color);

  border-radius: var(--default-radius);
  text-transform: none;
  padding: 8px 20px;
  position: relative;
  overflow: hidden;

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

  &:active::before {
    width: 120%;
    padding-top: 120%;

    transition: width 0.2s ease-out, padding-top 0.2s ease-out;
  }
`;
