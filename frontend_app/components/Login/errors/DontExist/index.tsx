import Image from 'next/image'

import styles from './styles.module.scss'

import signal from './assets/signal.svg'

const DontExist = () => {
  return (
    <div className={styles.container}>
      <div className={styles.row}>
        <div className={styles.signal}>
          <Image src={signal} alt='Error' />
        </div>

        <div className={styles.error}>
          The email you have used does not exist in our database.
        </div>
      </div>
    </div>
  )
}

export default DontExist