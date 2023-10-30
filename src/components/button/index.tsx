import React from "react";
import * as Styled from "./styled";
import { BiPlus } from "react-icons/bi";
import iconsMap from "./icons";

interface BtnProps {
  text?: string;
  fontSize?: number;
  size?: number;
  padding?: number;
}

interface BtnIconProps extends BtnProps {
  icon: "code" | "plus" | "minus";
  radius?: string;
}

function Button({ text, fontSize }: BtnProps) {
  return (
    <Styled.Container fontSize={fontSize}>
      <span>{text}</span>
    </Styled.Container>
  );
}

function PlusButton(props: BtnProps) {
  return (
    <Styled.PlusButton {...props}>
      <BiPlus />
    </Styled.PlusButton>
  );
}

function IconButton(props: BtnIconProps) {
  return (
    <Styled.PlusButton {...props}>{iconsMap[props.icon]}</Styled.PlusButton>
  );
}

export default {
  Button,
  PlusButton,
  IconButton,
};
