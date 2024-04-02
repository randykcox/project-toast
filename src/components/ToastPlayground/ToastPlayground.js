import React from 'react';

import { ToastContext } from '../ToastProvider'
import Button from '../Button';
import ToastShelf from '../ToastShelf'
import styles from './ToastPlayground.module.css';

function ToastPlayground() {

  const { createToast, variants } = React.useContext(ToastContext)
  const [message, setMessage] = React.useState('')
  const [variant, setVariant] = React.useState('notice')
  const messageInputRef = React.useRef()

  function handleFormSubmit(event) {
    event.preventDefault()
    createToast(message, variant)
    setMessage('')
    setVariant('notice')
    messageInputRef.current.focus()
  }

  return (
    <div className={styles.wrapper}>
      <header>
        <img alt="Cute toast mascot" src="/toast.png" />
        <h1>Toast Playground</h1>
      </header>

      <ToastShelf />

      <form className={styles.controlsWrapper}
        onSubmit={handleFormSubmit}>
        <div className={styles.row}>
          <label
            htmlFor="message"
            className={styles.label}
            style={{ alignSelf: 'baseline' }}
          >
            Message
          </label>
          <div className={styles.inputWrapper}>
            <textarea
              ref={messageInputRef}
              value={message}
              id="message"
              className={styles.messageInput}
              onChange={(event) => setMessage(event.target.value)}
            />
          </div>
        </div>

        <div className={styles.row}>
          <div className={styles.label}>Variant</div>
          <div className={`${styles.inputWrapper} ${styles.radioWrapper}`}>
            {variants.map((option) => (
              <label htmlFor={`variant-${option}`} key={option}>
                <input
                  id={`variant-${option}`}
                  type="radio"
                  name="variant"
                  value={option}
                  checked={variant === option}
                  onChange={(event) => setVariant(event.target.value)}
                />
                {option}
              </label>
            ))}
          </div>
        </div>

        <div className={styles.row}>
          <div className={styles.label} />
          <div className={`${styles.inputWrapper} ${styles.radioWrapper}`}>
            <Button>Pop Toast!</Button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default ToastPlayground;
