import React from 'react'

import useAddress from '../hooks/useAddress'
import useBalances from '../hooks/useBalances'
import ConnectWallet from './ConnectWallet'

export default function Header() {
  const address = useAddress()
  const balances = useBalances()

  return (
    <div className="flex w-full px-4 bg-gray-800 shadow-lg p-4 rounded-md shadow items-center justify-between flex-col md:flex-row">
      <div className="font-bold text-xl">SooshiSwap</div>

      <div className="flex items-center mt-4 flex-wrap justify-center md:justify-start md:flex-no-wrap md:mt-0">
        {balances.ethBalance ? (
          <div className="mr-2 text-sm flex-1 flex items-center py-2 px-4 bg-gray-700 justify-center rounded-lg shadow-lg">
            {Number(balances.ethBalance).toFixed(4)} ETH
          </div>
        ) : null}
        {address ? (
          <div className="mr-2 text-sm flex-1 flex items-center py-2 px-4 bg-gray-700 justify-center rounded-lg shadow-lg">
            {address.slice(0, 6)}...{address.slice(-4, address.length)}
          </div>
        ) : null}
        <div className="mt-2 md:mt-0">
          <ConnectWallet />
        </div>
      </div>
    </div>
  )
}
