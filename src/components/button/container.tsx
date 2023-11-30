import { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  circle?: boolean;
}

export function Container({ circle, ...props }: ButtonProps) {
  return (
    <button
      className={`flex gap-1 items-center inline-block rounded-sm bg-driftwood-500 whitespace-nowrap p-2 text-sm 
      font-semibold leading-normal text-white transition duration-150 ease-in-out 
      hover:bg-driftwood-600 focus:bg-driftwood-600 focus:outline-none focus:ring-0 active:bg-driftwood-700
        ${circle ? "rounded-full" : ""}
      `}
      {...props}
    />
  );
}
