import React from "react";
import * as Styled from "./styled";

function Select() {
  return (
    <Styled.Container className="select">
      <div className="category-select">
        <label>Category</label>

        <div className="select-button">
          <input className="selected-value" placeholder="Select Category" />
          <div className="chevrons">
            <Styled.ChevronUpIcon className="up" />
            <Styled.ChevronDownIcon className="down" />
          </div>
        </div>
      </div>
    </Styled.Container>
  );
}

export default Select;
