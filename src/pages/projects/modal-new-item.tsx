import Modal from "../../components/modal";
import Input from "../../components/input";
import Select, { SelectEvent } from "../../components/select";
import Form from "../../components/form";
import { Button, IconButton } from "../../components/button";
import { useState } from "react";
import { BiTrash } from "react-icons/bi";

interface NewItemProps {
  expanded: boolean;
  setExpanded: (value: boolean) => void;
  handleChange: (e: React.ChangeEvent<HTMLInputElement> | SelectEvent) => void;
}

interface NewProductProps {
  index: number;
  handleChange: (e: React.ChangeEvent<HTMLInputElement> | SelectEvent) => void;
}

function NewProduct({ index, handleChange }: NewProductProps) {
  return (
    <Form.Section>
      <div className="row">
        <div className="form-control col-xl-4">
          <Select
            title={`Produto ${index + 1}`}
            placeholder="Selecione o produto..."
            options={[]}
            value=""
            onChange={handleChange}
          />
        </div>
        <div className="form-control col-xl-4">
          <Select
            title=""
            placeholder="Selecione o extra..."
            options={[]}
            value=""
            onChange={handleChange}
          />
        </div>
        <div className="form-control col-xl-1">
          <Input
            placeholder="QTD"
            type="number"
            name="orcamento_quantidade[]"
            onChange={handleChange}
          />
        </div>
        <div className="form-control col-xl-2">
          <Input
            placeholder="Valor"
            type="text"
            name="orcamento_valor[]"
            onChange={handleChange}
          />
        </div>
        <div className="form-control col-xl-1">
          <BiTrash />
        </div>
      </div>
    </Form.Section>
  );
}

function ModalNewItem({ expanded, setExpanded, handleChange }: NewItemProps) {
  const [produtos, setProdutos] = useState<
    {
      produto: string;
      extra: string;
      quantidade: number;
      valor: number;
    }[]
  >([]);

  const clearAndClose = () => {
    setProdutos([]);
    setExpanded(false);
  };

  return (
    <Modal isOpen={expanded} onClose={clearAndClose} size="xl">
      <Form.Section title="Adicionar Item">
        <div className="row">
          <div className="col-xl-8">
            <Input
              placeholder="Descricão do item..."
              type="text"
              name="descricao"
              onChange={handleChange}
            />
          </div>
          <div className="col-xl-2">
            <Input
              placeholder="QTD"
              type="number"
              name="orcamento_quantidade[]"
              onChange={handleChange}
            />
          </div>
          <div className="form-control col-xl-2">
            <IconButton
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
            <NewProduct key={index} index={index} handleChange={handleChange} />
          ))}
        </div>
      </Form.Section>
    </Modal>
  );
}

export default ModalNewItem;
