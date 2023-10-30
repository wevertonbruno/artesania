import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      bodyColor: string;
      sidebarColor: string;
      primaryColor: string;
      primaryColorLight: string;
      toggleColor: string;
      textColor: string;
    };
  }
}
