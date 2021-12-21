import { useCallback, useEffect, useState } from 'react'
import useSigner from './useSigner'

export default function useAddress() {
  const [address, setAddress] = useState<string | null>(null)
  const signer = useSigner()

  const handleAddress = useCallback(async () => {
    if (!signer) {
      return
    }

    try {
      const currentAddress = await signer.getAddress()
      setAddress(currentAddress)
    } catch (err) {
      console.log(err)
      setAddress('error fetching address')
    }
  }, [signer])

  useEffect(() => {
    handleAddress()
  }, [handleAddress])

  return address
}
