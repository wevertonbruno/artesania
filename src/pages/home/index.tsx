import React, { useContext, useState } from "react";
import * as Styled from "./styled";
import Btn from "../../components/button";
import { SidebarContext } from "../../context/SidebarContext";
import MainSection from "../../components/mainsection";
import Table from "../../components/table";
import Checkbox from "../../components/checkbox";
import Radio from "../../components/radio";

function Home() {
  const [ck, setCk] = useState(true);
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCk(!ck);
    console.log(ck);
  };

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
        <h1>Botoes</h1>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: 20,
            width: "100%",
          }}
        >
          <Btn.Button text="primary" />
          <Btn.PlusButton size={40} padding={5} />
          <Btn.IconButton size={40} padding={5} radius="6px" icon="code" />
          <Checkbox
            label="Check button"
            onChange={onChange}
            name="check"
            checked={ck}
          />

          <Radio label="Radio button" name="check" />
          <Radio label="Radio button" name="check" />
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
        <h1>Tables</h1>
        <Table />
      </div>
    </MainSection>
  );
}

export default Home;
