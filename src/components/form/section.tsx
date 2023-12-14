import { HTMLAttributes } from "react";

interface SectionProps extends HTMLAttributes<HTMLDivElement> {
  title: string;
}

export function FormSection({ title, children }: SectionProps) {
  return (
    <div className="mt-4">
      {title && <span className="mb-1 font-semibold my-2">{title}</span>}
      {children}
    </div>
  );
}
