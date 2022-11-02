import Card from './components/Card'

import styles from './styles.module.scss'

import test2 from './components/Card/assets/test2.svg'

import { useContext, useEffect, useState } from 'react'
import { AssetManagerContext } from '../../../../contexts/AssetManager'
import { Web3ModalContext } from '../../../../contexts/Web3ModalProvider'

const Gallery = () => {

  const { chainId, account } = useContext(Web3ModalContext)
  const { assets, fetch } = useContext(AssetManagerContext)

  useEffect(() => {
    if (chainId && account) {
      fetch(chainId, account)
    }
  }, [chainId, account])

  useEffect(() => {
    console.log(assets)
  }, [assets])


  // Populate Card components with assets
  
  return (
    <div className={styles.container}>
      <div className={styles.columnContainer}>
        <div className={styles.text}>
          Activate your NTFs to appear in your application <br />
          if you have not yet downloaded the application <span>click here</span> <br />
          or enter the download tab
        </div>

        <div className={styles.gridContainer}>
          {assets.map((asset, index) => (
            assets.at(index)?.isERC721 ? <Card
              key={index}
              title={assets.at(index)?.name?.slice(0, 20)}
              image={assets.at(index)?.image}
              network={chainId}
              address={assets.at(index)?.contractAddress}
              id={assets.at(index)?.id}
            /> : <></> 
          ))}
        </div>
      </div>
    </div>
  )
}

export default Gallery