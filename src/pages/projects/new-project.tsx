import { useEffect, useState } from "react";
import { Card, CardBody, CardSubTitle, CardTitle } from "../../components/card";
import {
  MainSection,
  SectionCover,
  SectionTitle,
} from "../../components/main-section";
import * as Styled from "./styled";
import { Form, FormSection, FormTitle } from "../../components/form";
import Select, { SelectEvent } from "../../components/select";
import EditableText from "../../components/editabletext";
import { Button } from "../../components/button";
import Input from "../../components/input";
import ModalNewItem from "./modal-new-item";
import { useForm } from "react-hook-form";

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

  const { register, setValue } = useForm();

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
      <div className="row">
        <div className="col-xl-9">
          <Card className="mb-4">
            <CardBody>
              <Form>
                <FormTitle>
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
                </FormTitle>
                <FormSection title="Informações de contrato">
                  <div className="row">
                    <div className="col-xl-6">
                      <Input
                        title="Nome do projeto"
                        type="text"
                        placeholder="projeto..."
                        name="nome_projeto"
                        register={register}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="col-xl-6">
                      <Input
                        title="Data de entrega"
                        type="date"
                        name="data_entrega"
                        placeholder="Enter your birth date"
                        register={register}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="col-xl-6">
                      <Input
                        title="Endereço de entrega"
                        type="text"
                        placeholder="projeto..."
                        name="endereco_entrega"
                        register={register}
                      />
                    </div>
                    <div className="col-xl-6">
                      <Select
                        title="Cliente"
                        options={clientes}
                        placeholder="Novo cliente..."
                        name="cliente_id"
                        register={register}
                        setValue={setValue}
                      />
                    </div>
                  </div>
                </FormSection>
                {!formData.cliente_id && (
                  <FormSection title="Cadastro do cliente">
                    <div className="row">
                      <div className="col-xl-6">
                        <Input
                          title="Nome"
                          type="text"
                          placeholder="Nome do cliente..."
                          name="cliente_nome"
                          onChange={handleChange}
                          register={register}
                          required
                        />
                      </div>
                      <div className="col-xl-6">
                        <Input
                          title="Email"
                          type="text"
                          placeholder="Email do cliente"
                          name="cliente_email"
                          register={register}
                          onChange={handleChange}
                        />
                      </div>
                      <div className="col-xl-4">
                        <Input
                          title="CEP"
                          type="text"
                          placeholder="CEP..."
                          name="cliente_cep"
                          register={register}
                          onChange={handleChange}
                          required
                        />
                      </div>

                      <div className="col-xl-4">
                        <Input
                          title="Endereço"
                          type="text"
                          register={register}
                          placeholder="Rua manoel cle..."
                          name="cliente_endereco"
                          onChange={handleChange}
                        />
                      </div>
                      <div className="col-xl-4">
                        <Input
                          title="Telefone"
                          type="text"
                          register={register}
                          placeholder="(87) 99999-9999"
                          name="cliente_telefone"
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                  </FormSection>
                )}
              </Form>
            </CardBody>
          </Card>
          <Card>
            <CardBody>
              <Form>
                <FormTitle>
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
                </FormTitle>
                <span className="mt-3">Nenhum item adicionado</span>
              </Form>
            </CardBody>
          </Card>
        </div>
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
