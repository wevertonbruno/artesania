import React, { useRef, useState } from "react";
import * as Styled from "./styled";

type Props = {
  close: () => void;
};

function Toast({}: Props) {
  const activeRef = useRef<boolean>(false);

  setTimeout(() => {
    activeRef.current = true;
  });

  return (
    <Styled.Toast className={activeRef.current ? "active" : ""}>
      <div className="content">
        <Styled.SuccessIcon />
        <div className="message">
          <span className="title">Success</span>
          <span className="text">Your changes has been saved</span>
        </div>
      </div>
      <Styled.CloseIcon onClick={() => (activeRef.current = false)} />
      <Styled.ProgressBar className={activeRef.current ? "active" : ""} />
    </Styled.Toast>
  );
}

export default Toast;
