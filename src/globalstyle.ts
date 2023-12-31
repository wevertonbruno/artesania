import { createGlobalStyle } from "styled-components";
import gridCss from "./gridStyle";

export default createGlobalStyle`    
    :root {
        --body-color: ${(props) => props.theme.colors.bodyColor};
        --sidebar-color: ${(props) => props.theme.colors.sidebarColor};
        --primary-color: ${(props) => props.theme.colors.primaryColor};
        --primary-color-light: ${(props) =>
          props.theme.colors.primaryColorLight};
        --toggle-color: ${(props) => props.theme.colors.toggleColor};
        --text-color: ${(props) => props.theme.colors.textColor};
        --text-disabled-color: rgb(181, 181, 181);
        --border-color: ${(props) => props.theme.colors.borderColor};

        --btn-primary-color: ${(props) => props.theme.colors.btn.primary};
        --btn-primary-hover: ${(props) => props.theme.colors.btn.hover};
        --btn-primary-text:  ${(props) => props.theme.colors.btn.text};

        --success-color: #2ecc71;
        --error-color: #d93025;
        --warning-color: #f1c40f;
        --info-color: #3498db;

        --default-radius: .2rem;

        --box-shadow-default: 0 2px 5px -1px rgba(50, 50, 93, 0.02),
            0 1px 3px -1px rgba(0, 0, 0, 0.05);

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
        /* font-family: 'Josefin Sans', sans-serif; */
        /* font-family: Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji";; */
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        overflow-x: hidden;

        &::-webkit-scrollbar {
            width: 0.3rem;
            height: 0.3rem;
            opacity: .3;
        }

         &::-webkit-scrollbar-thumb {
            border-radius: 0.5rem;
            background-color: rgba(0, 0, 0, 0.1);
            opacity: .3;
            visibility: hidden;
        }

         &:hover::-webkit-scrollbar-thumb {
            visibility: visible;
        }
    }

    .row {
        --cui-gutter-x: 1.5rem;
        --cui-gutter-y: 0;
        display: flex;
        flex-wrap: wrap;
        margin-left: calc(var(--cui-gutter-x)*-.5);
        margin-right: calc(var(--cui-gutter-x)*-.5);
        margin-top: calc(var(--cui-gutter-y)*-1);

        > * {
            flex-shrink: 0;
            margin-top: var(--cui-gutter-y);
            max-width: 100%;
            padding-left: calc(var(--cui-gutter-x)*.5);
            padding-right: calc(var(--cui-gutter-x)*.5);
            width: 100%;
        }
    }

    .text-disabled {
        color: var(--text-disabled-color);
    }

    .status {
        padding: 0.25rem 0.5rem;
        border-radius: var(--default-radius);
        background-color: #f1c40f;
        font-size: .7rem;
    }

    .form-control {
        display: flex;
        flex-direction: column;
        justify-content: end;
        button {
            margin: 0.5rem 0;
            height: 2.625rem;
            min-width: 2.625rem;;
        }
    }

    hr.dashed {
      margin: 4px 0px;
      border-width: 0px 0px thin;
      border-color: rgba(145, 158, 171, 0.2);
      border-style: dashed;
    }
`;
