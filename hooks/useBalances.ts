import { useCallback, useEffect, useReducer, useState } from 'react'
import { formatEther } from '@ethersproject/units'

import useGlobalState from './useGlobalState'
import useAddress from './useAddress'

type Balances = {
  ethBalance: string | number
  fromBalance: string | number
  toBalance: string | number
}

export default function useBalances(): Balances {
  const [{ provider }] = useGlobalState()
  const address = useAddress()

  const initState: Balances = {
    ethBalance: 0,
    fromBalance: 0,
    toBalance: 0,
  }
  const [state, dispatch] = useReducer(
    (
      state: typeof initState,
      action:
        | { type: 'eth balance'; payload: { ethBalance: string | number } }
        | { type: 'from balance'; payload: { fromBalance: string | number } }
        | { type: 'to balance'; payload: { toBalance: string | number } },
    ) => {
      switch (action.type) {
        case 'eth balance':
          return { ...state, ethBalance: action.payload.ethBalance }
        case 'from balance':
          return { ...state, fromBalance: action.payload.fromBalance }
        case 'to balance':
          return { ...state, toBalance: action.payload.toBalance }
        default:
          throw new Error(
            'unsupported action type given on useBalances reducer',
          )
      }
    },
    initState,
  )

  const setEthBalance = useCallback(async () => {
    if (!address || !provider) {
      return
    }

    try {
      const balance = await provider.getBalance(address)
      const ethBalance = formatEther(balance)
      dispatch({ type: 'eth balance', payload: { ethBalance } })
    } catch (err) {
      console.log(err)
    }
  }, [address, provider])

  useEffect(() => {
    setEthBalance()
  }, [setEthBalance])

  return state
}
