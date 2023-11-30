import { useEffect, useState } from "react";
import { Card, CardBody, CardSubTitle, CardTitle } from "../../components/card";
import {
  MainSection,
  SectionCover,
  SectionTitle,
} from "../../components/main-section";
import * as Styled from "./styled";
import Select, { SelectEvent } from "../../components/select";
import EditableText from "../../components/editabletext";
import { Button } from "../../components/button";
import ModalNewItem from "./modal-new-item";
import { useForm } from "react-hook-form";
import { Form } from "../../components/form";

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

interface FormData {
  cliente_id: string;
  title: string;
  nome_projeto: string;
  data_entrega: string;
  endereco_entrega: string;
  cliente_nome?: string;
  cliente_cep?: string;
  cliente_email?: string;
  orcamento_title?: string[];
}

function ProjectNew() {
  const [expanded, setExpanded] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    cliente_id: "",
    title: "",
    nome_projeto: "",
    data_entrega: "",
    endereco_entrega: "",
    cliente_nome: "",
    cliente_cep: "",
    cliente_email: "",
    orcamento_title: [],
  });

  const methods = useForm();

  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement> | SelectEvent
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  useEffect(() => {
    console.log(formData);
  }, [formData]);

  return (
    <MainSection>
      <SectionTitle>
        <Styled.TitleWrapper>
          <h1>Projetos</h1>
        </Styled.TitleWrapper>
      </SectionTitle>
      <SectionCover src="/project-cover.webp" alt="Projetos Capa" />
      <div className="grid lg:grid-cols-3 gap-4">
        <div className="col-span-2">
          <Card className="mb-4">
            <CardBody>
              <Form.Root methods={methods} onSubmit={() => {}}>
                <Form.Header>
                  <div
                    style={{ display: "flex", justifyContent: "space-between" }}
                  >
                    <EditableText
                      defaultValue="Novo projeto sem título"
                      onBlur={handleBlur}
                      onChange={handleChange}
                      value={formData.title}
                      name="title"
                    />
                  </div>
                </Form.Header>
                <Form.Section title="Informações de contrato">
                  <div className="grid lg:grid-cols-4 gap-4">
                    <Form.Field>
                      <Form.Label>Nome do Projeto:</Form.Label>
                      <Form.Input
                        type="text"
                        placeholder="projeto..."
                        name="nome_projeto"
                        onChange={handleChange}
                      />
                    </Form.Field>
                    <Form.Field>
                      <Form.Label>Data de entrega:</Form.Label>
                      <Form.Input
                        type="date"
                        name="data_entrega"
                        placeholder="Enter your birth date"
                        onChange={handleChange}
                      />
                    </Form.Field>
                    <Form.Field>
                      <Form.Label>Endereço de entrega:</Form.Label>
                      <Form.Input
                        type="text"
                        placeholder="projeto..."
                        name="endereco_entrega"
                      />
                    </Form.Field>
                    <Form.Field>
                      <Form.Label>Cliente:</Form.Label>
                      <Form.Select
                        options={clientes}
                        placeholder="Novo cliente..."
                        name="cliente_id"
                      />
                    </Form.Field>
                  </div>
                </Form.Section>
                {!formData.cliente_id && (
                  <Form.Section title="Cadastro do cliente">
                    <div className="grid lg:grid-cols-6 gap-4">
                      <div className="col-span-3">
                        <Form.Label>Nome do cliente:</Form.Label>
                        <Form.Input
                          type="text"
                          placeholder="Nome do cliente..."
                          name="cliente_nome"
                          required
                        />
                      </div>
                      <div className="col-span-3">
                        <Form.Label>Email do cliente:</Form.Label>
                        <Form.Input
                          type="text"
                          placeholder="Email do cliente"
                          name="cliente_email"
                        />
                      </div>
                      <div className="col-span-2">
                        <Form.Label>CEP:</Form.Label>
                        <Form.Input
                          type="text"
                          placeholder="CEP..."
                          name="cliente_cep"
                          required
                        />
                      </div>

                      <div className="col-span-2">
                        <Form.Label>Endereço:</Form.Label>
                        <Form.Input
                          type="text"
                          placeholder="Rua manoel cle..."
                          name="cliente_endereco"
                          onChange={handleChange}
                        />
                      </div>
                      <div className="col-span-2">
                        <Form.Label>Telefone:</Form.Label>
                        <Form.Input
                          type="text"
                          placeholder="(87) 99999-9999"
                          name="cliente_telefone"
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                  </Form.Section>
                )}
              </Form.Root>
            </CardBody>
          </Card>
          <Card>
            <CardBody>
              <Form.Root methods={methods} onSubmit={() => {}}>
                <Form.Header>
                  <div
                    style={{ display: "flex", justifyContent: "space-between" }}
                  >
                    <EditableText
                      defaultValue="Orçamento 1"
                      onBlur={handleBlur}
                      onChange={handleChange}
                      name="orcamento_title[]"
                    />
                    <Button
                      onClick={() => setExpanded(true)}
                      text="+ Add Item"
                    />
                  </div>
                </Form.Header>
                <span className="mt-3">Nenhum item adicionado</span>
              </Form.Root>
            </CardBody>
          </Card>
        </div>
        <div className="">
          <Card className="mb-4">
            <CardBody>
              <CardTitle>Tarefas</CardTitle>
              <CardSubTitle>concluídas: 4</CardSubTitle>
              Lorem ipsum dolor sit.
            </CardBody>
          </Card>
        </div>
      </div>
      <ModalNewItem
        expanded={expanded}
        setExpanded={setExpanded}
        handleChange={handleChange}
      />
    </MainSection>
  );
}

export default ProjectNew;
