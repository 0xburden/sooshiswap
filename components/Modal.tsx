import { ReactNode } from 'react'

type Props = {
  children: ReactNode
}

export default function ModalContainer({ children }: Props) {
  return (
    <div
      role="document"
      className="fixed inset-0 z-1 flex justify-center items-center p-4"
      style={{ backgroundColor: 'rgb(0 0 0 / 0.666)' }}
    >
      <div className="max-w-sm w-full bg-gray-800 rounded-lg shadow-lg p-4 z-10">
        {children}
      </div>
    </div>
  )
}
