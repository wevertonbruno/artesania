import React, { useContext } from "react";
import * as Styled from "./styled";
import Btn from "../../components/button";
import { SidebarContext } from "../../context/SidebarContext";
import MainSection from "../../components/mainsection";
import { BiCode } from "react-icons/bi";
import Table from "../../components/table";

function Home() {
  const { isOpen } = useContext(SidebarContext);

  return (
    <MainSection>
      <span>Dashboard</span>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <span>Botoes</span>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <Btn.Button text="primary" />
          <Btn.PlusButton size={40} padding={5} />
          <Btn.IconButton size={40} padding={5} radius="6px" icon="code" />
        </div>
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          marginTop: 20,
        }}
      >
        <span>Tables</span>
        <Table />
      </div>
    </MainSection>
  );
}

export default Home;
