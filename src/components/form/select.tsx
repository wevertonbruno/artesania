import React, {
  SelectHTMLAttributes,
  useImperativeHandle,
  useRef,
  useState,
} from "react";
import * as Styled from "./styled";
import useOutsideClick from "../../hooks/use-outside-click";
import { BiChevronDown, BiChevronUp, BiSearch } from "react-icons/bi";
import { useFormContext } from "react-hook-form";

interface Option {
  value: string;
  text: string;
}

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  options: Option[];
  name: string;
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
}: SelectProps) {
  const [expanded, setExpanded] = useState<boolean>(false);
  const [search, setSearch] = useState<string>("");
  const [selected, setSelected] = useState<string>(value as string);
  const { register } = useFormContext();
  const { ref, ...registerAttr } = register(name);

  const selectRef = useRef<HTMLDivElement>(null);
  const selectHtmlRef = useRef<HTMLSelectElement>(null);

  useImperativeHandle(ref, () => selectHtmlRef.current);

  useOutsideClick<HTMLDivElement>(selectRef, () => {
    setExpanded(false);
    setSearch("");
  });

  const optionsMap = new Map<string, string>(
    options.map((obj) => [obj.value, obj.text])
  );

  const filteredOptions = options.filter(
    (option) =>
      search === "" || option.text.toLowerCase().includes(search.toLowerCase())
  );

  const setSelectValue = (val: string) => {
    if (selectHtmlRef.current) {
      selectHtmlRef.current.value = val;
      selectHtmlRef.current.dispatchEvent(
        new Event("change", { bubbles: true })
      );
    }
  };

  const handleSelect = (val: string) => {
    setSelected(val);
    setSelectValue(val);
    setExpanded(false);
    setSearch("");
  };

  const toggleExpanded = () => {
    setExpanded(!expanded);
  };

  return (
    <div className={`dropdown input-field`}>
      <select {...registerAttr} ref={selectHtmlRef} style={{ display: "none" }}>
        <option value="" />
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
            <BiChevronUp className="dropdown-arrow" />
          ) : (
            <BiChevronDown className="dropdown-arrow" />
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
            <BiSearch />
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
    </div>
  );
}

export default Select;
