import type { NextPage } from 'next'
import Head from 'next/head'
import NoNftsComponent from '../components/Dashboard/components/NoNftsComponent'
import Web3ModalProvider from '../contexts/Web3ModalProvider'
import AssetManager from '../contexts/AssetManager'

const NoNfts: NextPage = () => {
  return (
    <>
      <Web3ModalProvider>
        <AssetManager>
          <Head>
            <title>MetApp</title>
            <meta name='description' content='Manage your nfts!' />
            <link rel='icon' href='../public/icon.png' />
          </Head>
      <NoNftsComponent />
      </AssetManager>
      </Web3ModalProvider>
    </>
  )
}

export default NoNfts