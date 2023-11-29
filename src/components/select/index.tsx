import React, { useEffect, useImperativeHandle, useRef, useState } from "react";
import * as Styled from "./styled";
import useOutsideClick from "../../hooks/use-outside-click";
import {
  FieldErrors,
  FieldValues,
  RegisterOptions,
  UseFormRegister,
  UseFormSetValue,
} from "react-hook-form";

interface Option {
  value: string;
  text: string;
}

interface SelectProps extends React.InputHTMLAttributes<HTMLSelectElement> {
  options: Option[];
  name: string;
  register: UseFormRegister<FieldValues>;
  setValue: UseFormSetValue<FieldValues>;
  schema?: RegisterOptions<FieldValues, string>;
  errors?: FieldErrors<FieldValues>;
}

export interface SelectEvent {
  target: {
    name: string;
    value: string;
  };
}

//TODO - ADD TITLE

function Select({
  options,
  name,
  value = "",
  placeholder,
  title,
  register,
  setValue,
  schema,
  ...selectProps
}: SelectProps) {
  const [expanded, setExpanded] = useState<boolean>(false);
  const [search, setSearch] = useState<string>("");
  const [selected, setSelected] = useState<string>(value as string);

  const selectRef = useRef<HTMLDivElement>(null);

  useOutsideClick<HTMLDivElement>(selectRef, () => {
    setExpanded(false);
    setSearch("");
  });

  useEffect(() => {
    setValue(name, selected);
  }, [selected]);

  const optionsMap = new Map<string, string>(
    options.map((obj) => [obj.value, obj.text])
  );

  const filteredOptions = options.filter(
    (option) =>
      search === "" || option.text.toLowerCase().includes(search.toLowerCase())
  );

  const handleSelect = (val: string) => {
    setSelected(val);
    setExpanded(false);
    setSearch("");
  };

  const toggleExpanded = () => {
    setExpanded(!expanded);
  };

  return (
    <Styled.Container className={`dropdown input-field`}>
      <select
        {...register(name, schema)}
        {...selectProps}
        style={{ display: "none" }}
      >
        {options.map((item) => (
          <option key={item.value} value={item.value}>
            {item.text}
          </option>
        ))}
      </select>
      <div ref={selectRef}>
        {title && <label className="dropdown-title">{title}</label>}
        <div className="dropdown-select" onClick={toggleExpanded}>
          <span className={`selected-value ${selected ? "is-select" : ""}`}>
            {selected ? optionsMap.get(selected) : placeholder}
          </span>
          {expanded ? (
            <Styled.ChevronUpIcon className="dropdown-arrow" />
          ) : (
            <Styled.ChevronDownIcon className="dropdown-arrow" />
          )}
        </div>
        <div className={`dropdown-menu ${expanded ? "active" : ""}`}>
          <div className="dropdown-menu-search">
            <input
              placeholder="Search..."
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <Styled.SearchIcon />
          </div>
          <hr />
          <div className="dropdown-menu-inner">
            <div
              className="dropdown-menu-item selected"
              onClick={() => handleSelect("")}
            >
              <i className="text-disabled">
                {placeholder ? placeholder : "Nenhum"}
              </i>
            </div>
            {filteredOptions.map((option) => (
              <div
                key={option.value}
                className={`dropdown-menu-item ${
                  selected === option.value ? "is-select" : ""
                }`}
                data-value={option.value}
                onClick={() => handleSelect(option.value)}
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
