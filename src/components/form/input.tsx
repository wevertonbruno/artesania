import { ElementType, InputHTMLAttributes, useEffect } from "react";
import { useFormContext } from "react-hook-form";
import { Mail } from "lucide-react";
import { tv } from "tailwind-variants";
import { twMerge } from "tailwind-merge";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  icon?: ElementType;
  isFocused?: boolean;
}

const styles = tv({
  base: "bg-white border border-gray-200 text-gray-900 text-sm rounded-sm outline-satin-500 h-10 leading-4 focus:ring-satin-700 focus:border-satin-600 block w-full p-2",
});

//TODO - Add style to this component
export function FormInput({
  icon: Icon,
  name,
  onChange: onCustomChange,
  onBlur: onCustomBlur,
  isFocused = false,
  ...props
}: InputProps) {
  const { register, setFocus } = useFormContext();
  const { ref, ...rest } = register(name, {
    onBlur: onCustomBlur,
    onChange: onCustomChange,
  });

  useEffect(() => {
    if (isFocused) {
      setFocus(name);
    }
  }, [isFocused, name, setFocus]);

  return (
    <div className="relative">
      <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
        {Icon && <Icon className="w-5 h-5 text-gray-500 dark:text-gray-400" />}
      </div>
      <input
        id={name}
        {...props}
        {...rest}
        ref={ref}
        className={twMerge(
          styles(),
          `${Icon ? "pl-10" : "px-3"}`,
          props.className
        )}
      />
    </div>
  );
}
