import React from "react";
import * as Styled from "./styled";

interface Props {
  active: boolean;
  onClick?: () => void;
}

function SwitchButton({ active, onClick }: Props) {
  return (
    <Styled.Container
      onClick={onClick}
      className={active ? "switch-active" : ""}
    >
      <Styled.Toggle />
    </Styled.Container>
  );
}

export default SwitchButton;
