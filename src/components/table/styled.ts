import styled, { css } from "styled-components";

interface HeaderProps {
  width?: string;
}

const darkTable = css`
  box-shadow: none;
`;

const lightTable = css`
  box-shadow: var(--box-shadow-default);
  border: none;
`;

export const Container = styled.div`
  ${(props) => (props.theme.dark ? darkTable : lightTable)};
  background: var(--sidebar-color);
  border-radius: 0.375rem;
  overflow: hidden;
  width: 100%;

  .t_body {
    overflow: auto;

    &::-webkit-scrollbar {
      width: 0.3rem;
      height: 0.3rem;
    }

    &::-webkit-scrollbar-thumb {
      border-radius: 0.5rem;
      background-color: var(--primary-color-light);
      visibility: hidden;
    }

    &:hover::-webkit-scrollbar-thumb {
      visibility: visible;
    }
  }

  table {
    width: 100%;
  }

  thead {
    position: sticky;
    top: 0;
    left: 0;
    background-color: var(--primary-color-light);
  }

  tfoot {
    border-top: 0.0625rem solid var(--primary-color-light);
    font-weight: bold;
  }

  table,
  th,
  td {
    border-collapse: collapse;
    padding: 1rem;
    text-align: left;
  }

  tbody tr {
    border-bottom: 0.0625rem solid var(--primary-color-light);
  }
`;

export const TableHeader = styled.th<HeaderProps>`
  width: ${(props) => props.width || "auto"};
  min-width: ${(props) => props.width || "auto"};
`;
