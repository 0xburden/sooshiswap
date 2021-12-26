import { useMemo } from 'react'
import defaultTokenList from '@sushiswap/default-token-list'

import useNetwork from './useNetwork'

const { tokens } = defaultTokenList

type Token = typeof tokens[0]

export default function useTokenList(): Token[] {
  const network = useNetwork()

  const tokenList = useMemo(() => {
    if (!network) {
      return []
    }

    return tokens.filter((token: Token) => token.chainId === network.chainId)
  }, [tokens, network])

  return tokenList
}
