import { useCallback, useMemo, useState } from 'react'

import FromTokenSelect from './FromTokenSelect'

export default function SwapForm() {
  return (
    <section className="w-full max-w-xl mt-12">
      <div className="p-4 rounded-lg shadow-lg bg-gray-800">
        <h2 className="font-bold text-3xl">Swap</h2>

        <form>
          <fieldset>
            <div className="flex flex-col items-center justify-center w-full">
              <div className="bg-gray-700 p-4 rounded-lg mt-4 w-full">
                <FromTokenSelect />
              </div>
            </div>
          </fieldset>
        </form>
      </div>
    </section>
  )
}
