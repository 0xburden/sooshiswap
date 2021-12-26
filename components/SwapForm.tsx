import { useCallback } from 'react'

import useGlobalState from '../hooks/useGlobalState'
import useTokenList from '../hooks/useTokenList'

export default function SwapForm() {
  const [globalState, globalSetters] = useGlobalState()
  const tokenList = useTokenList()

  return (
    <section className="w-full max-w-xl">
      <div className="p-4 rounded-lg shadow-lg bg-gray-800">
        <h2 className="font-bold text-3xl">Swap</h2>

        <form>
          <fieldset>
            <div className="flex flex-col items-center justify-center w-full">
              <div className="mt-4 flex">
                <div>input goes here</div>
              </div>
            </div>
          </fieldset>
        </form>
      </div>
    </section>
  )
}
