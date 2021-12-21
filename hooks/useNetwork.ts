import { useCallback, useEffect, useState } from 'react'
import { Network } from '@ethersproject/networks'
import useGlobalState from './useGlobalState'

export default function useNetwork() {
  const [{ provider }] = useGlobalState()
  const [network, setNetwork] = useState<Network | null>(null)

  const handleNetwork = useCallback(async () => {
    try {
      if (!provider) {
        return
      }
      const currentNetwork = await provider.getNetwork()
      setNetwork(currentNetwork)
    } catch (err) {
      // eslint-disable-next-line
      console.log(err)
      setNetwork(null)
    }
  }, [provider])

  useEffect(() => {
    handleNetwork()
  }, [handleNetwork])

  return network
}
