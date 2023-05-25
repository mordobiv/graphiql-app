import { NavLink, Outlet } from 'react-router-dom';
import LanguageSelection from '../Header/Language';
import styles from './layout.module.scss';

export default function Layout() {
  return (
    <>
      <header className={styles.header}>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/custom">Add Card</NavLink>
        <LanguageSelection />
      </header>
      <Outlet />
    </>
  );
}
