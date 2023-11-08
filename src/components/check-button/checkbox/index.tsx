import React from "react";
import * as Styled from "../styled";

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  indeterminate?: boolean;
}

function Checkbox({ label, ...rest }: Props) {
  return (
    <Styled.Container>
      <input type="checkbox" {...rest} />
      <div>
        <svg className="mcui-check" viewBox="-2 -2 35 35" aria-hidden="true">
          <title>checkmark-circle</title>
          <polyline points="7.57 15.87 12.62 21.07 23.43 9.93" />
        </svg>
      </div>
      <div>{label}</div>
    </Styled.Container>
  );
}

export default Checkbox;
