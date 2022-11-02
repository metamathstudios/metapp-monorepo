import Image from 'next/image'

import styles from './styles.module.scss'

import googlePlay from './assets/googleplay.svg'
import apk from './assets/apk.svg'

const Content = () => {
  return (
    <div className={styles.container}>
      <div className={styles.columnContainer}>
        <div className={styles.textContainer}>
          <div className={styles.text1}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </div>

          <div className={styles.text2}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </div>
        </div>

        <div className={styles.ctasContainer}>
          <div className={styles.app}>
            <Image src={googlePlay} alt='Download' />
          </div>

          <div className={styles.app}>
            <Image src={apk} alt='Download' />
          </div>
        </div>

        <div className={styles.lineContainer}>
          <div className={styles.line} />
        </div>
      </div>
    </div>
  )
}

export default Content