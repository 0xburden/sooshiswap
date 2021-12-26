import React from 'react'
import GlobalContext, { initState, GlobalState, GlobalActions } from './GlobalContext'

type Props = {
  children: React.ReactNode
}

const { Provider } = GlobalContext

export default function GlobalProvider({ children }: Props) {
  const [state, dispatch] = React.useReducer((state: GlobalState, action: GlobalActions) => {
    switch (action.type) {
      case 'provider':
        return { ...state, provider: action.payload.provider }
      case 'slippage':
        return { ...state, slippage: action.payload.slippage }
      case 'from token':
        return { ...state, fromToken: action.payload.fromToken }
      case 'from amount':
        return { ...state, fromAmount: action.payload.fromAmount }
      case 'to token':
        return { ...state, toToken: action.payload.toToken }
      case 'to amount':
      return { ...state, toAmount: action.payload.toAmount }
      case 'transaction deadline':
        return { ...state, txDeadline: action.payload.txDeadline }
      default:
        throw new Error('unsupported action given to GlobalProvider reducer')
    }
  }, initState)

  return <Provider value={{ state, dispatch }}>{children}</Provider>
}
