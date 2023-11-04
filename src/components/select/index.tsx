import React, { useState } from "react";
import * as Styled from "./styled";
import { useOutsideClick } from "../../hooks";

interface IOptionItem {
  value: string;
  text: string;
}

interface ISelectProps {
  title?: string;
  options: IOptionItem[];
  placeholder?: string;
  onChange: (value: string) => void;
}

//TODO - ADD TITLE

function Select({ options, placeholder, title, onChange }: ISelectProps) {
  const [expanded, setExpanded] = useState<boolean>(false);
  const [selectedValue, setSelectedValue] = useState<IOptionItem | null>(null);
  const [search, setSearch] = useState<string>("");

  const selectRef = useOutsideClick(() => {
    setExpanded(false);
  });

  const filteredOptions = options.filter(
    (option) =>
      search === "" || option.text.toLowerCase().includes(search.toLowerCase())
  );

  const onClickHandler = (selected: IOptionItem | null) => {
    setSelectedValue(selected);
    onChange(selected ? selected.value : "");
    setExpanded(false);
  };

  return (
    <Styled.Container className="dropdown input-field" ref={selectRef}>
      {title && <label className="dropdown-title">{title}</label>}
      <input
        type="checkbox"
        className="dropdown-control"
        onClick={() => setExpanded(!expanded)}
      />
      <div className="dropdown-select">
        <span className={`selected-value ${selectedValue ? "is-select" : ""}`}>
          {selectedValue ? selectedValue.text : placeholder}
        </span>
        {expanded ? (
          <Styled.ChevronUpIcon className="dropdown-arrow" />
        ) : (
          <Styled.ChevronDownIcon className="dropdown-arrow" />
        )}
      </div>
      <div className={`dropdown-menu ${expanded ? "active" : ""}`}>
        <input
          placeholder="Search..."
          type="text"
          className="dropdown-menu-search"
          onChange={(e) => setSearch(e.target.value)}
        />
        <div className="dropdown-menu-inner">
          <div
            className="dropdown-menu-item selected"
            onClick={() => onClickHandler(null)}
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
    </Styled.Container>
  );
}

export default Select;
