import styled, { css } from "styled-components";

interface HeaderProps {
  width?: string;
}

export const Container = styled.div`
  background: var(--sidebar-color);
  border-radius: var(--default-radius);
  width: 100%;
  position: relative;
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
    border-color: var(--border-color);

    > :not(caption, :last-child) > * > * {
      border-bottom-width: 1px;
      padding: 0.75rem;
    }
  }

  tbody {
    tr {
      background-color: var(--sidebar-color);
      transition: background-color 0.3s ease;
    }

    tr:hover {
      background-color: var(--border-color);
    }
  }

  thead {
    background-color: var(--sidebar-color);
    z-index: 1;
    position: sticky;
    top: 0;
    left: 0;
  }

  tfoot {
    font-weight: bold;
  }

  table,
  th,
  td {
    border-collapse: collapse;
    padding: 0.7rem;
    text-align: left;
  }
`;

export const TableHeader = styled.th<HeaderProps>`
  width: ${(props) => props.width || "auto"};
  min-width: ${(props) => props.width || "auto"};
`;
