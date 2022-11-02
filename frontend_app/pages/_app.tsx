import '../styles/globals.scss'
import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {

  return (
    // Create separated components for each context
    <>
        <Component {...pageProps} />
    </>
  )
  
  
}

export default MyApp
