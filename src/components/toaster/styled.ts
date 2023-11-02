import { BiCheck, BiX } from "react-icons/bi";
import styled from "styled-components";

export const Toaster = styled.div``;

export const Toast = styled.div`
  background: var(--sidebar-color);
  border-radius: var(--default-radius);
  position: absolute;
  top: 1.5rem;
  right: 2rem;
  padding: 1.25rem 2.1rem 1.25rem 1.5rem;
  box-shadow: 0 0.3rem 0.625rem rgba(0, 0, 0, 0.1);
  border-left: 0.375rem solid var(--success-color);
  overflow: hidden;
  transform: translateX(calc(100% + 2rem));
  transition: var(--tran-toast);

  &.active {
    transform: translateX(0);
  }

  .content {
    position: relative;
    display: flex;
    align-items: center;

    .message {
      display: flex;
      flex-direction: column;
      margin: 0 1.25rem;

      span {
        font-size: 1.2rem;
        font-weight: 400;
        color: var(--text-color);
      }

      .title {
        font-weight: 600;
        color: var(--text-color);
        margin-bottom: 0.1rem;
      }

      .text {
        opacity: 0.8;
      }
    }
  }
`;

export const ProgressBar = styled.span`
  position: absolute;
  bottom: 0;
  left: 0;
  height: 0.1875rem;
  width: 100%;
  background: var(--sidebar-color);

  &:before {
    content: "";
    position: absolute;
    bottom: 0;
    right: 0;
    height: 100%;
    width: 100%;
    background: var(--success-color);
  }

  &.active.short:before {
    animation: progress 3s linear forwards;
  }

  &.active.medium:before {
    animation: progress 5s linear forwards;
  }

  &.active.long:before {
    animation: progress 10s linear forwards;
  }

  @keyframes progress {
    100% {
      right: 100%;
    }
  }
`;

export const SuccessIcon = styled(BiCheck)`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 2.2rem;
  width: 2.2rem;
  background-color: var(--success-color);
  color: var(--sidebar-color);
  font-size: 1.25rem;
  border-radius: 50%;
`;

export const CloseIcon = styled(BiX)`
  position: absolute;
  top: 0.625rem;
  right: 0.625rem;
  padding: 0.3125rem;
  cursor: pointer;
  opacity: 0.7;
  width: 1.8rem;
  height: 1.8rem;

  &:hover {
    opacity: 1;
  }
`;
