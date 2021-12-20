import React from 'react';
import type { Web3Provider } from '@ethersproject/providers';
import GlobalContext from '../contexts/GlobalContext';

export default function useGlobalState(): [
  { provider: Web3Provider | null },
  { setProvider: (provider: Web3Provider) => void; setSlippage: (slippage: number) => void }
] {
  const { state, dispatch } = React.useContext(GlobalContext);

  const setProvider = (provider: Web3Provider) =>
    dispatch({ type: 'provider', payload: { provider } });

  const setSlippage = (slippage: number) => dispatch({ type: 'slippage', payload: { slippage } });

  return [state, { setProvider, setSlippage }];
}
