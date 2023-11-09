import MainSection from "../../components/main-section";
import Table, { ITable, ITableRow } from "../../components/table";
import { Card, CardBody } from "../../components/card";

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
      width: "auto",
    },
    {
      key: "payment_status",
      name: "Status de Pagamento",
      width: "auto",
    },
  ],
  rowActions: [
    {
      name: "Visualizar tarefas",
      onClick: (row: ITableRow) => {
        alert(row.id + row.name);
      },
    },
  ],
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

const menu = {
  options: [
    {
      name: "Novo Projeto",
      onClick: () => {
        alert("Novo Projeto");
      },
    },
  ],
};

function Projects() {
  return (
    <MainSection
      title="Projetos"
      cover={{ src: "/project-cover.webp", alt: "Projetos Capa" }}
    >
      <div className="row">
        <div className="col-xl-3">
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
        <div className="col-xl-9">
          <Card className="mb-4">
            <CardBody
              title="Resumo de Projetos"
              subtitle={"Total de Projetos: 4"}
            >
              <Table {...projectTableData} />
            </CardBody>
          </Card>
        </div>
      </div>
    </MainSection>
  );
}

export default Projects;
