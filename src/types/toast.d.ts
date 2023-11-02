declare module "toaster" {
  export interface IToastCreate {
    title: string;
    text: string;
    type: "success" | "error" | "warning" | "info";
    duration: "short" | "medium" | "long";
  }

  export interface IToast {
    id: string;
    title: string;
    text: string;
    type: "success" | "error" | "warning" | "info";
    duration: "short" | "medium" | "long";
    hidden: boolean;
  }
}
