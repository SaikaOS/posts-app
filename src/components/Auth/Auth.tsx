'use client'
import { setUserName, setPassword } from '@/store/slice'
import { useAppDispatch, useAppSelector } from '@/store/store'
import React from 'react'
import styles from './Auth.module.scss'

const Auth = ({setLogin}:any) => {
  const state = useAppSelector(state => state.slice)
  const dispatch = useAppDispatch()

  const handleSumbit = () => {
    setLogin(state.username, state.password)
  }

  return (
    <div className={styles.auth}>
        <input type="text" placeholder='username' 
        className={styles.input}
        value={state.username}
        onChange={e => dispatch(setUserName(e.target.value))}
        />
        <input type="password" placeholder='password' 
        className={styles.input}
        value={state.password}
        onChange={(e) =>  dispatch(setPassword(e.target.value))}
        />
        <button className={styles.btn} onClick={handleSumbit}>auth</button>
    </div>
  )
}

export default Auth