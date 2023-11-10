declare module "my-icons" {
  import { IconType } from "react-icons";

  export declare type Icon =
    | "trash"
    | "edit"
    | "copy"
    | "download"
    | "search"
    | "plus"
    | "minus"
    | "code"
    | "share"
    | "eye"
    | "task";

  export type MyIconsMap = Map<Icon, JSX.Element>;
}
