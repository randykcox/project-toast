import React from 'react';

import Toast from '../Toast';
import styles from './ToastShelf.module.css';
import { ToastContext } from '../ToastProvider'

function ToastShelf() {
  const { dismissToast, toasts } = React.useContext(ToastContext)

  return (
    <ol className={styles.wrapper}
      role='region' aria-live='polite' aria-label='Notification'>
      {toasts.map(({ message, variant, id }) => {
        return (
          <li key={id} className={styles.toastWrapper}>
            <Toast variant={variant} handleDismiss={() => {
              dismissToast(id)
            }}>
              {message}
            </Toast>
          </li>
        )
      })}
    </ol>
  );
}

export default ToastShelf;
