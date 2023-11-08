import React from "react";
import MainSection from "../../components/main-section";
import { Container } from "./styled";
import Table, { ITable } from "../../components/table";
import Btn from "../../components/button";
import { Link } from "react-router-dom";

const projectTableData: ITable = {
  id: "products",
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
      key: "factory",
      name: "Fabricante",
      width: "auto",
    },
    {
      key: "qte",
      name: "QTD",
      width: "1.5rem",
    },
  ],
  rows: [
    {
      id: "1",
      name: "Produto 1",
      description: "Descrição do produto 1",
      factory: "Tramontina",
      qte: "10",
    },
    {
      id: "2",
      name: "Produto 2",
      description: "Descrição do produto 2",
      factory: "Tramontina",
      qte: "10",
    },
    {
      id: "3",
      name: "Produto 3",
      description: "Descrição do produto 3",
      factory: "Tramontina",
      qte: "10",
    },
    {
      id: "4",
      name: "Produto 4",
      description: "Descrição do produto 4",
      factory: "Tramontina",
      qte: "10",
    },
  ],
  footer: {
    factory: "Total",
    qte: "40",
  },
};

function Products() {
  return (
    <MainSection title="Produtos">
      <Container>
        <Table {...projectTableData} />
        <Link to="/products/new">
          <Btn.PlusButton className="new-btn" size={3} />
        </Link>
      </Container>
    </MainSection>
  );
}

export default Products;
