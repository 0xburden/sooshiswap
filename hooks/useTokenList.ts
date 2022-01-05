import { useMemo } from 'react'
import defaultTokenList from '@sushiswap/default-token-list'
import useGlobalState from './useGlobalState'

import useNetwork from './useNetwork'

const { tokens } = defaultTokenList

type Token = typeof tokens[0]

type TokenList = {
  totalList: Token[]
  fromList: Token[]
  toList: Token[]
}

export default function useTokenList(): TokenList {
  const [{ fromToken, toToken }] = useGlobalState()
  const network = useNetwork()

  const tokenList = useMemo<TokenList>(() => {
    if (!network) {
      return { totalList: [], fromList: [], toList: [] }
    }

    const arbitrumTokens = tokens.filter(
      (token: Token) => token.chainId === network.chainId,
    )

    return {
      totalList: arbitrumTokens,
      fromList: arbitrumTokens.filter(
        (token: Token) => token.address !== fromToken,
      ),
      toList: arbitrumTokens.filter(
        (token: Token) => token.address !== toToken,
      ),
    }
  }, [tokens, network])

  return tokenList
}
