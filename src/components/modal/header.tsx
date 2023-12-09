import { Dialog } from "@headlessui/react";
import { ElementType } from "react";

interface HeaderProps {
  children: React.ReactNode | JSX.Element | JSX.Element[] | undefined;
  element?: ElementType<any>;
}

export function Header({ element = "h3", children }: HeaderProps) {
  return (
    <Dialog.Title
      as={element}
      className="p-4 text-base font-semibold leading-6 text-gray-900"
    >
      {children}
    </Dialog.Title>
  );
}
