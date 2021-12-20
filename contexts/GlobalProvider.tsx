import React from 'react';
import GlobalContext, { initState, GlobalState, GlobalActions } from './GlobalContext';

type Props = {
  children: React.ReactNode;
};

const { Provider } = GlobalContext;

export default function GlobalProvider({ children }: Props) {
  const [state, dispatch] = React.useReducer((state: GlobalState, action: GlobalActions) => {
    switch (action.type) {
      case 'provider':
        return { ...state, provider: action.payload.provider };
      case 'slippage':
        return { ...state, slippage: action.payload.slippage };
      default:
        throw new Error('unsupported action given to GlobalProvider reducer');
    }
  }, initState);

  return <Provider value={{ state, dispatch }}>{children}</Provider>;
}
