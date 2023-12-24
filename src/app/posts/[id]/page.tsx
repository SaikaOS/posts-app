import React from 'react'
import styles from './page.module.scss'

type CommentProps = {
  postId: number,
  id: number,
  name: string,
  email: string,
  body: string
}

type ParamsProps = {
  params: {
    id: number
  }
}

async function getData(id: number) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)
  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }
  return res.json()
}

const Post = async ({params}: ParamsProps) => {
  const data: CommentProps[] = await getData(params.id)
  return (
    <div className={styles.post}>
      {
        data.map((item, index) => (
              <p key={index}>{item.name} - {item.body}</p>
        ))
      }

    </div>
  )
}

export default Post