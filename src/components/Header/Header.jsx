import { NavLink, Outlet } from 'react-router-dom';
import css from './Header.module.css';
import { Suspense } from 'react';

const Header = () => {
  return (
    <>
      <nav className={css.navList}>
        <NavLink
          className={({ isActive }) => isActive ? `${css.navItem} ${css.active}` : css.navItem}
          to='/goit-react-hw-05-movies'
          end
        >
          Home
        </NavLink>
        <NavLink
          className={({ isActive }) => isActive ? `${css.navItem} ${css.active}` : css.navItem}
          to='/goit-react-hw-05-movies/movies'
          end
        >
          Movies
        </NavLink>
      </nav>
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default Header;
