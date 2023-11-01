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

        --btn-primary-color: ${(props) => props.theme.colors.btn.primary};
        --btn-primary-hover: ${(props) => props.theme.colors.btn.hover};
        --btn-primary-text:  ${(props) => props.theme.colors.btn.text};

        --success-color: #2ecc71;

        --default-radius: .2rem;

        --box-shadow-default: rgba(0, 0, 0, 0.1) 0rem 0.25rem 0.375rem -0.0625rem,
    rgba(0, 0, 0, 0.06) 0rem 0.125rem 0.25rem -0.0625rem;

        --tran-02: all 0.2s ease;
        --tran-03: all 0.3s ease;
        --tran-04: all 0.4s ease;
        --tran-05: all 0.5s ease;
        --bezier: cubic-bezier(0.65, 0.25, 0.56, 0.96);
        --tran-toast: all 0.5s cubic-bezier(0.68, -.55, 0.265, 1.35);
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
        width: 100vw;
        background: var(--body-color);
        color: var(--text-color);
        overflow: hidden;
    }
`;
