import { HTMLAttributes } from "react";

export function Group({ children }: HTMLAttributes<HTMLDivElement>) {
  return <div className="py-1">{children}</div>;
}
