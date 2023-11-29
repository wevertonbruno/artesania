import { InputHTMLAttributes } from "react";
import { useFormContext } from "react-hook-form";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
}

//TODO - Add style to this component
export function Input(props: InputProps) {
  const { register } = useFormContext();

  return <input id={props.name} {...register(props.name)} {...props} />;
}
