import Image from 'next/image'

import styles from './styles.module.scss'

import signal from './assets/signal.svg'

const DataNotMatch = () => {
  return (
    <div className={styles.container}>
      <div className={styles.row}>
        <div className={styles.signal}>
          <Image src={signal} alt='Error' />
        </div>

        <div className={styles.error}>
          The email or password you entered does not match our records. Check and try again!
        </div>
      </div>
    </div>
  )
}

export default DataNotMatch