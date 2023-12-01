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
import {
  Check,
  ChevronsDownUp,
  ChevronsUpDown,
  ChevronsUpDownIcon,
  Search,
} from "lucide-react";
import { Listbox, Transition } from "@headlessui/react";
import { Portal } from "../utils/portal";
import { usePopper } from "react-popper";
import { Controller } from "react-hook-form";

interface Option {
  value: string;
  text: string;
}

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  options: Option[];
  name: string;
  nullable?: boolean;
  value?: string | string[];
  multiple?: boolean;
}

export interface SelectEvent {
  target: {
    name: string;
    value: string;
  };
}

function Select({
  options,
  name,
  value,
  placeholder,
  nullable = false,
  multiple = false,
}: SelectProps) {
  const [search, setSearch] = useState<string>("");

  const [referenceElement, setReferenceElement] = useState<HTMLElement | null>(
    null
  );
  const [popperElement, setPopperElement] = useState<HTMLElement | null>(null);
  const { styles, attributes } = usePopper(referenceElement, popperElement, {
    placement: "bottom-start",
  });

  const getDefaultValue = () => {
    if (multiple && !value) {
      return [];
    }

    if (!multiple && !value) {
      return "";
    }

    return value;
  };

  const optionsMap = options.reduce((acc, option) => {
    acc.set(option.value, option.text);
    return acc;
  }, new Map<string, string>());

  const filter = (options: Option[]) => {
    return options.filter(
      (option) => option.text.toLowerCase().indexOf(search.toLowerCase()) > -1
    );
  };

  // useMemo to add a filteredOptions
  const filteredOptions = React.useMemo(() => {
    return filter(options);
  }, [options, search]);

  const { control } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      defaultValue={value}
      render={({ field: { onChange, value } }) => (
        <Listbox value={value} onChange={onChange} multiple={multiple}>
          <div className="relative">
            <Listbox.Button
              ref={setReferenceElement}
              className="relative cursor-pointer w-full text-sm rounded-sm leading-4 h-10 bg-white py-1.5 pl-3 pr-10 text-left 
          text-gray-900  ring-1 ring-inset ring-gray-200 focus:outline-none focus:ring-2 focus:ring-satin-500
          sm:text-sm sm:leading-6"
            >
              <span className="block truncate">
                <SelectedOption
                  value={value}
                  multiple={multiple}
                  options={optionsMap}
                  placeholder={placeholder || "Selecione..."}
                />
              </span>
              <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                <ChevronsUpDown
                  className="h-4 w-4 text-gray-400"
                  aria-hidden="true"
                />
              </span>
            </Listbox.Button>
            <Portal>
              <div
                className="absolute z-20"
                ref={setPopperElement}
                style={styles.popper}
                {...attributes.popper}
              >
                <Transition
                  as={Fragment}
                  leave="transition ease-in duration-100"
                  leaveFrom="opacity-100"
                  leaveTo="opacity-0"
                >
                  <Listbox.Options
                    className="mt-1 max-h-56 w-full overflow-auto rounded-sm bg-white py-1 text-base shadow-lg ring-1 
          ring-black ring-opacity-5 focus:outline-none sm:text-sm"
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
                        onKeyDown={(e) => {
                          if (e.key === " ") {
                            e.stopPropagation();
                          }
                        }}
                        onBlur={(e) => {
                          setSearch("");
                        }}
                      />
                    </div>
                    {nullable && (
                      <Listbox.Option
                        className={({ active }) =>
                          `text-gray-400 relative cursor-default select-none py-2 pl-10 pr-4 ${
                            active
                              ? "bg-driftwood-100 text-driftwood-900"
                              : "text-gray-400"
                          }`
                        }
                        value=""
                      >
                        Nenhum
                      </Listbox.Option>
                    )}
                    {filteredOptions.map((option, index) => (
                      <Listbox.Option
                        key={option.value}
                        className={({ active }) =>
                          `text-gray-900 relative cursor-default select-none py-2 pl-10 pr-4 ${
                            active
                              ? "bg-driftwood-100 text-driftwood-900"
                              : "text-gray-900"
                          }`
                        }
                        value={option.value}
                      >
                        {({ selected }) => (
                          <>
                            <span
                              className={`block truncate ${
                                selected ? "font-medium" : "font-normal"
                              }`}
                            >
                              {option.text}
                            </span>
                            {selected ? (
                              <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-driftwood-600">
                                <Check className="h-5 w-5" aria-hidden="true" />
                              </span>
                            ) : null}
                          </>
                        )}
                      </Listbox.Option>
                    ))}
                  </Listbox.Options>
                </Transition>
              </div>
            </Portal>
          </div>
        </Listbox>
      )}
    />
  );
}

function SelectedOption({
  value,
  multiple,
  placeholder,
  options,
}: {
  value: string | string[];
  multiple: boolean;
  placeholder: string;
  options: Map<string, string>;
}) {
  console.log(value);

  if (multiple && value) {
    return <>{(value as string[]).map((v) => options.get(v)).join(", ")}</>;
  }

  if (!multiple && value) {
    return <>{options.get(value as string)}</>;
  }

  return <>{placeholder}</>;
}

export default Select;
