import React from 'react'
import ConnectWallet from './ConnectWallet'

export default function Header() {
  return (
    <div className="flex w-full px-4 bg-blue-900 rounded-md shadow flex justify-between">
      <div className="font-bold">Sooshi</div>
      <ConnectWallet />
    </div>
  )
}
