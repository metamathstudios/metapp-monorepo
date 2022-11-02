import Image from 'next/image'

import styles from './styles.module.scss'

import appdemo from './assets/appdemo.svg'

const Hero = () => {
  return (
    <div className={styles.container}>
      <div className={styles.gridContainer}>
        <div className={styles.leftSide}>
          <div className={styles.title}>
            Take your <span>NFT</span><br /> anywhere
          </div>

          <div className={styles.description}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </div>

          <div className={styles.buttonContainer}>
            <div className={styles.button}>
              I&apos;m interested
            </div>
          </div>
        </div>

        <div className={styles.rightSide}>
          <Image src={appdemo} alt='App' />
        </div>
      </div>
    </div>
  )
}

export default Hero