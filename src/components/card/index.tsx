import React from "react";
import * as Styled from "./styled";
import { Menu } from "../menu";
import { MenuProps } from "dotmenu";

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  title?: string;
  subtitle?: string;
  children?: React.ReactNode | JSX.Element | JSX.Element[];
}

interface BodyProps extends Props {
  menu?: MenuProps;
}

export const CardHeader = ({ children, ...props }: Props) => {
  return <Styled.Header {...props}>{children}</Styled.Header>;
};

export const CardTitle = ({ children, ...props }: Props) => {
  return <Styled.Title {...props}>{children}</Styled.Title>;
};

export const CardSubTitle = ({ children, ...props }: Props) => {
  return (
    <Styled.SubTitle className="text-disabled" {...props}>
      {children}
    </Styled.SubTitle>
  );
};

export const CardBody = ({
  children,
  title,
  subtitle,
  menu,
  ...props
}: BodyProps) => {
  return (
    <Styled.Body {...props}>
      {/* {menu && <DotMenu options={menu.options} position={{ x: 1.5, y: 1.5 }} />} */}
      {children}
    </Styled.Body>
  );
};

export function Card({ children, ...props }: Props) {
  return <Styled.Container {...props}>{children}</Styled.Container>;
}
