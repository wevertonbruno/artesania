import { ComponentProps } from "react";
import { twMerge } from "tailwind-merge";
import { VariantProps, tv } from "tailwind-variants";

const buttonClass = tv({
  base: "flex items-center justify-center rounded-sm text-sm font-medium text-zinc-700",
  variants: {
    variant: {
      default: "bg-zinc-100 hover:bg-zinc-200",
      ghost: "bg-transparent hover:bg-gray-100",
      success: "bg-emerald-500 hover:bg-emerald-600 text-zinc-50",
      danger: "bg-red-500 hover:bg-red-600 text-zinc-50",
      warning: "bg-amber-100 hover:bg-amber-200",
      info: "bg-blue-500 hover:bg-blue-600 text-zinc-50",
    },
    size: {
      default: "p-2",
      sm: "p-1.5 text-sm",
      xs: "p-1 text-xs",
    },
    circle: {
      true: "rounded-full",
    },
  },
  defaultVariants: {
    size: "default",
    circle: false,
    variant: "default",
  },
});

interface ButtonProps
  extends ComponentProps<"button">,
    VariantProps<typeof buttonClass> {}

export function Button({ circle, size, variant, ...props }: ButtonProps) {
  return (
    <button
      {...props}
      className={twMerge(
        buttonClass({ circle, size, variant }),
        props.className
      )}
    />
  );
}
