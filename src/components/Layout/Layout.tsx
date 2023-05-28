import { useAuthState } from 'react-firebase-hooks/auth'
import { Outlet, useLocation, useNavigate } from 'react-router-dom'
import { auth } from '../../firebase'
import { useAppDispatch, useAppSelector } from '../../store/hooks'
import { setIsScrolled } from '../../store/header'
import Auth from '../Auth/Auth'
import LanguageSelection from '../Language/Language'
import styles from './layout.module.scss';
import Footer from '../Footer/footer';

export default function Layout() {
  const [user] = useAuthState(auth);
  const location = useLocation().pathname;
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const isScrolled = useAppSelector((state) => state.headerReducer.isScrolled);


  window.addEventListener('scroll', () => {
    dispatch(setIsScrolled(window.scrollY))
  })

  return (
    <>
      <header className={`${styles.header} ${isScrolled}`}>
        {/* <div className={`${styles.isScrolled}`}> */}
          {location === '/welcome' && user && <button onClick={() => navigate('/')}>Main page</button>}
          <Auth />
          <LanguageSelection />
        {/* </div> */}
      </header>
      <main className={styles.main}>
        <Outlet />
      </main>
      <Footer />
    </>
  )
}
