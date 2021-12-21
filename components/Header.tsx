import React from 'react'
import useAddress from '../hooks/useAddress'
import ConnectWallet from './ConnectWallet'

export default function Header() {
  const address = useAddress()

  return (
    <div className="flex w-full px-4 bg-gray-800 shadow-lg p-4 rounded-md shadow flex items-center justify-between">
      <div className="font-bold text-xl uppercase">Sooshi</div>

      <div className="flex items-center">
        {address ? (
          <div className="mr-4 text-sm flex-1 flex items-center">{address.slice(0, 7)}...</div>
        ) : null}
        <ConnectWallet />
      </div>
    </div>
  )
}
