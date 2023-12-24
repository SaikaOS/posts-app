'use client'

import React from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import styles from './pagination.module.scss'

const Pagination = () => {
  const router = useRouter()
  const searchParams = useSearchParams()

  const per_page = searchParams.get('per_page') ?? '10'
  const arr = []

  for(let i=1;i<=Number(per_page);i++) {
    arr.push(i)
  }

  return (
    <div className={styles.pagination}>
     {arr.map((page, index) => (
       <button
       className={styles.btn}
       key={index}
       onClick={() => router.push(`/?page=${Number(page)}`)}>
       {page}
     </button>
     ))}
    </div>
  )
}

export default Pagination