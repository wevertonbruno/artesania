import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`    
    :root {
        --body-color: ${(props) => props.theme.colors.bodyColor};
        --sidebar-color: ${(props) => props.theme.colors.sidebarColor};
        --primary-color: ${(props) => props.theme.colors.primaryColor};
        --primary-color-light: ${(props) =>
          props.theme.colors.primaryColorLight};
        --toggle-color: ${(props) => props.theme.colors.toggleColor};
        --text-color: ${(props) => props.theme.colors.textColor};

        --btn-primary-color: ${(props) => props.theme.colors.primaryColorLight};
        --btn-primary-hover: ${(props) => props.theme.colors.primaryColor};

        --tran-02: all 0.2s ease;
        --tran-03: all 0.3s ease;
        --tran-04: all 0.4s ease;
        --tran-05: all 0.5s ease;
        --bezier: cubic-bezier(0.65, 0.25, 0.56, 0.96);
    }

    body.dark-mode {
        --body-color: #18191a;
        --sidebar-color: #242526;
        --primary-color: #3a3b3c;
        --primary-color-light: #3a3b3c;
        --toggle-color: #fff;
        --text-color: #ccc;
    }

    * {
        font-family: 'Josefin Sans', sans-serif;
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        height: 100vh;
        background: var(--body-color);
        color: var(--text-color);
    }
`;
