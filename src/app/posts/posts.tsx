import React from 'react'
import styles from './posts.module.scss'
import Link from 'next/link'

export type DataProps = {
    userId: number, 
    id: number,
    title: string,
    body: string
}

async function getData() {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts`)
    if (!res.ok) {
      throw new Error('Failed to fetch data')
    }
    return res.json()
  }

const Posts = async ({searchParams = {page: '1', per_page: '10'} }:{searchParams?: { [key: string]: string | string[] | undefined }}) => {
    const data: DataProps[] = await getData()
    
    const page = searchParams['page'] ?? '1'
    const per_page = searchParams['per_page'] ?? '10'
    const start = (Number(page) - 1) * Number(per_page)
    const end = start + Number(per_page) 
    const entries = data.slice(start, end)
  
  return (
    <div className={styles.main}>
        {
            entries.map(item => (
                <div key={item.id} className={styles.post}>
                    <Link href={`/posts/${item.id}`} className={styles.link}>
                    <h3 className={styles.title}>{item.id}. {item.title}</h3>
                    <p className={styles.body}>{item.body}</p>
                    </Link>
                </div>
            ))
        }
    </div>
  )
}

export default Posts