import Image from 'next/image'
import { useState } from 'react'

import styles from './styles.module.scss'

import logo from '../Login/assets/logo.svg'
import eye from '../Login/assets/eye.svg'
import noneye from '../Login/assets/noneye.svg'

import EmailFormat from './errors/EmailFormat'
import InvalidEmail from './errors/InvalidEmail'
import PasswordNotMatch from './errors/PasswordNotMatch'
import InvalidInput from './errors/InvalidInput'

import { register } from '../../utils'

const SignUpComponent = () => {
  // Options
  const [passVisible, setPassVisible] = useState(false)
  const [confirmation, setConfirmation] = useState(false)

  // Storing data to states
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')

  const [error, setError] = useState(0)

  const validateEmail = (email: string): boolean => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return re.test(email)
  }

  const handleSubmit = () => {
    if (process.env.METAPP_API_URL) {
      if (password === confirmPassword) {
        // check if name, email or password is empty
        if (name === '' || email === '' || password === '') {
          setError(2)
        } if (!validateEmail(email)) {
          setError(3)
        } else {
          register(name, email, password, process.env.METAPP_API_URL)
          .then(
            (response) => {
              if (response.status === 201) {
                window.open('/login', '_self')
              }
            })
          .catch(
            (error) => {
              if (error.response.status === 500) {
                setError(3)
              }
            })
        }
      } else {
        setError(1)
      }
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
            <div className={styles.nameContainer}>
              <div>Name</div>
              <input
                type='text'
                value={name}
                onChange={(e) => setName(e.target.value)}
                className={styles.nameInput}
              />
              <div className={styles.line} />
            </div>

            <div className={styles.emailContainer}>
              <div>Email</div>
              <input
                type='text'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className={styles.emailInput}
              />
              <div className={styles.line} />
            </div>

            <div className={styles.passwordContainer}>
              <div>Password</div>
              <div className={styles.row}>
                <input
                  type={passVisible == false ? 'password' : 'text'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className={styles.passwordInput}
                />
                <div className={styles.eyeContainer} onClick={() => setPassVisible(!passVisible)}>
                  <Image src={passVisible == false ? eye : noneye} alt='Show' />
                </div>
              </div>
              <div className={styles.line} />
            </div>

            <div className={styles.passwordContainer}>
              <div>Confirm Password</div>
              <div className={styles.row}>
                <input
                  type={confirmation == false ? 'password' : 'text'}
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  className={styles.passwordInput}
                />
                <div className={styles.eyeContainer} onClick={() => setConfirmation(!confirmation)}>
                  <Image src={confirmation == false ? eye : noneye} alt='Show' />
                </div>
              </div>
              <div className={styles.line} />
            </div>

            <div className={styles.buttonContainer}>
              <div className={styles.button} onClick={handleSubmit}>
                Sign up
              </div>
            </div>

            <div className={styles.errorContainer}>
              {error == 1 ? <PasswordNotMatch /> : 
              error == 2 ? <InvalidInput /> :
              error == 3 ? <InvalidEmail /> :
              null}
            </div>

            <div className={styles.loginContainer}>
              Already have an account? <span onClick={() => window.open('/login', '_self')}>Login</span>
            </div>
          </div>
        </div>
      </div>
    )
  }

  export default SignUpComponent