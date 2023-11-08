import React from "react";
import MainSection from "../../components/main-section";
import { Container } from "./styled";
import Table, { ITable } from "../../components/table";
import Btn from "../../components/button";
import { Link } from "react-router-dom";

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

function Projects() {
  return (
    <MainSection title="Projetos">
      <Container>
        <Table {...projectTableData} />
        <Link to="/projects/new">
          <Btn.PlusButton className="new-btn" size={3} />
        </Link>
      </Container>
    </MainSection>
  );
}

export default Projects;
