declare module "dotmenu" {
  export interface MenuOptionProps {
    name: string;
    onClick: (data: ?any) => void;
  }

  export interface MenuProps {
    options: MenuOptionProps[];
    position?: {
      x: number;
      y: number;
    };
  }
}
