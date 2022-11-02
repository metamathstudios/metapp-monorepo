import Image from 'next/image'

import styles from './styles.module.scss'

import signal from './assets/signal.svg'

const InvalidEmail = () => {
  return (
    <div className={styles.container}>
      <div className={styles.row}>
        <div className={styles.signal}>
          <Image src={signal} alt='Error' />
        </div>

        <div className={styles.error}>
          Your email is invalid or already exists, check and try again.
        </div>
      </div>
    </div>
  )
}

export default InvalidEmail