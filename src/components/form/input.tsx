import { ElementType, InputHTMLAttributes } from "react";
import { useFormContext } from "react-hook-form";
import { Mail } from "lucide-react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  icon?: ElementType;
}

//TODO - Add style to this component
export function FormInput({ icon: Icon, ...props }: InputProps) {
  const { register } = useFormContext();

  return (
    <div className="relative">
      <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
        {Icon && <Icon className="w-5 h-5 text-gray-500 dark:text-gray-400" />}
      </div>
      <input
        id={props.name}
        {...register(props.name)}
        className={`bg-white border border-gray-200 text-gray-900 text-sm rounded-sm outline-satin-500 h-10 leading-4
         focus:ring-satin-700 focus:border-satin-600 block w-full p-2 ${
           Icon ? "pl-10" : "px-3"
         }`}
        {...props}
      />
    </div>
  );
}
