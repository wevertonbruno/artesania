import React, { useContext, useState } from "react";
import * as Styled from "./styled";
import Btn from "../../components/button";
import { MainSection, SectionTitle } from "../../components/main-section";
import Table, { ITable } from "../../components/table";
import Checkbox from "../../components/check-button/checkbox";
import Radio from "../../components/check-button/radio";
import { ToastContext } from "../../context/ToastContext";
import Form from "../../components/form";
import Select from "../../components/select";

const handleClick = () => {
  alert("teste");
};

const selectOptions = [
  {
    value: "1",
    text: "Option 1",
  },
  {
    value: "2",
    text: "Option 2",
  },
  {
    value: "3",
    text: "Option 3",
  },
  {
    value: "4",
    text: "Option 4",
  },
];

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
          size={1.5}
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
          size={1.5}
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
          size={1.5}
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
      <SectionTitle>
        <h1>Componentes</h1>
      </SectionTitle>
      <Styled.Container>
        <section>
          <h1>Botoes</h1>
          <div>
            <Btn.Button text="primary" />
            <Btn.PlusButton size={2.5} padding={0.2} />
            <Btn.IconButton
              size={2.5}
              padding={0.2}
              radius="0.375rem"
              icon="code"
            />
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
              text="Toast Sucess"
              onClick={() => {
                newToast({
                  title: "Success",
                  text: "Your changes has been saved",
                  type: "success",
                  duration: "short",
                });
              }}
            />

            <Btn.Button
              text="Toast Error"
              onClick={() => {
                newToast({
                  title: "Error",
                  text: "Error to save your changes",
                  type: "error",
                  duration: "short",
                });
              }}
            />

            <Btn.Button
              text="Toast Warning"
              onClick={() => {
                newToast({
                  title: "Warning",
                  text: "Your changes has not been saved",
                  type: "warning",
                  duration: "short",
                });
              }}
            />

            <Btn.Button
              text="Toast Info"
              onClick={() => {
                newToast({
                  title: "Info",
                  text: "Your changes has not been saved",
                  type: "info",
                  duration: "short",
                });
              }}
            />
          </div>
        </section>
        <section>
          <Form.Container title="Registration">
            <Form.Section title="Project Info">
              <Form.Fields columns={4}>
                <Form.Input
                  title="First Name"
                  type="text"
                  placeholder="Enter your first name"
                />
                <Form.Input
                  title="Data of Birth"
                  type="date"
                  placeholder="Enter your birth date"
                />
                <Form.Input
                  title="Email"
                  type="text"
                  placeholder="Enter your e-mail"
                />

                <Select
                  title="Categoria"
                  placeholder="Selecione uma opção"
                  options={selectOptions}
                  selectedValue={null}
                  onChange={() => {}}
                />
                <Form.Input
                  title="Data of Birth"
                  type="date"
                  placeholder="Enter your birth date"
                />
                <Form.Input
                  title="Email"
                  type="text"
                  placeholder="Enter your e-mail"
                />
              </Form.Fields>
            </Form.Section>

            <Form.Section title="Client Info">
              <Form.Fields columns={3}>
                <Form.Input
                  title="First Name"
                  type="text"
                  placeholder="Enter your first name"
                  required
                />
                <Form.Input
                  title="Data of Birth"
                  type="date"
                  placeholder="Enter your birth date"
                />
                <Form.Input
                  title="Email"
                  type="text"
                  placeholder="Enter your e-mail"
                  required
                />
              </Form.Fields>
              <Form.Fields columns={2}>
                <Form.Input
                  title="Email"
                  type="text"
                  placeholder="Enter your e-mail"
                />
                <Form.Input
                  title="Age"
                  type="number"
                  placeholder="Enter your first name"
                />
                <Form.Input
                  title="Data of Birth"
                  type="date"
                  placeholder="Enter your birth date"
                />
                <Form.Input
                  title="Email"
                  type="text"
                  placeholder="Enter your e-mail"
                  required
                />
              </Form.Fields>
            </Form.Section>
            <Form.Section title="Personal info">
              <Form.Fields columns={2}>
                <Checkbox
                  label="Checked"
                  onChange={onChange}
                  name="check"
                  checked={ck}
                />
                <Checkbox
                  label="unchecked"
                  name="unchecked"
                  onChange={onChange}
                />
              </Form.Fields>
              <Form.Fields columns={2}>
                <Radio label="Male" name="gender" onChange={onChange} />
                <Radio label="Female" name="gender" onChange={onChange} />
              </Form.Fields>
            </Form.Section>
            <Form.ActionBar align="left">
              <Btn.Button text="Submit" />
            </Form.ActionBar>
          </Form.Container>
        </section>
      </Styled.Container>
    </MainSection>
  );
}

export default Components;
