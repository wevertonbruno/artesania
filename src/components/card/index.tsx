import React, { useState } from "react";
import * as Styled from "./styled";
import { useOutsideClick } from "../../hooks";

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  title?: string;
  subtitle?: string;
  children?: React.ReactNode | JSX.Element | JSX.Element[];
}

interface BodyMenu {
  name: string;
  onClick: () => void;
}

interface BodyProps extends Props {
  menu?: BodyMenu[];
}

export const CardHeader = ({ children, ...props }: Props) => {
  return <Styled.Header {...props}>{children}</Styled.Header>;
};

export const CardBody = ({
  children,
  title,
  subtitle,
  menu,
  ...props
}: BodyProps) => {
  const [open, setOpen] = useState<boolean>(false);
  const ref = useOutsideClick(() => {
    setOpen(false);
  });

  return (
    <Styled.Body {...props}>
      {title && <Styled.Title>{title}</Styled.Title>}
      {subtitle && (
        <Styled.SubTitle className="text-disabled">{subtitle}</Styled.SubTitle>
      )}
      {menu && (
        <Styled.MenuWrapper ref={ref}>
          <Styled.MenuIcon onClick={() => setOpen(!open)} />
          <Styled.Menu className={open ? "open" : ""}>
            <ul>
              {menu.map((item) => (
                <li key={item.name} onClick={item.onClick}>
                  {item.name}
                </li>
              ))}
            </ul>
          </Styled.Menu>
        </Styled.MenuWrapper>
      )}
      {children}
    </Styled.Body>
  );
};

export function Card({ children, ...props }: Props) {
  return <Styled.Container {...props}>{children}</Styled.Container>;
}
