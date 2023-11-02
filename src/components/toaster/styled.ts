import { BiCheck, BiErrorCircle, BiInfoCircle, BiX } from "react-icons/bi";
import styled, { css } from "styled-components";

export const Toast = styled.div`
  background: var(--sidebar-color);
  border-radius: var(--default-radius);
  position: relative;
  top: 1.5rem;
  right: 2rem;
  margin-bottom: 1rem;
  padding: 1.25rem 2.1rem 1.25rem 1.5rem;
  box-shadow: 0 0.3rem 0.625rem rgba(0, 0, 0, 0.1);
  overflow: hidden;
  transform: translateX(calc(100% + 2rem)) scaleY(0);
  transition: var(--tran-toast);
  border-left: 0.375rem solid var(--primary-color);
  opacity: 0.9;

  &:hover {
    opacity: 1;
  }

  &.success {
    border-left-color: var(--success-color);
  }

  &.error {
    border-left-color: var(--error-color);
  }

  &.warning {
    border-left-color: var(--warning-color);
  }

  &.info {
    border-left-color: var(--info-color);
  }

  &.active {
    transform: translateX(0) scaleY(1);
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
        opacity: inherit;
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

  &.success:before {
    background: var(--success-color);
  }

  &.error:before {
    background: var(--error-color);
  }

  &.warning:before {
    background: var(--warning-color);
  }

  &.info:before {
    background: var(--info-color);
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

const iconStyle = css`
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

export const SuccessIcon = styled(BiCheck)`
  ${iconStyle}
  background-color: var(--success-color);
`;

export const ErrorIcon = styled(BiX)`
  ${iconStyle}
  background-color: var(--error-color);
`;

export const WarningIcon = styled(BiErrorCircle)`
  ${iconStyle}
  background-color: var(--warning-color);
`;

export const InfoIcon = styled(BiInfoCircle)`
  ${iconStyle}
  background-color: var(--info-color);
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
