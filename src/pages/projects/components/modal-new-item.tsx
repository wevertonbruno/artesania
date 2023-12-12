import { Button } from "../../../components/button";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Form } from "../../../components/form";
import { Plus, Trash } from "lucide-react";
import Modal from "../../../components/modal";

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
  >([
    {
      produto: "",
      extra: "",
      quantidade: 0,
      valor: 0,
    },
  ]);

  const clearAndClose = () => {
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
    <Modal.Container isOpen={expanded} onClose={clearAndClose} size="xl">
      <Modal.Header>Adicionar Item</Modal.Header>
      <Form.Root onSubmit={submit} methods={methods}>
        <Modal.Body>
          <div className="flex items-end gap-2 mb-2 flex-wrap">
            <div className="flex-1">
              <Form.Label>Descriçao:</Form.Label>
              <Form.Input
                placeholder="Descricão do item..."
                type="text"
                name="descricao"
              />
            </div>
            <div className="w-20">
              <Form.Label>Qtd.:</Form.Label>
              <Form.Input placeholder="QTD" type="number" name="quantidade" />
            </div>
            <div className="">
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
          <div className="">
            {produtos.map((product, index) => (
              <div className="mb-3">
                <Form.Label>{`Produto ${index + 1}:`}</Form.Label>
                <div
                  className="flex items-center gap-2 lg:flex-nowrap flex-wrap"
                  key={index}
                >
                  <div className="flex-1 lg:min-w-[14rem]">
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
                  <div className="flex-1 lg:min-w-[14rem]">
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
                  <div className="w-20">
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
        </Modal.Body>
        <Modal.Footer>
          <Button type="submit">Adicionar</Button>
          <Button onClick={clearAndClose}>cancelar</Button>
        </Modal.Footer>
      </Form.Root>
    </Modal.Container>
  );
}

export default ModalNewItem;
