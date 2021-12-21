import React from 'react'
import Head from 'next/head'
import useNetwork from '../hooks/useNetwork'
import useGlobalState from '../hooks/useGlobalState'
import Header from './Header'

type Props = {
  children: React.ReactNode
}

export default function Layout({ children }: Props) {
  const [{ provider }] = useGlobalState()
  const network = useNetwork()

  return (
    <>
      <Head>
        <title>Sooshiwap | Swap things here, perhaps</title>
      </Head>

      <div className="bg-gray-900 text-white flex justify-center min-h-screen w-full">
        <div className="flex-1 p-4 max-w-6xl">
          <Header />
          {!provider ? (
            <strong className="text-center text-3xl block mt-12">Connect wallet on arbitrum network to enjoy sooshi</strong>
          ) : (
            <>
              {network && network.name === 'arbitrum' ? children : (
                <strong className="text-center text-3xl block mt-12">Wrong network! Please connect to arbitrum!</strong>
              )}
            </>
          )}
        </div>
      </div>
    </>
  )
}
