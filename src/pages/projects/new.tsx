import { useState } from "react";
import { Card, CardBody, CardSubTitle, CardTitle } from "../../components/card";
import {
  MainSection,
  SectionCover,
  SectionTitle,
} from "../../components/main-section";
import * as Styled from "./styled";
import Form from "../../components/form";
import Select from "../../components/select";
import EditableText from "../../components/editabletext";

const clientes = [
  {
    value: "1",
    text: "Cliente 1",
  },
  {
    value: "2",
    text: "Cliente 2",
  },
  {
    value: "3",
    text: "Cliente 3",
  },
];

function ProjectNew() {
  const [client, setClient] = useState<string | null>(null);
  const [title, setTitle] = useState<string>("Novo projeto sem título");

  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setTitle(value || "Novo projeto sem título");
  };

  const handlerChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setTitle(value);
  };

  return (
    <MainSection>
      <SectionTitle>
        <Styled.TitleWrapper>
          <h1>Projetos</h1>
        </Styled.TitleWrapper>
      </SectionTitle>
      <SectionCover src="/project-cover.webp" alt="Projetos Capa" />
      <div className="row">
        <div className="col-xl-3">
          <div className="row">
            <div className="col-xl-12">
              <Card className="mb-4">
                <CardBody>
                  <CardTitle>Tarefas</CardTitle>
                  <CardSubTitle>concluídas: 4</CardSubTitle>
                  Lorem ipsum dolor sit.
                </CardBody>
              </Card>
            </div>
          </div>
        </div>
        <div className="col-xl-9">
          <Card className="mb-4">
            <CardBody>
              <CardTitle>
                <div style={{ position: "absolute", right: 0, top: 0 }}>+</div>
              </CardTitle>
              <Form.Container>
                <Form.Title>
                  <div
                    style={{ display: "flex", justifyContent: "space-between" }}
                  >
                    <EditableText
                      defaultValue="Novo projeto sem título"
                      onBlur={handleBlur}
                      onChange={handlerChange}
                      value={title}
                    />
                  </div>
                </Form.Title>
                <Form.Section title="Informações de contrato">
                  <Form.Fields columns={2}>
                    <Form.Input
                      title="Nome do projeto"
                      type="text"
                      placeholder="projeto..."
                      name="nome_projeto"
                    />
                    <Form.Input
                      title="Data de entrega"
                      type="date"
                      name="data_entrega"
                      placeholder="Enter your birth date"
                    />
                    <Form.Input
                      title="Endereço de entrega"
                      type="text"
                      placeholder="projeto..."
                      name="endereco_entrega"
                    />
                    <Select
                      title="Cliente"
                      options={clientes}
                      selectedValue={client}
                      placeholder="Novo cliente..."
                      onChange={(value) => setClient(value)}
                    />
                  </Form.Fields>
                </Form.Section>
                {!client && (
                  <Form.Section title="Cadastro do cliente">
                    <Form.Fields columns={3}>
                      <Form.Input
                        title="Nome do cliente"
                        type="text"
                        placeholder="Nome do cliente..."
                        name="cliente_nome"
                        required
                      />
                      <Form.Input
                        title="Email"
                        type="text"
                        placeholder="Email do cliente"
                        name="cliente_email"
                      />
                      <Form.Input
                        title="CEP"
                        type="text"
                        placeholder="CEP..."
                        name="cliente_cep"
                        required
                      />
                    </Form.Fields>
                  </Form.Section>
                )}
              </Form.Container>
            </CardBody>
          </Card>
        </div>
      </div>
    </MainSection>
  );
}

export default ProjectNew;
