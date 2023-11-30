import { ElementType, Fragment, HTMLAttributes, useState } from "react";
import { MoreVertical } from "lucide-react";
import { Menu, Transition } from "@headlessui/react";
import { Portal } from "../utils/portal";
import { usePopper } from "react-popper";
import { Placement } from "@popperjs/core";

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

interface MenuProps extends HTMLAttributes<HTMLDivElement> {
  icon?: ElementType;
  position?: Placement;
}

function Container({
  icon: Icon = MoreVertical,
  children,
  position = "auto-start",
}: MenuProps) {
  const [referenceElement, setReferenceElement] =
    useState<HTMLButtonElement | null>(null);
  const [popperElement, setPopperElement] = useState<HTMLDivElement | null>(
    null
  );
  const { styles, attributes } = usePopper(referenceElement, popperElement, {
    placement: position,
  });

  return (
    <Menu as="div" className="relative inline-block text-left">
      <Menu.Button ref={setReferenceElement}>
        <Icon strokeWidth={2} size={20} className="cursor-pointer" />
      </Menu.Button>
      <Portal>
        <div
          className="absolute z-20"
          ref={setPopperElement}
          style={styles.popper}
          {...attributes.popper}
        >
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
              className={`mt-2 w-56 divide-y divide-gray-100 
        rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none`}
            >
              {children}
            </Menu.Items>
          </Transition>
        </div>
      </Portal>
    </Menu>
  );
}

export default Container;
