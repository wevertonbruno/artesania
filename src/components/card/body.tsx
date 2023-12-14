import { ComponentProps } from "react";

export const CardBody = (props: ComponentProps<"div">) => {
  return <div {...props} className="relative text-zinc-700 flex-1 p-6" />;
};
