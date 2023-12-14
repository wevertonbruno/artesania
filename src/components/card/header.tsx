import { ComponentProps } from "react";

export const CardHeader = (props: ComponentProps<"div">) => {
  return (
    <div
      {...props}
      className="border-b border-zinc-300 text-zinc-700 mb-0 p-1 first:rounded-t last:rounded-none"
    />
  );
};
