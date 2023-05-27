import { useAuthState } from 'react-firebase-hooks/auth'
import { Outlet, useLocation, useNavigate } from 'react-router-dom'
import { auth } from '../../firebase'
import Auth from '../Auth/Auth'
import LanguageSelection from '../Language/Language'
import styles from './layout.module.scss'

export default function Layout() {
  const [user] = useAuthState(auth)
  const location = useLocation().pathname
  const navigate = useNavigate()

  return (
    <>
      <header className={styles.header}>
        {location === '/welcome' && user && <button onClick={() => navigate('/')}>Main page</button>}
        <Auth />
        <LanguageSelection />
      </header>
      <main>
        <Outlet />
      </main>
    </>
  )
}
