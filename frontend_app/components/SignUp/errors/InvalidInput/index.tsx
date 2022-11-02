import Image from 'next/image'

import styles from './styles.module.scss'

import signal from './assets/signal.svg'

const InvalidInput = () => {
  return (
    <div className={styles.container}>
      <div className={styles.row}>
        <div className={styles.signal}>
          <Image src={signal} alt='Error' />
        </div>

        <div className={styles.error}>
          There are one or more invalid inputs in the sign up form!
        </div>
      </div>
    </div>
  )
}

export default InvalidInput