import { useState, useContext, useEffect } from 'react'
import Image from 'next/image'

import styles from './styles.module.scss'

import ball from './assets/ball.svg'
import ballActive from './assets/ballactive.svg'
import polygon from './assets/polygon.svg'
import ethereum from './assets/ethereum.svg'
import { BlockchainContext } from '../../../../../../contexts/AuthBankProvider'
import { Web3ModalContext } from '../../../../../../contexts/Web3ModalProvider'
import { createAsset, deleteAsset } from '../../../../../../utils'

type nftProps = {
  title: string | undefined,
  image: any,
  network: number | null,
  address: string | undefined,
  id: number | undefined,
}

const Card = ({ ...props }: nftProps) => {

  const { account } = useContext(Web3ModalContext)
  const { authBank } = useContext(BlockchainContext)

  const [active, setActive] = useState(false)

  useEffect(() => {
    if (authBank && props.address && props.id) {
      authBank.getTokenAuthIndex(
        props.address,
        props.id,
      ).then(
        (index) => {
          if (Number(index) > 0) {
            setActive(true)
          } else {
            setActive(false)
          }
        }).catch(
          (err) => {
            console.log(err)
          }
        )
    }
  }, [authBank, props.address, props.id, active])

  const handleActivate = async () => {
    if (authBank) {
      if (!active && props.address && props.id) {
        authBank.createAuth(
          props.address,
          props.id
        ).then(
          (tx) => {
            console.log(tx)
            setActive(true)
            createAsset({ ...props }, process.env.METAPP_API_URL ? process.env.METAPP_API_URL : 'http://localhost:3001')
              .then(
                (response) => {
                  console.log(response)
                }
              ).catch(
                (error) => {
                  console.log(error)
                }
              )
          }
        ).catch(
          (err) => {
            console.log(err)
          }
        )
      } else if (active && props.address && props.id) {
        authBank.revokeAuth(
          props.address,
          props.id
        ).then(
          (tx) => {
            console.log(tx)
            setActive(false)
            deleteAsset({ ...props }, process.env.METAPP_API_URL ? process.env.METAPP_API_URL : 'http://localhost:3001')
              .then(
                (response) => {
                  console.log(response)
                }
              ).catch(
                (error) => {
                  console.log(error)
                }
              )
          }
        ).catch(
          (err) => {
            console.log(err)
          }
        )
      }
    }
  }

  const networkIcon = {
    1: ethereum,
    5: ethereum,
    137: polygon,
    80001: polygon,
  }

  return (
    <div className={styles.container}>
      <div className={styles.columnContainer}>
        <div className={styles.title}>
          {props.title}
        </div>

        <div className={styles.nftContainer}>
          <img src={props.image} alt='NFT' width={160} height={160} />
          <div className={styles.network}>
            {props.network && <Image src={networkIcon[props.network]} alt='Network' />}
          </div>
        </div>

        <div className={active == false ? styles.checkboxContainer : styles.checkboxContainerActive}>
          <div className={styles.checkbox} onClick={handleActivate}>
            <div className={styles.checkball}>
              <div className={styles.imageContainer}>
                <Image src={active == false ? ball : ballActive} alt='Check' />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Card