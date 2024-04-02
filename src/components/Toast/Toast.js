import React from 'react';

import useEscapeKey from '../../hooks/use-escape-key'
import { ToastContext } from '../ToastProvider'


import {
  AlertOctagon,
  AlertTriangle,
  CheckCircle,
  Info,
  X,
} from 'react-feather';

import VisuallyHidden from '../VisuallyHidden';

import styles from './Toast.module.css';

const ICONS_BY_VARIANT = {
  notice: Info,
  warning: AlertTriangle,
  success: CheckCircle,
  error: AlertOctagon,
};

function Toast({ variant = 'notice', id, children, }) {
  const { dismissToast } = React.useContext(ToastContext)

  const Icon = ICONS_BY_VARIANT[variant]

  const uek = useEscapeKey(() => {
    dismissToast(id)
  })

  return (
    <div className={`${styles.toast} ${styles[variant]}`}>
      <div className={styles.iconContainer}>
        <Icon size={24} />
      </div>
      <p className={styles.content}>
        <VisuallyHidden> {variant} - </VisuallyHidden>
        {children}
      </p>
      <button className={styles.closeButton}
        aria-label="Dismiss message"
        aria-live="off"
      onClick={event => {
        dismissToast(id)
      }}>
        <X size={24} />
      </button>
    </div>
  );
}

export default Toast;
