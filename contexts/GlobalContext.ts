import React from 'react';
import type { Web3Provider } from '@ethersproject/providers';

export const initState: {
  provider: Web3Provider | null;
  slippage: number;
} = {
  provider: null,
  slippage: 0.5,
};

export type GlobalState = typeof initState;

export type GlobalActions =
  | { type: 'provider'; payload: { provider: Web3Provider } }
  | { type: 'slippage'; payload: { slippage: number } };

const defaultDispatch: React.Dispatch<GlobalActions> = () => initState;

export default React.createContext({ state: initState, dispatch: defaultDispatch });
