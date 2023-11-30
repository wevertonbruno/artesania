import {
  MainSection,
  SectionCover,
  SectionTitle,
} from "../../components/main-section";
import Table, { ITable, ITableRow } from "../../components/table";
import { Card, CardBody, CardSubTitle, CardTitle } from "../../components/card";
import { Button } from "../../components/button";
import { useNavigate } from "react-router-dom";
import { FolderOpen, ListChecks, Plus, Trash } from "lucide-react";
import { Container } from "../../components/button/container";
import { Icon } from "../../components/button/icon";

function Projects() {
  const navigate = useNavigate();

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
        key: "client",
        name: "Cliente",
        width: "auto",
      },
      {
        key: "delivery_date",
        name: "Data de Entrega",
        width: "auto",
      },
      {
        key: "amount",
        name: "Valor",
        width: "auto",
      },
      {
        key: "project_status",
        name: "Status de Projeto",
        nowrap: true,
        width: "auto",
      },
      {
        key: "payment_status",
        name: "Status de Pagamento",
        width: "auto",
      },
    ],
    rowActions: {
      options: [
        {
          name: "Abrir Projeto",
          icon: FolderOpen,
          onClick: (row: ITableRow) => {
            navigate("/projetos/" + row.id);
          },
        },
        {
          name: "Visualizar tarefas",
          icon: ListChecks,
          onClick: (row: ITableRow) => {
            alert(row.id + row.name);
          },
        },
      ],
      riskOptions: [
        {
          name: "Apagar Projeto",
          icon: Trash,
          onClick: (row: ITableRow) => {
            alert(row.id + row.name);
          },
        },
      ],
    },
    rows: [
      {
        id: "1",
        name: "Projeto 1",
        client: "Cliente 1",
        delivery_date: "01/01/2022",
        amount: "R$ 100,00",
        project_status: <span className="status">Em Andamento</span>,
        payment_status: <span className="status">Pendente</span>,
      },
      {
        id: "2",
        name: "Projeto 2",
        client: "Cliente 2",
        delivery_date: "01/01/2022",
        amount: "R$ 200,00",
        project_status: <span className="status">Em Andamento</span>,
        payment_status: <span className="status">Pendente</span>,
      },
      {
        id: "3",
        name: "Projeto 3",
        client: "Cliente 3",
        delivery_date: "01/01/2022",
        amount: "R$ 300,00",
        project_status: <span className="status">Em Andamento</span>,
        payment_status: <span className="status">Pendente</span>,
      },
      {
        id: "4",
        name: "Projeto 4",
        client: "Cliente 4",
        delivery_date: "01/01/2022",
        amount: "R$ 400,00",
        project_status: <span className="status">Em Andamento</span>,
        payment_status: <span className="status">Pendente</span>,
      },
    ],
  };

  return (
    <MainSection>
      <SectionTitle>
        <h1>Projetos</h1>
      </SectionTitle>
      <SectionCover src="/project-cover.webp" alt="Projetos Capa" />
      <div className="grid lg:grid-cols-3 gap-2">
        <div className="">
          <div className="row">
            <div className="col-xl-12">
              <Card className="mb-4">
                <CardBody title="Projeto" subtitle="Descrição">
                  Lorem ipsum dolor sit.
                </CardBody>
              </Card>
            </div>
          </div>
        </div>
        <div className="col-span-2">
          <Card className="mb-4">
            <CardBody>
              <CardTitle
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                Resumo de Projetos{" "}
                <Button.Container
                  onClick={() => navigate("/projetos/novo-projeto")}
                >
                  <Button.Icon icon={Plus} />
                </Button.Container>
              </CardTitle>
              <CardSubTitle>Total de Projetos: 4</CardSubTitle>
              <Table {...projectTableData} />
            </CardBody>
          </Card>
        </div>
      </div>
    </MainSection>
  );
}

export default Projects;
