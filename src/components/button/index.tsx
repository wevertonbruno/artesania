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
  icon: "code" | "plus" | "minus";
  radius?: string;
}

function Button({ text, fontSize, ...rest }: BtnProps) {
  return (
    <Styled.Container fontSize={fontSize} {...rest}>
      <span>{text}</span>
    </Styled.Container>
  );
}

function PlusButton(props: BtnProps) {
  return (
    <Styled.IconButton {...props}>
      <BiPlus />
    </Styled.IconButton>
  );
}

function IconButton(props: BtnIconProps) {
  return (
    <Styled.IconButton {...props}>{iconsMap[props.icon]}</Styled.IconButton>
  );
}

export default {
  Button,
  PlusButton,
  IconButton,
};
