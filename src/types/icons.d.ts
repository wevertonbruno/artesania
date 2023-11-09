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
    | "eye";

  export type MyIconsMap = Map<
    | "trash"
    | "edit"
    | "copy"
    | "download"
    | "search"
    | "plus"
    | "minus"
    | "code"
    | "share"
    | "eye",
    JSX.Element
  >;
}
