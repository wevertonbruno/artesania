import { BiChevronDown, BiChevronUp } from "react-icons/bi";
import styled from "styled-components";

export const Container = styled.div`
  label {
    font-size: 0.75rem;
    font-weight: 500;
    color: var(--text-color);
    opacity: 0.9;
  }

  .category-select {
    font-size: 0.75rem;
    letter-spacing: 0.0225rem;
    position: relative;
  }

  .selected-value {
    &:focus ~ .select-button .chevrons {
      .down {
        display: none;
      }
      .up {
        display: block;
      }
    }
  }

  .select-button {
    margin: 0.5rem 0;
    display: flex;
    padding: 0 0.9rem;
    height: 2.625rem;

    align-items: center;
    justify-content: space-between;

    border-radius: var(--default-radius);
    border: 1px solid var(--text-color);
    background-color: var(--sidebar-color);
  }

  .selected-value {
    font-size: 0.875rem;
    letter-spacing: 0.02625rem;
  }

  .chevrons {
    .up {
      display: none;
    }
  }
`;

export const ChevronUpIcon = styled(BiChevronUp)`
  width: 1rem;
  height: 1rem;
`;

export const ChevronDownIcon = styled(BiChevronDown)`
  width: 1rem;
  height: 1rem;
`;
