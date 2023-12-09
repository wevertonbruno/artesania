import { Dialog } from "@headlessui/react";
import { HTMLAttributes } from "react";

export function Body(props: HTMLAttributes<HTMLDivElement>) {
  return (
    <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
      <div className="mt-3 text-center sm:mt-0 sm:text-left">
        {props.children}
      </div>
    </div>
  );
}
