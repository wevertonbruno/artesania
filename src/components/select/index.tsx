import React from "react";
import * as Styled from "./styled";

function Select() {
  return (
    <Styled.Container className="select">
      <div className="category-select">
        <label>Category</label>
        <input type="checkbox" className="select-control" />

        <div className="select-button">
          <span className="selected-value">Select category</span>
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
