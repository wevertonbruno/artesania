import Modal from "../../components/modal";
import Input from "../../components/input";
import Select, { SelectEvent } from "../../components/select";
import { FormSection } from "../../components/form";
import { IconButton } from "../../components/button";
import { useState } from "react";
import { Form } from "react-router-dom";
import { useForm } from "react-hook-form";
import { ButtonPrimary } from "../../components/button/styled";

interface NewItemProps {
  expanded: boolean;
  setExpanded: (value: boolean) => void;
  handleChange: (e: React.ChangeEvent<HTMLInputElement> | SelectEvent) => void;
}

function ModalNewItem({ expanded, setExpanded, handleChange }: NewItemProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

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
    setOutput({
      ...data,
    });
  };

  return (
    <Modal isOpen={expanded} onClose={clearAndClose} size="xl">
      <Form onSubmit={handleSubmit(submit)}>
        <FormSection title="Adicionar Item">
          <div className="row">
            <div className="col-xl-10">
              <Input
                placeholder="Descricão do item..."
                type="text"
                register={register}
                name="descricao"
                schema={{
                  required: "Descricão obrigatória",
                }}
                errors={errors}
              />
            </div>
            <div className="col-xl-1">
              <Input
                placeholder="QTD"
                type="number"
                name="quantidade"
                register={register}
              />
            </div>
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
              <FormSection key={index}>
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
                      name={`produtos.${index}.quantidade`}
                      register={register}
                    />
                  </div>
                  <div className="form-control col-xl-2">
                    <Input
                      placeholder="Valor"
                      type="number"
                      name={`produtos.${index}.valor`}
                      register={register}
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
              </FormSection>
            ))}
          </div>
        </FormSection>
        <FormSection>
          <ButtonPrimary type="submit">Adicionar</ButtonPrimary>
        </FormSection>
      </Form>
    </Modal>
  );
}

export default ModalNewItem;
