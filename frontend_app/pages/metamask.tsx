import type { NextPage } from 'next'
import Head from 'next/head'
import MetamaskComponent from '../components/Dashboard/components/MetamaskComponent'
import Web3ModalProvider from '../contexts/Web3ModalProvider'

const Metamask: NextPage = () => {
  return (
    
    <>
      <Web3ModalProvider>
      <Head>
        <title>MetApp</title>
        <meta name='description' content='Manage your nfts!' />
        <link rel='icon' href='../public/icon.png' />
      </Head>
      
      <MetamaskComponent />
      </Web3ModalProvider>
    </>
  )
}

export default Metamask