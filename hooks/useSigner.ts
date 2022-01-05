import { useCallback, useEffect, useState } from 'react'
import { JsonRpcSigner } from '@ethersproject/providers'
import useGlobalState from './useGlobalState'

export default function useSigner() {
  const [signer, setSigner] =
    useState<JsonRpcSigner | null>(null)
  const [{ provider }] = useGlobalState()

  const handleSigner = useCallback(async () => {
    if (!provider) {
      return
    }

    try {
      const currentSigner = await provider.getSigner()
      setSigner(currentSigner)
    } catch (err) {
      console.log(err)
    }
  }, [provider])

  useEffect(() => {
    handleSigner()
  }, [handleSigner])

  return signer
}
