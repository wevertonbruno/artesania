import { ComponentProps } from "react";
import { twMerge } from "tailwind-merge";

export function CardContainer(props: ComponentProps<"div">) {
  return (
    <div
      {...props}
      className={twMerge(
        "break-words bg-white rounded-sm min-w-0 relative shadow-sm",
        props.className
      )}
    />
  );
}
