import React from 'react'
import Link from "next/link"

const Content = () => {
  return (
    <div className='flex-[0.6] py-2 flex items-center gap-6 justify-center'>
      <Link href="/">
        <h1 className='text-base font-medium text-blue-500' data-testid="first-test">First Test</h1>
      </Link>
      <Link href="/mock-data-test">
        <h1 className='text-base font-medium text-blue-500' data-testid="mock-data-tests">Mock Data Tests</h1>
      </Link>
      <Link href="/test-state-change">
        <h1 className='text-base font-medium text-blue-500' data-testid="test-state-changes">Test State changes</h1>
      </Link>
      <Link href="/test-api">
        <h1 className='text-base font-medium text-blue-500' data-testid="test-api">Test API</h1>
      </Link>
    </div>
  )
}

export default Content
