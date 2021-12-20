import React from 'react';
import WalletConnectProvider from '@walletconnect/web3-provider';
import Web3Modal from 'web3modal';
import { INFURA_ID } from '../config';
import { Core } from 'web3modal/dist/core';

export default function useWeb3Modal() {
  const [web3Modal, setWeb3Modal] = React.useState<Core | null>(null);

  const initialize = React.useCallback(() => {
    setWeb3Modal(
      new Web3Modal({
        network: 'mainnet',
        cacheProvider: true,
        theme: 'dark',
        providerOptions: {
          walletconnect: {
            package: WalletConnectProvider,
            options: {
              infuraId: INFURA_ID,
            },
          },
        },
      })
    );
  }, []);

  React.useEffect(() => {
    initialize();

    return () => setWeb3Modal(null);
  }, [initialize]);

  return web3Modal;
}
