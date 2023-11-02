import React from "react";
import * as Styled from "./styled";

function index() {
  return (
    <Styled.Container className="select">
      <div className="category-select">
        <label>Category</label>
        <input type="checkbox" />

        <div className="select-button">
          <div>Select category</div>
          <div className="chevrons">
            <Styled.ChevronUpIcon />
            <Styled.ChevronDownIcon />
          </div>
        </div>
      </div>
    </Styled.Container>
  );
}

export default index;
