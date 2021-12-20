import React from 'react';
import useGlobalState from '../hooks/useGlobalState';
import useWeb3Modal from '../hooks/useWeb3Modal';
import * as ethers from 'ethers';

export default function ConnectWallet() {
  const [{ provider }, { setProvider }] = useGlobalState();
  const web3Modal = useWeb3Modal();
  const isConnected = Boolean(web3Modal && web3Modal.cachedProvider);

  const disconnect = React.useCallback(async () => {
    if (web3Modal !== null && provider !== null) {
      await web3Modal.clearCachedProvider();

      setTimeout(() => {
        window.location.reload();
      }, 1);
    }
  }, [web3Modal, provider]);

  const connect = React.useCallback(async () => {
    if (web3Modal !== null) {
      const provider = await web3Modal.connect();
      setProvider(new ethers.providers.Web3Provider(provider));

      provider.on('chainChanged', (chainId: string) => {
        console.log(`chain changed to ${chainId}! updating providers`);
        setProvider(new ethers.providers.Web3Provider(provider));
      });

      provider.on('accountsChanged', () => {
        console.log(`account changed!`);
        setProvider(new ethers.providers.Web3Provider(provider));
      });

      provider.on('disconnect', (code: number, reason: string) => {
        console.log(code, reason);
        disconnect();
      });
    }
  }, [web3Modal, setProvider, disconnect]);

  const reconnect = React.useCallback(async () => {
    if (web3Modal === null) {
      return;
    }

    if (web3Modal.cachedProvider && provider === null) {
      connect();
    }
  }, [web3Modal, connect, provider]);

  React.useEffect(() => {
    reconnect();
  }, [reconnect]);

  return (
    <button
      type="button"
      className="uppercase md:text-lg"
      onClick={() => (isConnected ? disconnect() : connect())}
    >
      {isConnected ? 'logout' : 'connect'}
    </button>
  );
}
