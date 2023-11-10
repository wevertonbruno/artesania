import { useState } from "react";
import { Card, CardBody, CardSubTitle, CardTitle } from "../../components/card";
import {
  MainSection,
  SectionCover,
  SectionTitle,
} from "../../components/main-section";
import * as Styled from "./styled";
import Form from "../../components/form";
import EditableText from "../../components/editabletext";

function ProjectView() {
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
              <Form.Container title="Registration">
                <Form.Section title="Project Info">
                  <Form.Fields columns={4}>
                    <Form.Input
                      title="First Name"
                      type="text"
                      placeholder="Enter your first name"
                    />
                    <Form.Input
                      title="Data of Birth"
                      type="date"
                      placeholder="Enter your birth date"
                    />
                    <Form.Input
                      title="Email"
                      type="text"
                      placeholder="Enter your e-mail"
                    />
                    <Form.Input
                      title="Data of Birth"
                      type="date"
                      placeholder="Enter your birth date"
                    />
                    <Form.Input
                      title="Email"
                      type="text"
                      placeholder="Enter your e-mail"
                    />
                  </Form.Fields>
                </Form.Section>

                <Form.Section title="Client Info">
                  <Form.Fields columns={3}>
                    <Form.Input
                      title="First Name"
                      type="text"
                      placeholder="Enter your first name"
                      required
                    />
                    <Form.Input
                      title="Data of Birth"
                      type="date"
                      placeholder="Enter your birth date"
                    />
                    <Form.Input
                      title="Email"
                      type="text"
                      placeholder="Enter your e-mail"
                      required
                    />
                  </Form.Fields>
                  <Form.Fields columns={2}>
                    <Form.Input
                      title="Email"
                      type="text"
                      placeholder="Enter your e-mail"
                    />
                    <Form.Input
                      title="Age"
                      type="number"
                      placeholder="Enter your first name"
                    />
                    <Form.Input
                      title="Data of Birth"
                      type="date"
                      placeholder="Enter your birth date"
                    />
                    <Form.Input
                      title="Email"
                      type="text"
                      placeholder="Enter your e-mail"
                      required
                    />
                  </Form.Fields>
                </Form.Section>
              </Form.Container>
            </CardBody>
          </Card>
        </div>
      </div>
    </MainSection>
  );
}

export default ProjectView;
