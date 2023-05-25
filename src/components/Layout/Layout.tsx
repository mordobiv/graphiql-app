import { NavLink, Outlet } from 'react-router-dom';
import LanguageSelection from '../Language/Language';
import styles from './layout.module.scss';
import Auth from '../Auth/Auth';

export default function Layout() {
  return (
    <>
      <header className={styles.header}>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/custom">Add Card</NavLink>
        <LanguageSelection />
        <Auth />
      </header>
      <Outlet />
    </>
  );
}
