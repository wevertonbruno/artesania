import { ComponentProps } from "react";
import { VariantProps, tv } from "tailwind-variants";

const buttonClass = tv({
  base:
    "flex items-center justify-center rounded-md text-sm font-medium text-zinc-900",
  variants: {
    variant: {
      default: "bg-zinc-100 hover:bg-zinc-200",
      ghost: "bg-transparent hover:bg-gray-100",
    },
    size: {
      default: "px-4 py-2",
      sm: "px-3 py-1.5 text-sm",
      xs: "px-2 py-1 text-xs",
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
    <button className={buttonClass({ circle, size, variant })} {...props} />
  );
}
