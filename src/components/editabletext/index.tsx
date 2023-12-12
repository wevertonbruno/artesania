import { useState } from "react";
import * as Styled from "./styled";

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  defaultValue: string;
}

const EditableText = ({
  value,
  defaultValue,
  onChange,
  onBlur,
  ...props
}: Props) => {
  const [editing, setEditing] = useState(false);

  const makeEditable = () => {
    setEditing(true);
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    if (onBlur) onBlur(e);
    setEditing(false);
  };

  const handlerChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (onChange) onChange(e);
  };

  return (
    <div className="editable-title" onClick={makeEditable}>
      {editing ? (
        <Styled.Input
          type="text"
          value={value}
          onChange={handlerChange}
          onBlur={handleBlur}
          {...props}
          autoFocus
        />
      ) : (
        <h3 className="text-lg font-semibold">{value || defaultValue}</h3>
      )}
    </div>
  );
};

export default EditableText;
