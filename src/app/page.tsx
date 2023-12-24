'use client'
import Auth from '@/components/Auth/Auth';
import Posts from './posts/posts';
import { setLogin } from '@/api/login';
import styles from './page.module.scss'
import Pagination from '@/components/pagination/pagination';

export default function Home({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined }
}) {

  return (
    <main className={styles.main}>
      <Auth setLogin={setLogin}/>
      <Posts searchParams={searchParams}/>
      <Pagination />
    </main>
  )
}
