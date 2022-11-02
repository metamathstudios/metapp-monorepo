import type { NextPage } from 'next'
import Head from 'next/head'

import LoginComponent from '../components/Login'

const Login: NextPage = () => {
  return (
    <>
      <Head>
        <title>MetApp</title>
        <meta name='description' content='Manage your nfts!' />
        <link rel='icon' href='../public/icon.png' />
      </Head>
      
      <LoginComponent />
    </>
  )
}

export default Login