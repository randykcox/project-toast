import React from 'react';
import Button from '../Button';
import ToastShelf from '../ToastShelf'
import styles from './ToastPlayground.module.css';

const VARIANT_OPTIONS = ['notice', 'warning', 'success', 'error'];

function ToastPlayground() {
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

  const [message, setMessage] = React.useState('')
  const [variant, setVariant] = React.useState('notice')
  const messageInputRef = React.useRef()

  function handleFormSubmit(event) {
    event.preventDefault()
    setToasts([{ message, variant, id: crypto.randomUUID() }, ...toasts])
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

      <ToastShelf toasts={toasts} setToasts={setToasts} />

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
            {VARIANT_OPTIONS.map((option) => (
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
