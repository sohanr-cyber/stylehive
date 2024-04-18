import React, { useState } from 'react'
import styles from '../styles/Login.module.css'
import Logo from '@/components/Utility/Logo'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useDispatch } from 'react-redux'
import { login } from '@/redux/userSlice'
import axios from 'axios'

const Register = () => {
  const router = useRouter()
  const dispatch = useDispatch()
  const [user, setUser] = useState({})
  const createAccount = async () => {
    if (!user.email || !user.password) {
      return
    }
    try {
      const { data } = await axios.post('/api/user', {
        ...user
      })
      dispatch(login(data))
    } catch (error) {}
  }
  return (
    <div className={styles.wrapper}>
      <div className={styles.form__container}>
        {' '}
        <div className={styles.logo}>
          <Logo />
        </div>
        <h2>Create an Account</h2>
        <form>
          <input
            type='text'
            placeholder='Enter Your First Name'
            value={user?.firstName}
            onChange={e => setUser({ ...user, firstName: e.target.value })}
          />
          <input
            type='text'
            placeholder='Enter Your Last Name'
            value={user.lastName}
            onChange={e => setUser({ ...user, lastName: e.target.value })}
          />

          <input
            type='text'
            placeholder='Enter Your Phone Number'
            value={user.phone}
            onChange={e => setUser({ ...user, phone: e.target.value })}
          />

          <input
            type='email'
            placeholder='Enter Your Email'
            value={user.email}
            onChange={e => setUser({ ...user, email: e.target.value })}
          />
          <input
            type='password'
            placeholder='Enter Your Password'
            value={user.password}
            onChange={e => setUser({ ...user, password: e.target.value })}
          />
          <div className={styles.btn} onClick={() => createAccount()}>
            Create Account
          </div>
        </form>
        <p className={styles.route}>
          Already have an account ?{' '}
          <Link href='/login'>Click here to Sign In</Link>
        </p>
      </div>
    </div>
  )
}

export default Register
