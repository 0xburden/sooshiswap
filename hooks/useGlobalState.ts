import React from 'react'
import type { Web3Provider } from '@ethersproject/providers'
import GlobalContext, { GlobalState } from '../contexts/GlobalContext'

export default function useGlobalState(): [
  GlobalState,
  {
    setProvider: (provider: Web3Provider) => void
    setSlippage: (slippage: number) => void
    setFromToken: (fromToken: string) => void
    setToToken: (toToken: string) => void
    setTxDeadline: (txDeadline: number) => void
    invertSwap: () => void
  },
] {
  const { state, dispatch } = React.useContext(GlobalContext)

  const setProvider = (provider: Web3Provider) =>
    dispatch({ type: 'provider', payload: { provider } })

  const setSlippage = (slippage: number) =>
    dispatch({ type: 'slippage', payload: { slippage } })

  const setFromToken = (fromToken: string) =>
    dispatch({ type: 'from token', payload: { fromToken } })

  const setToToken = (toToken: string) =>
    dispatch({ type: 'to token', payload: { toToken } })

  const setTxDeadline = (txDeadline: number) =>
    dispatch({ type: 'transaction deadline', payload: { txDeadline } })

  const invertSwap = () => dispatch({ type: 'invert swap direction' })

  return [
    state,
    {
      setProvider,
      setSlippage,
      setToToken,
      setFromToken,
      setTxDeadline,
      invertSwap,
    },
  ]
}
