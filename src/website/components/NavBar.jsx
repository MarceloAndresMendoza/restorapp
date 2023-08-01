import i18next from 'i18next';
import { NavLink } from 'react-router-dom';

export const NavBar = () => {
  return (
    <>
      <div className="relative w-full h-10 items-center flex justify-between bg-latte py-2 shadow-sm shadow-neutral-700/10 ">
        <ul className="flex items-center m-5 gap-5">
          <li><NavLink to="/"><i class="fa-solid fa-house"></i> {i18next.t('navbar-link-index')}</NavLink></li>
          <li><NavLink to="/menu"><i class="fa-solid fa-mug-hot"></i> {i18next.t('navbar-link-menu')}</NavLink></li>
          <li><NavLink to="/reservation"><i class="fa-solid fa-check-to-slot"></i> {i18next.t('navbar-link-reservation')}</NavLink></li>
        </ul>
      </div>
    </>
  )
}
