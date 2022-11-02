import type { NextPage } from 'next'
import Head from 'next/head'
import { useState } from 'react'

import { AuthContext } from '../contexts/auth'

import SignUpComponent from '../components/SignUp'

const SignUp: NextPage = () => {
  return (
    <>
      <Head>
        <title>MetApp</title>
        <meta name='description' content='Manage your nfts!' />
        <link rel='icon' type="image/png" href='../public/icon.png' />
      </Head>
    
      <SignUpComponent />
    </>
  )
}

export default SignUp