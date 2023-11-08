import React from "react";
import MainSection from "../../components/main-section";
import { Container } from "./styled";
import Table, { ITable } from "../../components/table";
import Btn from "../../components/button";
import { Link } from "react-router-dom";
import { Card, CardBody, CardHeader } from "../../components/card";

const projectTableData: ITable = {
  id: "projects",
  columnsDef: [
    {
      key: "id",
      name: "ID",
      width: "1.5rem",
    },
    {
      key: "name",
      name: "Nome",
      width: "auto",
    },
    {
      key: "description",
      name: "Descrição",
      width: "auto",
    },
    {
      key: "client",
      name: "Cliente",
      width: "auto",
    },
    {
      key: "status",
      name: "Status",
      width: "auto",
    },
  ],
  rows: [
    {
      id: "1",
      name: "Projeto 1",
      description: "Descrição do projeto 1",
      client: "Client 1",
      status: "Em andamento",
    },
    {
      id: "2",
      name: "Projeto 2",
      description: "Descrição do projeto 2",
      client: "Client 1",
      status: "Concluído",
    },
    {
      id: "3",
      name: "Projeto 3",
      description: "Descrição do projeto 3",
      client: "Client 2",
      status: "Em andamento",
    },
    {
      id: "4",
      name: "Projeto 4",
      description: "Descrição do projeto 4",
      client: "Client 3",
      status: "Concluído",
    },
  ],
  footer: {
    client: "Em andamento",
    status: "2",
  },
};

const menuOptions = [
  {
    name: "Novo Projeto",
    onClick: () => {
      alert("Novo Projeto");
    },
  },
];

function Projects() {
  return (
    <MainSection
      title="Projetos"
      cover={{ src: "/project-cover.webp", alt: "Projetos Capa" }}
    >
      <div className="row">
        <div className="col-xl-4">
          <div className="row">
            <div className="col-xl-12">
              <Card className="mb-4">
                <CardBody title="Projeto" subtitle="Descrição">
                  Lorem ipsum dolor sit.
                </CardBody>
              </Card>
            </div>
            <div className="col-xl-6 mb-4">
              <Card>
                <CardBody title="Projeto" subtitle="Descrição">
                  Lorem ipsum dolor sit amet consectetur.
                </CardBody>
              </Card>
            </div>
            <div className="col-xl-6 mb-4">
              <Card>
                <CardBody title="Projeto" subtitle="Descrição">
                  Lorem ipsum dolor sit amet consectetur.
                </CardBody>
              </Card>
            </div>
          </div>
        </div>
        <div className="col-xl-8">
          <Card className="mb-4">
            <CardBody
              title="Projeto"
              subtitle="Descrição"
              menu={menuOptions}
            ></CardBody>
            <Table {...projectTableData} />
          </Card>
        </div>
      </div>
    </MainSection>
  );
}

export default Projects;
