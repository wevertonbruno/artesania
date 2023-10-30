import styled from "styled-components";

export const Container = styled.label`
  display: flex;
  align-items: center;
  user-select: none;
  padding: 0.6em 0;
  box-sizing: border-box;

  input[type="checkbox"],
  input[type="radio"] {
    position: absolute !important;
    height: 1px;
    width: 1px;
    overflow: hidden;
    clip: rect(1px, 1px, 1px, 1px);
  }

  input[type="checkbox"] + div,
  input[type="radio"] + div {
    border: 2px solid var(--primary-color-light);
    height: 1.5em;
    width: 1.5em;
    box-sizing: border-box;
    border-radius: 2px;
    position: relative;
  }

  input[type="checkbox"] ~ div:last-child,
  input[type="radio"] ~ div:last-child {
    padding-left: 0.5em;
  }

  input[type="radio"] + div {
    border-radius: 50%;

    &::after {
      content: "";
      position: absolute;
      left: 25%;
      top: 25%;
      width: 50%;
      height: 50%;
      border-radius: 50%;
      transform: scale(0.5);
      opacity: 0;
      background: var(--primary-color);
      transition: var(--tran-bezier);
    }
  }

  input[type="checkbox"]:focus + div,
  input[type="radio"]:focus + div,
  input[type="checkbox"]:active + div,
  input[type="radio"]:active + div {
    outline: 2px dashed var(--primary-color-light);
    outline-offset: 2px;
  }

  input[type="checkbox"]:checked + div {
    border-color: var(--primary-color);
    transition: border-color 107ms cubic-bezier(0.65, 0.25, 0.56, 0.96);

    .mcui-check {
      opacity: 1;
      transition: opacity 107ms cubic-bezier(0.65, 0.25, 0.56, 0.96);

      polyline {
        animation: dash_check 107ms cubic-bezier(0.65, 0.25, 0.56, 0.96)
          forwards;
      }
    }
  }

  input[type="radio"]:checked + div {
    border-color: var(--primary-color);

    &::after {
      opacity: 1;
      transform: scale(1);
    }
  }

  input[type="checkbox"]:indeterminate + div::after {
    content: "";
    height: 4px;
    width: 60%;
    left: 20%;
    top: calc(50% - 2px);
    position: absolute;
    background: var(--primary-color-light);
    border-radius: 1px;
  }

  input[type="checkbox"]:disabled ~ div,
  input[type="radio"]:disabled ~ div {
    color: var(--primary-color-light);
    cursor: not-allowed;
  }

  input[type="checkbox"]:enabled ~ div,
  input[type="radio"]:enabled ~ div {
    cursor: default;
  }

  .mcui-check {
    height: 100%;
    width: 100%;
    transform: scale(1);
    color: var(--primary-color);
    opacity: 0;

    polyline {
      fill: none;
      transform-origin: 50% 50%;
      stroke-width: 5px;
      stroke-dasharray: 22.771367900227325;
      stroke: currentcolor;
    }
  }

  @supports (display: grid) {
    .mcui-check {
      polyline {
        stroke-dashoffset: 22.771367900227325;
      }
    }
  }

  @keyframes dash_check {
    to {
      stroke-dashoffset: 0;
    }
  }
`;
