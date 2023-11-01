import React, { useContext } from "react";
import * as Styled from "./styled";
import { SidebarContext } from "../../context/SidebarContext";

interface Props {
  children: JSX.Element | JSX.Element[];
}

function MainSection({ children }: Props) {
  const { isOpen } = useContext(SidebarContext);

  return (
    <Styled.Container className={isOpen ? "" : "closed"}>
      {children}
    </Styled.Container>
  );
}

export default MainSection;
