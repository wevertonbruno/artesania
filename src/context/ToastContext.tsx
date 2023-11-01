import { createContext, useEffect, useState } from "react";
import Toast from "../components/toaster";

interface Props {
  children: JSX.Element | JSX.Element[];
}

interface IToast {
  [key: string]: {
    id: string;
    title: string;
    text: string;
    type: "success" | "error" | "warning" | "info";
    duration?: "short" | "medium" | "long";
    active: boolean;
  };
}

interface IToastCreate {
  title: string;
  text: string;
  type: "success" | "error" | "warning" | "info";
  duration?: "short" | "medium" | "long";
}

interface IToastContext {
  toasts: IToast;
  newToast: (toast: IToastCreate) => void;
}

const durationMap = {
  short: 3000,
  medium: 5000,
  long: 10000,
};

export const ToastContext = createContext({} as IToastContext);

function ToastProvider({ children }: Props) {
  const [toasts, setToasts] = useState<IToast>({});

  const newToast = (toast: IToastCreate) => {
    const created = {
      id: Date.now().toString(),
      ...toast,
      active: false,
    };

    setToasts((prev) => ({
      ...prev,
      [created.id]: created,
    }));

    showToast(created.id);
  };

  const showToast = (id: string) => {
    setToasts((prev) => ({
      ...prev,
      [id]: {
        ...prev[id],
        active: true,
      },
    }));

    setTimeout(() => {
      hideToast(id);
    }, durationMap[toasts[id]?.duration || "short"]);
  };

  const hideToast = (id: string) => {
    setToasts((prev) => ({
      ...prev,
      [id]: {
        ...prev[id],
        active: false,
      },
    }));
  };

  return (
    <ToastContext.Provider value={{ toasts, newToast }}>
      {children}
      <div className="toast-container">
        {Object.values(toasts).map((toast) => (
          <Toast key={toast.id} close={() => hideToast(toast.id)} />
        ))}
      </div>
    </ToastContext.Provider>
  );
}

export default ToastProvider;
