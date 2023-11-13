import React, { useContext } from "react";
import * as Styled from "./styled";
import { SidebarContext } from "../../context/SidebarContext";
import { Card } from "../card";

interface ChildrenProps {
  children: JSX.Element | JSX.Element[] | string;
}

interface CoverProps {
  src: string;
  alt: string;
}

export const SectionTitle = ({ children }: ChildrenProps) => {
  return <Styled.Title className="page-title">{children}</Styled.Title>;
};

export const SectionCover = (cover: CoverProps) => {
  return (
    <div className="row">
      <div className="col-12">
        <Card className="mb-5">
          <Styled.Cover {...cover} />
        </Card>
      </div>
    </div>
  );
};

export function MainSection({ children }: ChildrenProps) {
  const { isOpen } = useContext(SidebarContext);

  return (
    <Styled.Container className={isOpen ? "" : "closed"}>
      <div className="container-lg pb-4">{children}</div>
    </Styled.Container>
  );
}
