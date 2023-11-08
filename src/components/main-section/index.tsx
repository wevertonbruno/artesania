import React, { useContext } from "react";
import * as Styled from "./styled";
import { SidebarContext } from "../../context/SidebarContext";
import { Card } from "../card";

interface Props {
  title: string;
  cover?: {
    src: string;
    alt: string;
  };
  children?: JSX.Element | JSX.Element[];
}

function MainSection({ children, cover, title }: Props) {
  const { isOpen } = useContext(SidebarContext);

  return (
    <Styled.Container className={isOpen ? "" : "closed"}>
      <div className="container-lg">
        <h1 className="page-title">{title}</h1>
        {cover && (
          <div className="row">
            <div className="col-12">
              <Card className="mb-5">
                <Styled.Cover {...cover} />
              </Card>
            </div>
          </div>
        )}
        {children}
      </div>
    </Styled.Container>
  );
}

export default MainSection;
