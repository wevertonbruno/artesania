import { HTMLAttributes } from "react";

export function Footer(props: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6 gap-2"
      {...props}
    />
  );
}
