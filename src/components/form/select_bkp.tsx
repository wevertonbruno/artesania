import React, {
  Fragment,
  SelectHTMLAttributes,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
} from "react";
import * as Styled from "./styled";
import useOutsideClick from "../../hooks/use-outside-click";
import { BiChevronDown, BiChevronUp, BiSearch } from "react-icons/bi";
import { useFormContext } from "react-hook-form";
import { ChevronsDownUp, ChevronsUpDown, Search } from "lucide-react";
import { Transition } from "@headlessui/react";
import { Portal } from "../utils/portal";
import { usePopper } from "react-popper";

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

function Select({ options, name, value = "", placeholder }: SelectProps) {
  const [expanded, setExpanded] = useState<boolean>(false);
  const [search, setSearch] = useState<string>("");
  const [selected, setSelected] = useState<string>(value as string);
  const { register } = useFormContext();
  const { ref, ...registerAttr } = register(name);

  const [referenceElement, setReferenceElement] = useState<HTMLElement | null>(
    null
  );
  const [popperElement, setPopperElement] = useState<HTMLElement | null>(null);
  const { styles, attributes } = usePopper(referenceElement, popperElement, {
    placement: "bottom-start",
  });

  const selectRef = useRef<HTMLDivElement>(null);
  const selectHtmlRef = useRef<HTMLSelectElement>(null);

  useImperativeHandle(ref, () => selectHtmlRef.current);

  useOutsideClick(
    () => {
      setExpanded(false);
      setSearch("");
    },
    selectRef.current,
    popperElement
  );

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
    <div className="relative" ref={selectRef}>
      <select {...registerAttr} ref={selectHtmlRef} style={{ display: "none" }}>
        <option value="" />
        {options.map((item) => (
          <option key={item.value} value={item.value}>
            {item.text}
          </option>
        ))}
      </select>
      <div>
        <div
          className="relative cursor-pointer w-full text-sm rounded-sm leading-4 h-10 bg-white py-1.5 pl-3 pr-10 text-left 
        text-gray-900  ring-1 ring-inset ring-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 
        sm:text-sm sm:leading-6"
          onClick={toggleExpanded}
          ref={setReferenceElement}
        >
          <span className={`block truncate ${selected ? "" : "text-gray-400"}`}>
            {selected ? optionsMap.get(selected) : placeholder}
          </span>
          <span className="pointer-events-none absolute inset-y-0 right-0 ml-3 flex items-center pr-2">
            <ChevronsUpDown size={15} />
          </span>
        </div>
        <Portal>
          <div
            className="absolute z-10"
            {...attributes.popper}
            ref={setPopperElement}
            style={styles.popper}
          >
            <Transition
              show={expanded}
              as={Fragment}
              enter="transition ease-out duration-100"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="transition ease-in duration-75"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0"
            >
              <div
                className={` mt-1 max-h-56 w-56 overflow-auto rounded-sm bg-white py-1 text-base shadow-lg ring-1 
          ring-black ring-opacity-5 focus:outline-none sm:text-sm`}
              >
                <div className="flex items-center gap-4 text-gray-900 relative cursor-default select-none py-2 pl-3 pr-9">
                  <span className="pointer-events-none">
                    <Search size={15} className="text-gray-400" />
                  </span>
                  <input
                    className="w-full outline-none"
                    placeholder="Search..."
                    type="text"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                  />
                </div>
                <hr />
                <ul>
                  <li
                    className="text-gray-900 relative cursor-default select-none py-2 pl-3 pr-9"
                    onClick={() => handleSelect("")}
                  >
                    <i className="text-disabled">
                      {placeholder ? placeholder : "Nenhum"}
                    </i>
                  </li>
                  {filteredOptions.map((option) => (
                    <li
                      key={option.value}
                      className={`text-gray-900 relative cursor-default select-none py-2 pl-3 pr-9 hover:bg-gray-100 cursor-pointer transition-all ${
                        selected === option.value ? "bg-gray-100" : ""
                      }`}
                      data-value={option.value}
                      onClick={() => handleSelect(option.value)}
                    >
                      {option.text}
                    </li>
                  ))}
                </ul>
              </div>
            </Transition>
          </div>
        </Portal>
      </div>
    </div>
  );
}

export default Select;
