import Modal from "../../../components/modal";
import { Button } from "../../../components/button";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Form } from "../../../components/form";
import { Plus, Trash } from "lucide-react";

interface NewItemProps {
  expanded: boolean;
  setExpanded: (value: boolean) => void;
}

function ModalNewItem({ expanded, setExpanded }: NewItemProps) {
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
              <Button
                type="button"
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
              >
                <Plus />
              </Button>
            </div>
          </div>
          <hr className="dashed" />
          <div className="row">
            {produtos.map((product, index) => (
              <div className="mb-3">
                <Form.Label>{`Produto ${index + 1}:`}</Form.Label>
                <div
                  className="flex items-center gap-2 lg:flex-nowrap flex-wrap"
                  key={index}
                >
                  <div className="flex-1">
                    <Form.Select
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
                  <div className="flex-1">
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
                      multiple
                    />
                  </div>
                  <div className="w-14">
                    <Form.Input
                      placeholder="QTD"
                      type="number"
                      name={`produtos.${index}.quantidade`}
                    />
                  </div>
                  <div className="flex-1 min-w-fit">
                    <Form.Input
                      placeholder="Valor"
                      type="number"
                      name={`produtos.${index}.valor`}
                    />
                  </div>
                  <div className="">
                    <Button onClick={() => removeProduct(index)} type="button">
                      <Trash />
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Form.Section>

        <Button type="submit">Adicionar</Button>
      </Form.Root>
    </Modal>
  );
}

export default ModalNewItem;
