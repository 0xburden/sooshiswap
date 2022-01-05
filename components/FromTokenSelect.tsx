import { useCallback, useMemo, useState, useRef } from 'react'
import { createPortal } from 'react-dom'

import useGlobalState from '../hooks/useGlobalState'
import useTokenList from '../hooks/useTokenList'
import Modal from './Modal'

export default function FromTokenSelect() {
  const [{ fromToken }, { setFromToken }] = useGlobalState()
  const tokenList = useTokenList()

  const [isOpen, setOpen] = useState<boolean>(false)
  const containerRef = useRef(null)

  const fromTokenObj = useMemo(() => {
    return tokenList.totalList.find((token) => token.address === fromToken)
  }, [fromToken, tokenList])

  const handleSelect = useCallback((address: string) => {
    setFromToken(address)
    setOpen(false)
  }, [])

  const modalContent = useMemo(() => {
    if (containerRef.current === null) {
      return null
    }

    return createPortal(
      <Modal>
        <h1 className="text-2xl font-bold">Select a token to swap from</h1>
        <div className="mt-4">
          <ul className="h-72 overflow-y-scroll bg-gray-900 rounded-lg">
            {tokenList.fromList.map((token) => (
              <li key={token.address} className="mt-4 p-4 first:mt-0">
                <div className="flex items-center">
                  {token.logoURI ? (
                    <img
                      src={token.logoURI}
                      alt=""
                      className="w-12 mr-4 rounded"
                    />
                  ) : (
                    <div className="w-12 mr-4 rounded bg-gray-900 text-center font-bold">
                      ?
                    </div>
                  )}
                  <button
                    type="button"
                    className="font-bold text-lg"
                    onClick={() => handleSelect(token.address)}
                  >
                    {token.symbol}
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <button
          type="button"
          onClick={() => setOpen(false)}
          className="w-full p-2 bg-gray-700 mt-4 rounded-lg text-center font-bold uppercase"
        >
          cancel
        </button>
      </Modal>,
      containerRef.current
    )
  }, [containerRef.current])

  return (
    <div ref={containerRef}>
      {fromTokenObj ? (
        <div className="relative flex items-center justify-between">
          <div className="flex items-center">
            <img
              src={fromTokenObj.logoURI}
              alt=""
              className="w-12 mr-4 rounded"
            />
            <button
              type="button"
              className="font-bold text-lg"
              onClick={() => setOpen(true)}
            >
              {fromTokenObj.symbol}
            </button>
          </div>
        </div>
      ) : null}
      {isOpen ? modalContent : null}
    </div>
  )
}
