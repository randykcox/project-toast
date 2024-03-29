import React from 'react';

import Toast from '../Toast';
import styles from './ToastShelf.module.css';

function ToastShelf({ toasts, setToasts }) {

  function dismissToast(id) {
    const nextToasts = toasts.filter((toast) => {
      return toast.id !== id;
    });

    setToasts(nextToasts);
  }

  return (
    <ol className={styles.wrapper}>
      {toasts.map(({ message, variant, id }, index) => {
        return (
          <li key={id} className={styles.toastWrapper}>
            <Toast variant={variant} handleDismiss={() => {
              dismissToast(id)
            }}>{message}</Toast>
          </li>
        )
      })}
    </ol>
  );
}

export default ToastShelf;
