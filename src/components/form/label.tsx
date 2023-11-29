import { LabelHTMLAttributes } from "react";

export function FormLabel(props: LabelHTMLAttributes<HTMLLabelElement>) {
  return (
    <label
      {...props}
      className="text-xs text-zinc-600 flex font-semibold items-center justify-between"
    />
  );
}
