import Image from 'next/image'

import styles from './styles.module.scss'

import signal from './assets/signal.svg'

const EmailFormat = () => {
  return (
    <div className={styles.container}>
      <div className={styles.row}>
        <div className={styles.signal}>
          <Image src={signal} alt='Error' />
        </div>

        <div className={styles.error}>
          Please enter your email address using the format name@example.com
        </div>
      </div>
    </div>
  )
}

export default EmailFormat