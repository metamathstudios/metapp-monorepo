import type { NextPage } from 'next'
import Head from 'next/head'
import Settings from '../components/Settings'
import Web3ModalProvider from '../contexts/Web3ModalProvider'

const Home: NextPage = () => {
  return (
    <>
      <Web3ModalProvider>
      <Head>
        <title>MetApp</title>
        <meta name='description' content='Manage your nfts!' />
        <link rel='icon' href='../public/icon.png' />
      </Head>
      
      <Settings />
      </Web3ModalProvider>
    </>
  )
}

export default Home
