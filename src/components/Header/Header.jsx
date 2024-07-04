import { NavLink } from 'react-router-dom';
import css from './Header.module.css';

const Header = () => {
  return (
    <nav className={css.navList}>
      <NavLink className={({ isActive }) => isActive ? `${css.navItem} ${css.active}` : css.navItem}
               to='/goit-react-hw-02/'>
        Home
      </NavLink>
      <NavLink className={({ isActive }) => isActive ? `${css.navItem} ${css.active}` : css.navItem} to='/feedback'>
        Feedback
      </NavLink>
      <NavLink className={({ isActive }) => isActive ? `${css.navItem} ${css.active}` : css.navItem} to='/phonebook'>
        Phonebook
      </NavLink>
    </nav>
  );
};

export default Header;
