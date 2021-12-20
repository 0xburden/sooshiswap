import '../styles/globals.css'
import type { AppProps } from 'next/app'

import GlobalProvider from '../contexts/GlobalProvider'
import Layout from '../components/Layout'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <GlobalProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </GlobalProvider>
  )

}

export default MyApp
