import React from 'react'
import type { Web3Provider } from '@ethersproject/providers'

export const initState: {
  provider: Web3Provider | null
  slippage: number // pct
  txDeadline: number // minutes
  fromToken: string | null
  fromAmount: number | null
  toToken: string | null
  toAmount: number | null
} = {
  provider: null,
  slippage: 0.5,
  txDeadline: 30,
  fromToken: '0x82aF49447D8a07e3bd95BD0d56f35241523fBab1', // WETH address
  fromAmount: null,
  toToken: null,
  toAmount: null,
}

export type GlobalState = typeof initState

export type GlobalActions =
  | { type: 'provider'; payload: { provider: Web3Provider } }
  | { type: 'slippage'; payload: { slippage: number } }
  | { type: 'to token'; payload: { toToken: string } }
  | { type: 'to amount'; payload: { toAmount: number } }
  | { type: 'from token'; payload: { fromToken: string } }
  | { type: 'from amount'; payload: { fromAmount: number } }
  | { type: 'transaction deadline'; payload: { txDeadline: number } }
  | { type: 'invert swap direction'; payload?: null }

const defaultDispatch: React.Dispatch<GlobalActions> = () => initState

export default React.createContext({
  state: initState,
  dispatch: defaultDispatch,
})
