import Image from 'next/image'
import { useState, KeyboardEvent } from 'react'

import styles from './styles.module.scss'

import logo from './assets/logo.svg'
import eye from './assets/eye.svg'
import noneye from './assets/noneye.svg'
import markedsvg from './assets/marked.svg'
import nonmarkedsvg from './assets/nonmarked.svg'
import DataNotMatch from './errors/DataNotMatch'
import DontExist from './errors/DontExist'
import { login } from '../../utils'

const LoginComponent = () => {
  const [passVisible, setPassVisible] = useState(false)
  // const [marked, setMarked] = useState(false)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const [error, setError] = useState(0)

  const handleEnter = (e: KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleLogin()
    }
  }

  const handleLogin = () => {
    if (process.env.METAPP_API_URL) {
      login(email, password, process.env.METAPP_API_URL)
        .then(
          (response) => {
            if (response.status === 201) {
              const userToken = response.data.accessToken;
              localStorage?.setItem('userToken', userToken);
              window.open('/metamask', '_self')
            }
          }
        ).catch(
          (error) => {
            if (error.response.status === 404) {
              setError(1)
            }
            if (error.response.status === 401) {
              setError(2)
            }
          }
        )
    } else {
      console.log("Can't Reach API URL")
    }
  }

  return (
    <div className={styles.container}>
      <div className={styles.columnContainer}>
        <div className={styles.logoContainer}>
          <div className={styles.centerContainer} onClick={() => window.open('/', '_self')}>
            <Image src={logo} alt='Logo' />
          </div>
        </div>

        <div className={styles.formContainer}>
          <div className={styles.emailContainer}>
            <div>Email</div>
            <input type="text" className={styles.emailInput} value={email} onChange={(e) => setEmail(e.target.value)} />
            <div className={styles.line} />
          </div>

          <div className={styles.passwordContainer}>
            <div>Password</div>
            <div className={styles.row}>
              <input type={passVisible == false ? 'password' : 'text'} className={styles.passwordInput} value={password} onChange={(e) => setPassword(e.target.value)} onKeyDown={handleEnter}/>
              <div className={styles.eyeContainer} onClick={() => setPassVisible(!passVisible)}>
                <Image src={passVisible == false ? eye : noneye} alt='Show' />
              </div>
            </div>
            <div className={styles.line} />
          </div>

          {/* <div className={styles.checkContainer}>
            <div className={styles.checkBoxContainer} onClick={() => setMarked(!marked)}>
              <Image src={marked == false ? nonmarkedsvg : markedsvg} alt='Stay Logged' />
            </div>

            <div className={styles.text}>Stay logged in</div>
          </div> */}

          <div className={styles.buttonContainer}>
            <div className={styles.button} onClick={handleLogin}>
              Log in
            </div>
          </div>

          <div className={styles.errorContainer}>
            {error === 1 ? <DontExist /> :
              error === 2 ? <DataNotMatch /> : null}
          </div>

          {/* <div className={styles.centerForgot}>
            <div className={styles.forgot}>
              I forgot my password
            </div>
          </div> */}

          <div className={styles.registerContainer}>
            You don&apos;t have an account? <span onClick={() => window.open('/signup', '_self')}>Sign up</span>
          </div>


        </div>

      </div>
    </div>
  )
}

export default LoginComponent