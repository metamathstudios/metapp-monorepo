import Image from 'next/image'

import styles from './styles.module.scss'

import nonfts from './assets/nonfts.svg'
import SideBar from '../SideBar'

import { useContext, useEffect, useState } from 'react'

import { AssetManagerContext } from '../../../../contexts/AssetManager'
import { Web3ModalContext } from '../../../../contexts/Web3ModalProvider'

const NoNftsComponent = () => {
  
  const { chainId, account } = useContext(Web3ModalContext)
  const { assets, fetch } = useContext(AssetManagerContext)

  // execute fetch on mount

  useEffect(() => {
    if(chainId && account) {
      if(assets.length === 0) {
      fetch(chainId, account)
      } else {
        window.open('/dashboard', '_self');
      }
    }
  })

  return (
    <>
      <SideBar />

      <div className={styles.container}>
        <div className={styles.columnContainer}>
          <div className={styles.centerImage}>
            <div className={styles.image}>
              <Image src={nonfts} alt='No Nfts'/>
            </div>
          </div>

          <div className={styles.text}>
            You don&apos;t have NFTs in your wallet
          </div>
        </div>
      </div>
    </>
  )
}

export default NoNftsComponent