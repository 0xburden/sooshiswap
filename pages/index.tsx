import type { NextPage } from 'next'

import SwapForm from '../components/SwapForm'

export default function IndexPage<NextPage>() {
  return (
    <main className="flex justify-center h-full w-full">
      <SwapForm />
    </main>
  )
}
