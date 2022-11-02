import Image from 'next/image'

import styles from './styles.module.scss'

import logo from './assets/logo.svg'

const NavBar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.columnContainer}>
        <div className={styles.rowContainer}>
          <div className={styles.logo} onClick={() => window.open('/', '_self')}>
            <Image src={logo} alt='Logo' />
          </div>

          <div className={styles.midOptions} onClick={() => window.open('/', '_self')}>
            <div>
              Home
            </div>

            <div onClick={() => window.open('/about', '_self')}>
              About
            </div>

            <div onClick={() => window.open('/download', '_self')}>
              Download
            </div>
          </div>

          <div className={styles.authOptions}>
            <div onClick={() => window.open('/login', '_self')}>
              Login
            </div>

            <div className={styles.signIn} onClick={() => window.open('/signup', '_self')}>
              <div className={styles.border}>
                Sign Up
              </div>
            </div>
          </div>
        </div>

        <div className={styles.centerLine}>
          <div className={styles.line}/>
        </div>

      </div>
    </div>
  )
}

export default NavBar