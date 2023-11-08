import React from "react";
import * as Styled from "./styled";

function Card() {
  return (
    <Styled.Container>
      <Styled.Body>
        <Styled.Header>Header</Styled.Header>
        <Styled.BodyContent>Body Content</Styled.BodyContent>
        <Styled.Footer>Footer</Styled.Footer>
      </Styled.Body>
    </Styled.Container>
  );
}

export default Card;
