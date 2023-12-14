import { useRef, useState } from "react";
import { Card } from "../../components/card";
import {
  MainSection,
  SectionCover,
  SectionTitle,
} from "../../components/main-section";
import * as Styled from "./styled";
import EditableText from "../../components/editabletext";
import { Button } from "../../components/button";
import ModalNewItem from "./components/modal-new-item";
import { useForm } from "react-hook-form";
import { Form } from "../../components/form";
import { Play, PlusSquare, SaveAll, Trash, Trash2 } from "lucide-react";

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
  const formRef = useRef<HTMLFormElement>(null);

  const methods = useForm();
  const { watch } = methods;
  const clientId = watch("cliente_id");

  return (
    <MainSection>
      <SectionTitle>
        <Styled.TitleWrapper>
          <h1>Projetos</h1>
        </Styled.TitleWrapper>
      </SectionTitle>
      <SectionCover src="/project-cover.webp" alt="Projetos Capa" />
      <div className="flex gap-4">
        <Form.Root
          ref={formRef}
          className="flex-1"
          methods={methods}
          onSubmit={(data) => {
            console.log(data);
          }}
        >
          <Card.Root className="mb-4">
            <Card.Body>
              <Form.Header>
                <div
                  className={`relative inline-block before:content-[""] before:absolute before:left-0 before:-bottom-1 before:w-[20%] before:h-1 before:rounded before:bg-satin-600`}
                >
                  <EditableText
                    defaultValue="Novo projeto sem título"
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
                    />
                  </Form.Field>
                  <Form.Field>
                    <Form.Label>Data de entrega:</Form.Label>
                    <Form.Input
                      type="date"
                      name="data_entrega"
                      placeholder="Enter your birth date"
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
                      defaultValue=""
                      nullable
                    />
                  </Form.Field>
                </div>
              </Form.Section>
              {!clientId && (
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
                      />
                    </div>
                    <div className="col-span-2">
                      <Form.Label>Telefone:</Form.Label>
                      <Form.Input
                        type="text"
                        placeholder="(87) 99999-9999"
                        name="cliente_telefone"
                      />
                    </div>
                  </div>
                </Form.Section>
              )}
            </Card.Body>
          </Card.Root>
          <Card.Root>
            <Card.Body>
              <Form.Header>
                <div className="flex justify-between items-start">
                  <div
                    className={`relative inline-block before:content-[""] before:absolute before:left-0 before:-bottom-1 before:w-[20%] before:h-1 before:rounded before:bg-satin-600`}
                  >
                    <EditableText
                      defaultValue="Orçamento 1"
                      name="orcamento_title[]"
                    />
                  </div>
                  <Button variant="ghost" onClick={() => setExpanded(true)}>
                    <PlusSquare />
                  </Button>
                </div>
              </Form.Header>
              <span className="mt-3">Nenhum item adicionado</span>
            </Card.Body>
          </Card.Root>
        </Form.Root>
        <div className="">
          <Card.Root className="mb-4">
            <Card.Body>
              <Card.Title className="text-sm">Ações</Card.Title>
              <div className="mt-1 flex flex-col gap-2">
                <Button
                  className="w-full justify-start bg-satin-100 hover:bg-satin-200"
                  onClick={() => {
                    formRef.current?.submit();
                  }}
                >
                  <SaveAll className="ml-1 mr-4 h-4 w-4" /> Salvar Tudo
                </Button>
                <Button
                  className="w-full justify-start bg-satin-100 hover:bg-satin-200"
                  onClick={() => {
                    formRef.current?.submit();
                  }}
                >
                  <Play fill="currentColor" className="ml-1 mr-4 h-4 w-4" />{" "}
                  Iniciar Projeto
                </Button>
                <hr className="border-dashed" />
                <Button
                  className="w-full justify-start bg-satin-100 hover:bg-satin-200"
                  onClick={() => {
                    formRef.current?.submit();
                  }}
                >
                  <Trash2 className="ml-1 mr-4 h-4 w-4" /> Deletar Projeto
                </Button>
              </div>
            </Card.Body>
          </Card.Root>
          <Card.Root className="mb-4">
            <Card.Body>
              <Card.Title>Tarefas</Card.Title>
              <Card.SubTitle>concluídas: 4</Card.SubTitle>
              Lorem ipsum dolor sit.
            </Card.Body>
          </Card.Root>
        </div>
      </div>
      <ModalNewItem expanded={expanded} setExpanded={setExpanded} />
    </MainSection>
  );
}

export default ProjectNew;
