import React from "react";
import * as Styled from "../styled";

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

function Radio({ label, ...rest }: Props) {
  return (
    <Styled.Container>
      <input type="radio" {...rest} />
      <div></div>
      <div>{label}</div>
    </Styled.Container>
  );
}

export default Radio;
