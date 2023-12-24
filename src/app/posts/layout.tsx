'use client'
import { useRouter } from 'next/navigation'
import React, { PropsWithChildren } from 'react'

export default function layout({children}: PropsWithChildren<unknown>) {
    const router = useRouter()
  return (
    <div>
        <button onClick={() => router.push('/')}>go back</button>
        {children}
    </div>
  )
}
