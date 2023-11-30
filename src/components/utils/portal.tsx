import { createPortal } from "react-dom";

interface PortalProps {
  children: React.ReactNode | JSX.Element | JSX.Element[];
}

export function Portal({ children }: PortalProps) {
  return createPortal(children, document.body);
}
