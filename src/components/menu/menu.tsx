import { ElementType, Fragment, HTMLAttributes } from "react";
import { MoreVertical } from "lucide-react";
import { Menu, Transition } from "@headlessui/react";

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

interface MenuProps extends HTMLAttributes<HTMLDivElement> {
  icon?: ElementType;
  position?: "top" | "bottom";
}

function Container({
  icon: Icon = MoreVertical,
  children,
  position = "bottom",
}: MenuProps) {
  return (
    <Menu as="div" className="relative inline-block text-left">
      <Menu.Button>
        <Icon strokeWidth={2} size={20} className="cursor-pointer" />
      </Menu.Button>
      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items
          className={`dropdown absolute right-0 z-10 mt-2 w-56 origin-top-right divide-y divide-gray-100 
        rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none
        ${position === "bottom" ? "" : "bottom-10"}
        `}
        >
          {children}
        </Menu.Items>
      </Transition>
    </Menu>
  );
}

export default Container;
