import { Outlet, NavLink } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import s from './SharedLayout.module.css';

function SharedLayout() {
  return (
    <div className={s.container}>
      <nav className={s.navBar}>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/movies">Movies</NavLink>
      </nav>
      <Outlet />
      <ToastContainer autoClose={3000} theme={'colored'} />
    </div>
  );
}

export default SharedLayout;
