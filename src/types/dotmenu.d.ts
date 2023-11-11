declare module "dotmenu" {
  import { Icon } from "my-icons";

  export interface MenuOptionProps {
    name: string;
    icon: Icon;
    onClick: (data: ?any) => void;
  }

  export interface MenuProps {
    containerRef?: React.RefObject<HTMLDivElement>;
    options: MenuOptionProps[];
    riskOptions?: MenuOptionProps[];
    position?: {
      x: number;
      y: number;
    };
  }
}
