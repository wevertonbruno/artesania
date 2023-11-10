import { useState } from "react";
import { Card, CardBody } from "../../components/card";
import {
  MainSection,
  SectionCover,
  SectionTitle,
} from "../../components/main-section";
import * as Styled from "./styled";

const EditableTitle = () => {
  const [editing, setEditing] = useState(false);
  const [title, setTitle] = useState("Sem título");

  const makeEditable = () => {
    setEditing(true);
  };

  const makeNonEditable = (e: React.FocusEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setTitle(value || "Sem título");
    setEditing(false);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setTitle(value);
  };

  return (
    <div className="editable-title" onClick={makeEditable}>
      {editing ? (
        <Styled.Input
          type="text"
          value={title}
          onChange={handleInputChange}
          onBlur={makeNonEditable}
          autoFocus
        />
      ) : (
        <span>{title}</span>
      )}
    </div>
  );
};

function Project() {
  return (
    <MainSection>
      <SectionTitle>
        <Styled.TitleWrapper>
          <h1>Projeto: </h1>
          <EditableTitle />
        </Styled.TitleWrapper>
      </SectionTitle>
      <SectionCover src="/project-cover.webp" alt="Projetos Capa" />
      <div className="row">
        <div className="col-xl-3">
          <div className="row">
            <div className="col-xl-12">
              <Card className="mb-4">
                <CardBody title="Projeto" subtitle="Descrição">
                  Lorem ipsum dolor sit.
                </CardBody>
              </Card>
            </div>
          </div>
        </div>
        <div className="col-xl-9">
          <Card className="mb-4">
            <CardBody title="Projeto" subtitle="Descrição">
              Lorem ipsum dolor sit.
            </CardBody>
          </Card>
        </div>
      </div>
    </MainSection>
  );
}

export default Project;
