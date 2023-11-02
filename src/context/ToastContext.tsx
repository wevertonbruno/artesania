import { createContext, useEffect, useState } from "react";
import Toast from "../components/toaster";
import { IToast, IToastCreate } from "toaster";
import styled from "styled-components";

const ToastContainer = styled.section`
  position: fixed;
  top: 0;
  right: 0;
  width: 30rem;
`;

interface Props {
  children: JSX.Element | JSX.Element[];
}

interface IToastMap {
  [key: string]: IToast;
}

interface IToastContext {
  newToast: (toast: IToastCreate) => void;
}

const durationMap = {
  short: 3000,
  medium: 5000,
  long: 10000,
};

export const ToastContext = createContext({} as IToastContext);

function ToastProvider({ children }: Props) {
  const [toasts, setToasts] = useState<IToastMap>({});

  const newToast = (toast: IToastCreate) => {
    const created = {
      id: Date.now().toString(),
      ...toast,
      hidden: false,
    };

    setToasts((prev) => ({
      ...prev,
      [created.id]: created,
    }));

    setTimeout(() => {
      hideToast(created.id);
    }, durationMap[created.duration]);
  };

  const hideToast = (id: string) => {
    setToasts((prev) => ({
      ...prev,
      [id]: {
        ...prev[id],
        hidden: true,
      },
    }));

    setTimeout(() => {
      removeToast(id);
    }, 500);
  };

  const removeToast = (id: string) => {
    setToasts((prev) => {
      const newToasts = { ...prev };
      delete newToasts[id];
      return newToasts;
    });
  };

  return (
    <ToastContext.Provider value={{ newToast }}>
      {children}
      <ToastContainer>
        {Object.values(toasts).map((toast) => (
          <Toast key={toast.id} {...toast} />
        ))}
      </ToastContainer>
    </ToastContext.Provider>
  );
}

export default ToastProvider;
