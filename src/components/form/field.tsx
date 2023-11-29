import { HTMLAttributes } from "react";

//TODO - Add style to this component
export function FormField(props: HTMLAttributes<HTMLDivElement>) {
  return <div className="flex flex-col gap-1" {...props} />;
}
