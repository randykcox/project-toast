import React from 'react';

export const ToastContext = React.createContext()

function ToastProvider({ children }) {
  const variants = ['notice', 'warning', 'success', 'error'];

  const [toasts, setToasts] = React.useState([
    {
      message: 'Something went wrong!',
      variant: 'error',
      id: crypto.randomUUID(),
    },
    {
      message: '17 photos uploaded',
      variant: 'success',
      id: crypto.randomUUID(),
    },
  ]);

  function createToast(message, variant) {
    setToasts([{ message, variant, id: crypto.randomUUID() }, ...toasts])
  }

  function dismissToast(id) {
    const nextToasts = toasts.filter((toast) => {
      return toast.id !== id;
    });

    setToasts(nextToasts);
  }

  return (
    <ToastContext.Provider value={{ toasts, createToast, dismissToast, variants }}>
      {children}
    </ToastContext.Provider>
  );
}

export default ToastProvider;
