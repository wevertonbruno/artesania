import React, { useContext, useState } from "react";
import * as Styled from "./styled";
import Btn from "../../components/button";
import MainSection from "../../components/main-section";
import Table, { ITable } from "../../components/table";
import Checkbox from "../../components/check-button/checkbox";
import Radio from "../../components/check-button/radio";
import Toaster from "../../components/toaster";
import { ToastContext } from "../../context/ToastContext";

const handleClick = () => {
  alert("teste");
};

const tableData = {
  id: "example-table",
  columnsDef: [
    {
      key: "id",
      name: "ID",
      width: "6.25rem",
    },
    {
      key: "name",
      name: "Name",
    },
    {
      key: "age",
      name: "Age",
    },
    {
      key: "amount",
      name: "Amount",
    },
    {
      key: "actions",
      name: "Actions",
      width: "6.25rem",
    },
  ],
  rows: [
    {
      id: "1",
      name: "John Doe",
      age: 20,
      amount: 100,
      actions: (
        <Btn.IconButton
          onClick={handleClick}
          size={2}
          radius="0.375rem"
          icon="code"
        />
      ),
    },
    {
      id: "2",
      name: "Jane Doe",
      age: 21,
      amount: 200,
      actions: (
        <Btn.IconButton
          onClick={handleClick}
          size={2}
          radius="0.375rem"
          icon="code"
        />
      ),
    },
    {
      id: "3",
      name: "Joe Doe",
      age: 22,
      amount: 300,
      actions: (
        <Btn.IconButton
          onClick={handleClick}
          size={2}
          radius="0.375rem"
          icon="code"
        />
      ),
    },
  ],
  footer: {
    amount: 600,
  },
} as ITable;

function Components() {
  const [ck, setCk] = useState(true);
  const { newToast } = useContext(ToastContext);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCk(!ck);
    console.log(ck);
  };

  return (
    <MainSection>
      <h1>Dashboard</h1>
      <Styled.Container>
        <section>
          <h1>Botoes</h1>
          <div className="flex">
            <Btn.Button text="primary" />
            <Btn.PlusButton size={2.5} padding={0.2} />
            <Btn.IconButton
              size={2.5}
              padding={0.2}
              radius="0.375rem"
              icon="code"
            />
          </div>
          <div>
            <Checkbox
              label="Checked"
              onChange={onChange}
              name="check"
              checked={ck}
            />
            <Checkbox label="unchecked" name="unchecked" />
            <Radio label="Checked" checked name="check" />
            <Radio label="Unchecked" name="check" />
          </div>
        </section>

        <section>
          <h1>Tables</h1>
          <div className="flex">
            <Table {...tableData} />
            <Table {...tableData} />
          </div>
        </section>
        <section>
          <h1>Taster notification</h1>
          <div>
            <Btn.Button
              text="Toast notification"
              onClick={() => {
                newToast({
                  title: "Success",
                  text: "Your changes has been saved",
                  type: "success",
                  duration: "short",
                });
              }}
            />
          </div>
        </section>
      </Styled.Container>
    </MainSection>
  );
}

export default Components;
