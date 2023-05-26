import { Outlet } from 'react-router-dom';
import LanguageSelection from '../Language/Language';
import styles from './layout.module.scss';
import Auth from '../Auth/Auth';
import { useLocation } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from "../../firebase";
import { useNavigate } from 'react-router-dom';

export default function Layout() {
  const [user] = useAuthState(auth);
  const location = useLocation().pathname;
  const navigate = useNavigate();

  return (
    <>
      <header className={styles.header}>
        <span>GraphiQL</span>
        {location === '/welcome' && user && <button onClick={() => navigate('/')}>Main page</button>}
        <Auth />
        <LanguageSelection />
      </header>
      <Outlet />
    </>
  );
}
