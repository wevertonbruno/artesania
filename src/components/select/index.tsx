import React, { useState } from "react";
import * as Styled from "./styled";

interface IOptionItem {
  value: string;
  text: string;
}

interface ISelectProps {
  options: IOptionItem[];
  placeholder?: string;
  onChange: (value: string) => void;
}

//TODO - ADD TITLE

function Select({ options, placeholder, onChange }: ISelectProps) {
  const [isActive, setIsActive] = useState<boolean>(false);
  const [selectedValue, setSelectedValue] = useState<IOptionItem | null>(null);
  const [search, setSearch] = useState<string>("");

  const filteredOptions = options.filter(
    (option) =>
      search === "" || option.text.toLowerCase().includes(search.toLowerCase())
  );

  const onClickHandler = (selected: IOptionItem) => {
    setSelectedValue(selected);
    onChange(selected.value);
  };

  return (
    <Styled.Container className="select">
      <div className="dropdown">
        <div className="dropdown-select" onClick={() => setIsActive(!isActive)}>
          <span className="selected-value">{placeholder}</span>
          {isActive ? (
            <Styled.ChevronUpIcon className="dropdown-arrow" />
          ) : (
            <Styled.ChevronDownIcon className="dropdown-arrow" />
          )}
        </div>
        <div className={`dropdown-menu ${isActive ? "active" : ""}`}>
          <input
            placeholder="Search..."
            type="text"
            className="dropdown-menu-search"
            onChange={(e) => setSearch(e.target.value)}
          />
          <div className="dropdown-menu-inner">
            <div
              className="dropdown-menu-item selected"
              onClick={() => setSelectedValue(null)}
            >
              {placeholder ? placeholder : "Nenhum"}
            </div>
            {filteredOptions.map((option) => (
              <div
                key={option.value}
                className={`dropdown-menu-item ${
                  selectedValue?.value === option.value ? "is-select" : ""
                }`}
                data-value={option.value}
                onClick={() => onClickHandler(option)}
              >
                {option.text}
              </div>
            ))}
          </div>
        </div>
      </div>
    </Styled.Container>
  );
}

export default Select;
