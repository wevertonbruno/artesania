import Modal from "../../components/modal";
import Input from "../../components/input";
import Select, { SelectEvent } from "../../components/select";
import { IconButton } from "../../components/button";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { ButtonPrimary } from "../../components/button/styled";
import { Form } from "../../components/form";

interface NewItemProps {
  expanded: boolean;
  setExpanded: (value: boolean) => void;
  handleChange: (e: React.ChangeEvent<HTMLInputElement> | SelectEvent) => void;
}

function ModalNewItem({ expanded, setExpanded, handleChange }: NewItemProps) {
  const methods = useForm();

  const [output, setOutput] = useState<{
    descricao: string;
    quantidade: number;
    produtos: {
      produto_id: string;
      extra_id: string;
      quantidade: number;
      valor: number;
    }[];
  }>();

  const [produtos, setProdutos] = useState<
    {
      produto: string;
      extra: string;
      quantidade: number;
      valor: number;
    }[]
  >([]);

  const clearAndClose = () => {
    setProdutos([
      {
        produto: "",
        extra: "",
        quantidade: 0,
        valor: 0,
      },
    ]);
    setExpanded(false);
  };

  const removeProduct = (index: number) => {
    const newProducts = [...produtos];
    newProducts.splice(index, 1);
    setProdutos(newProducts);
  };

  const submit = (data: any) => {
    console.log(data);
    setOutput({
      ...data,
    });
  };

  return (
    <Modal isOpen={expanded} onClose={clearAndClose} size="xl">
      <Form.Root onSubmit={submit} methods={methods}>
        <Form.Section title="Adicionar Item">
          <div className="row">
            <Form.Field>
              <Form.Label>Descriçao:</Form.Label>
              <Form.Input
                placeholder="Descricão do item..."
                type="text"
                name="descricao"
              />
            </Form.Field>
            <Form.Field>
              <Form.Label>Qtd.:</Form.Label>
              <Form.Input placeholder="QTD" type="number" name="quantidade" />
            </Form.Field>
            <div className="form-control col-xl-1">
              <IconButton
                type="button"
                icon="plus"
                onClick={() =>
                  setProdutos((prev) => [
                    ...prev,
                    {
                      produto: "",
                      extra: "",
                      quantidade: 0,
                      valor: 0,
                    },
                  ])
                }
              />
            </div>
          </div>
          <hr className="dashed" />
          <div className="row">
            {produtos.map((product, index) => (
              <div className="row" key={index}>
                <div className="form-control col-xl-4">
                  <Form.Select
                    title={`Produto ${index + 1}`}
                    placeholder="Selecione o produto..."
                    options={[
                      {
                        value: "1",
                        text: "Xícara 1/2",
                      },
                      {
                        value: "2",
                        text: "Xicara Completa",
                      },
                    ]}
                    name={`produtos.${index}.produto_id`}
                  />
                </div>
                <div className="form-control col-xl-4">
                  <Form.Select
                    title=""
                    placeholder="Selecione o extra..."
                    options={[
                      {
                        value: "1",
                        text: "Nome da Pessoa",
                      },
                      {
                        value: "2",
                        text: "Mini-Coração",
                      },
                    ]}
                    name={`produtos.${index}.extra_id`}
                  />
                </div>
                <div className="form-control col-xl-1">
                  <Form.Input
                    placeholder="QTD"
                    type="number"
                    name={`produtos.${index}.quantidade`}
                  />
                </div>
                <div className="form-control col-xl-2">
                  <Form.Input
                    placeholder="Valor"
                    type="number"
                    name={`produtos.${index}.valor`}
                  />
                </div>
                <div className="form-control col-xl-1">
                  <IconButton
                    icon="trash"
                    onClick={() => removeProduct(index)}
                    type="button"
                  />
                </div>
              </div>
            ))}
          </div>
        </Form.Section>

        <ButtonPrimary type="submit">Adicionar</ButtonPrimary>
      </Form.Root>
    </Modal>
  );
}

export default ModalNewItem;
