import { ComponentProps } from "react";
import { twMerge } from "tailwind-merge";

export const CardTitle = (props: ComponentProps<"div">) => {
  return (
    <div
      {...props}
      className={twMerge(
        `mb-2 leading-5 text-lg text-zinc-700`,
        props.className
      )}
    />
  );
};
