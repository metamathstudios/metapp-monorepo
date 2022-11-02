import Image from "next/image"
import styles from "./styles.module.scss"
import julia from "./assets/julia.svg"

import { useContext, useCallback, useEffect, useState } from 'react'
import { Web3ModalContext } from '../../../../contexts/Web3ModalProvider'

import { getUserData } from "../../../../utils"

const SettingsComponent = () => {

  const { account, disconnect } = useContext(Web3ModalContext);

  const [name, setName] = useState<string | null>(null);
  const [email, setEmail] = useState<string | null>(null);


  useEffect(() => {
    fetchUser();
  }, [account]);

  const fetchUser = () => {
    if(process.env.METAPP_API_URL){
      getUserData(process.env.METAPP_API_URL)
      .then((res) => {
        setName(res.data.user.name);
        setEmail(res.data.user.email);
    }).catch((error) => {
        console.log(error)
    })
    }
  }
    
 

  const handleDisconnect = useCallback(() => {
    
    disconnect();
    window.open('/metamask', '_self');
  }, [disconnect]);

  return (
    <div className={styles.container}>
      <div className={styles.columnContainer}>
        <div className={styles.gridContainer}>
          <div className={styles.profile}>
            {/* <div className={styles.imageContainer}>
              <Image src={julia} alt="Profile" />
            </div>

            <div className={styles.nameContainer}>Luan#0171</div> */}
          </div>

          <div className={styles.userSettings}>
            <div className={styles.userData}>
              <div className={styles.dataContainer}>
                <div className={styles.label}>Username</div>

                <div className={styles.data}>{name}</div>

                <div className={styles.line} />
              </div>

              <div className={styles.dataContainerButton}>
                <div className={styles.rowContainer}>
                  <div className={styles.leftSide}>
                    <div className={styles.label}>
                      Email
                    </div>

                    <div className={styles.data}>
                      {email}
                    </div>
                  </div>

                  <div className={styles.rightSide}>
                    {/* <div className={styles.buttonContainer}>
                      <div className={styles.button}>Change Email</div>
                    </div> */}
                  </div>
                </div>

                <div className={styles.line} />
              </div>

              <div className={styles.dataContainerButton}>
                <div className={styles.rowContainer}>
                  <div className={styles.leftSide}>
                    <div className={styles.label}>
                      Password
                    </div>

                    <div className={styles.data}>
                      ************
                    </div>
                  </div>

                  <div className={styles.rightSide}>
                    {/* <div className={styles.buttonContainer}>
                      <div className={styles.button}>Change Password</div>
                    </div> */}
                  </div>
                </div>

                <div className={styles.line} />
              </div>

              <div className={styles.dataContainerButton}>
                <div className={styles.rowContainer}>
                  <div className={styles.leftSide}>
                    <div className={styles.label}>
                      Wallet
                    </div>

                    <div className={styles.data}>
                      {account}
                    </div>
                  </div>

                  <div className={styles.rightSide}>
                    <div className={styles.buttonContainer} onClick={handleDisconnect}>
                      <div className={styles.button}>Unlink Wallet</div>
                    </div>
                  </div>
                </div>

                <div className={styles.line} />
              </div>
            </div>

            <div className={styles.accountOptionsContainer}>
              <div className={styles.closeAccount} onClick={() => window.open('/', '_self')}>Exit</div>

              <div className={styles.saveButtonContainer}>
                <div className={styles.button} onClick={() => window.open('/nonfts', '_self')}>To Dashboard</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SettingsComponent
