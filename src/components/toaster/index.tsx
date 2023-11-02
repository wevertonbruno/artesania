import React, { useEffect, useRef, useState } from "react";
import * as Styled from "./styled";
import { IToast } from "toaster";

const iconMap = {
  success: <Styled.SuccessIcon />,
  error: <Styled.ErrorIcon />,
  warning: <Styled.WarningIcon />,
  info: <Styled.InfoIcon />,
};

function Toast({ hidden, duration, type, title, text }: IToast) {
  const [isActive, setIsActive] = useState<boolean>(false);
  const progressBarActive = useRef<boolean>(false);
  const containerClass = `${duration} ${type} ${isActive && "active"}`;
  const progressClass = `${duration} ${type} ${
    progressBarActive.current && "active"
  }`;

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
    <Styled.Toast className={containerClass}>
      <div className="content">
        {iconMap[type]}
        <div className="message">
          <span className="title">{title}</span>
          <span className="text">{text}</span>
        </div>
      </div>
      <Styled.CloseIcon onClick={() => setIsActive(false)} />
      <Styled.ProgressBar className={progressClass} />
    </Styled.Toast>
  );
}

export default Toast;
