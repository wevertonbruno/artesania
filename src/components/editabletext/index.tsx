import { useState } from "react";
import * as Styled from "./styled";
import { useFormContext } from "react-hook-form";
import { Form } from "../form";

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  defaultValue: string;
  name: string;
}

const EditableText = ({ value, defaultValue, name, ...props }: Props) => {
  const [editing, setEditing] = useState(false);
  const [itValue, setItValue] = useState(value || defaultValue);

  return (
    <div className="editable-title" onClick={() => setEditing(true)}>
      <Form.Input
        className={`${editing ? "block" : "hidden"}`}
        name={name}
        type="text"
        value={itValue}
        onChange={(e) => {
          setItValue(e.target.value);
        }}
        onBlur={() => {
          if (!itValue) {
            setItValue(value || defaultValue);
          }
          setEditing(false);
        }}
        {...props}
        isFocused={editing}
      />
      <h3 className={`text-lg font-semibold ${editing ? "hidden" : "block"}`}>
        {itValue}
      </h3>
    </div>
  );
};

export default EditableText;
