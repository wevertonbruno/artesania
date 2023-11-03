import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    dark: boolean;
    colors: {
      bodyColor: string;
      sidebarColor: string;
      primaryColor: string;
      primaryColorLight: string;
      toggleColor: string;
      textColor: string;
      borderColor: string;
      btn: {
        primary: string;
        hover: string;
        text: string;
      };
    };
  }
}
