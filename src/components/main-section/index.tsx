import React, { useContext } from "react";
import * as Styled from "./styled";
import { SidebarContext } from "../../context/SidebarContext";

interface Props {
  title: string;
  children?: JSX.Element | JSX.Element[];
}

function MainSection({ children, title }: Props) {
  const { isOpen } = useContext(SidebarContext);

  return (
    <Styled.Container className={isOpen ? "" : "closed"}>
      <h1 className="page-title">{title}</h1>
      {children}
    </Styled.Container>
  );
}

export default MainSection;
