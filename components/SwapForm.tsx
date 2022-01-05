import { useCallback, useMemo } from 'react'

import useGlobalState from '../hooks/useGlobalState'
import useTokenList from '../hooks/useTokenList'

export default function SwapForm() {
  const [{ fromToken }, globalSetters] = useGlobalState()
  const tokenList = useTokenList()

  const fromTokenObj = useMemo(() => {
    return tokenList.totalList.find((token) => token.address === fromToken)
  }, [fromToken, tokenList])

  return (
    <section className="w-full max-w-xl mt-12">
      <div className="p-4 rounded-lg shadow-lg bg-gray-800">
        <h2 className="font-bold text-3xl">Swap</h2>

        <form>
          <fieldset>
            <div className="flex flex-col items-center justify-center w-full">
              <div className="bg-gray-700 p-4 rounded-lg mt-4 w-full">
                {fromTokenObj ? (
                  <div className="relative flex items-center justify-between">
                    <div className="flex items-center">
                      <img src={fromTokenObj.logoURI} alt="" className="w-12 mr-4 rounded" />
                      <button type="button" className="font-bold text-lg">
                        {fromTokenObj.symbol}
                      </button>
                    </div>
                  </div>
                ) : null}
              </div>
            </div>
          </fieldset>
        </form>
      </div>
    </section>
  )
}
