import React, { useEffect, useRef, useState } from "react";
import * as Styled from "./styled";

type Props = {
  hidden: boolean;
  duration: "short" | "medium" | "long";
};

function Toast({ hidden, duration }: Props) {
  const [isActive, setIsActive] = useState<boolean>(false);
  const progressBarActive = useRef<boolean>(false);

  useEffect(() => {
    setIsActive(true);
    progressBarActive.current = true;
  }, []);

  useEffect(() => {
    if (hidden) {
      setIsActive(false);
    }
  }, [hidden]);

  return (
    <Styled.Toast className={isActive ? `active ${duration}` : `${duration}`}>
      <div className="content">
        <Styled.SuccessIcon />
        <div className="message">
          <span className="title">Success</span>
          <span className="text">Your changes has been saved</span>
        </div>
      </div>
      <Styled.CloseIcon onClick={() => setIsActive(false)} />
      <Styled.ProgressBar
        className={
          progressBarActive.current ? `active ${duration}` : `${duration}`
        }
      />
    </Styled.Toast>
  );
}

export default Toast;
