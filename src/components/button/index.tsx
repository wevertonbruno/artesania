import React from "react";
import * as Styled from "./styled";
import { BiPlus } from "react-icons/bi";
import iconsMap from "./icons";

interface BtnProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text?: string;
  fontSize?: number;
  size?: number;
  padding?: number;
}

interface BtnIconProps extends BtnProps {
  icon: "code" | "plus" | "minus" | "trash";
  radius?: string;
}

export function Button({ text, fontSize, ...rest }: BtnProps) {
  return (
    <Styled.ButtonPrimary {...rest}>
      <span>{text}</span>
    </Styled.ButtonPrimary>
  );
}

export function PlusButton(props: BtnProps) {
  return (
    <Styled.IconButton {...props}>
      <BiPlus />
    </Styled.IconButton>
  );
}

export function IconButton(props: BtnIconProps) {
  return (
    <Styled.IconButton {...props}>{iconsMap[props.icon]}</Styled.IconButton>
  );
}

const module = {
  Button,
  PlusButton,
  IconButton,
};

export default module;
