import { Menu } from "@headlessui/react";
import { ElementType, LiHTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

interface ItemProps extends LiHTMLAttributes<HTMLLIElement> {
  icon?: ElementType;
  text: string;
}

export function Item({ icon: Icon, text, ...rest }: ItemProps) {
  return (
    <Menu.Item>
      <li
        {...rest}
        className={twMerge(
          "cursor-pointer hover:bg-gray-100 hover:text-gray-900 transition-all text-gray-700 block px-4 py-2 text-sm flex items-center justify-start gap-4",
          rest.className
        )}
      >
        {Icon && <Icon size={15} className="text-xs" />}
        {text}
      </li>
    </Menu.Item>
  );
}
