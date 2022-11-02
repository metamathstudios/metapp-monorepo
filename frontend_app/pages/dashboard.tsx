import type { NextPage } from 'next'
import Head from 'next/head'
import DashboardComponent from '../components/Dashboard'
import Web3ModalProvider from '../contexts/Web3ModalProvider'
import BlockchainProvider from '../contexts/AuthBankProvider'
import AssetManager from '../contexts/AssetManager'

const Dashboard: NextPage = () => {
  return (
    <>
      <Web3ModalProvider>
        <BlockchainProvider>
          <AssetManager>
            <Head>
              <title>MetApp</title>
              <meta name='description' content='Manage your nfts!' />
              <link rel='icon' href='../public/icon.png' />
            </Head>

            <DashboardComponent />
          </AssetManager>
        </BlockchainProvider>
      </Web3ModalProvider>
    </>
  )
}

export default Dashboard
