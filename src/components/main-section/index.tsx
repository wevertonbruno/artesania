import React, { useContext } from "react";
import * as Styled from "./styled";
import { SidebarContext } from "../../context/SidebarContext";

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
    <div className="mb-6">
      <img
        className="overflow-hidden object-cover h-52 w-full rounded-sm"
        src={cover.src}
        alt={cover.alt}
      />
    </div>
  );
};

export function MainSection({ children }: ChildrenProps) {
  const { isOpen } = useContext(SidebarContext);

  return (
    <section className="overflow-auto w-screen h-screen scrollbar-thin">
      <div className="h-full container mx-auto pb-4 px-8 ">{children}</div>
    </section>
  );
}
