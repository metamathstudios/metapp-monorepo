import type { NextPage } from 'next'
import Head from 'next/head'

import NavBar from '../components/NavBar'
import LandingPage from '../components/LandingPage'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>MetApp</title>
        <meta name='description' content='Manage your nfts!' />
        <link rel='icon' href='../public/icon.png' />
      </Head>
      
      <NavBar />
      <LandingPage />
    </>
  )
}

export default Home
