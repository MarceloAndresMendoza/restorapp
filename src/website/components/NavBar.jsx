import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import i18next from 'i18next';
import { getAsset } from '../../assets/assetList';

export const NavBar = () => {
  const [selectedLanguage, setSelectedLanguage] = useState(localStorage.getItem('selectedLanguage') || 'es');

  useEffect(() => {
    i18next.changeLanguage(selectedLanguage);
  }, []);

  const handleLanguageChange = (language) => {
    setSelectedLanguage(language);
    localStorage.setItem('selectedLanguage', language);
    i18next.changeLanguage(language);
    window.location.reload();
  };

  return (
    <>
      <div className="flex sm:justify-between flex-wrap">
        <ul className="flex items-center h-full sm:justify-normal justify-between">
          <li>
            <NavLink to="/" className="flex flex-col sm:flex-row gap-2 items-center p-5 hover:bg-accent hover:text-white">
              <i className="fa-solid fa-house"></i>
              <div>{i18next.t('navbar-link-index')}</div>
            </NavLink>
          </li>
          <li>
            <NavLink to="/menu" className="flex flex-col sm:flex-row gap-2 items-center p-5 hover:bg-accent hover:text-white">
              <i className="fa-solid fa-mug-hot"></i>
              <div>{i18next.t('navbar-link-menu')}</div>
            </NavLink>
          </li>
          <li>
            <NavLink to="/reservations" className="flex flex-col sm:flex-row gap-2 items-center p-5 hover:bg-accent hover:text-white">
              <i className="fa-solid fa-check-to-slot"></i>
              <div>{i18next.t('navbar-link-reservation')}</div>
            </NavLink>
          </li>
          <li>
            <NavLink to="/admin" className="flex flex-col sm:flex-row gap-2 items-center p-5 hover:bg-accent hover:text-white">
              <i className="fa-solid fa-lock"></i>
              <div>{i18next.t('navbar-link-admin')}</div>
            </NavLink>
          </li>

        </ul>

        <div className="flex items-center space-x-2 p-5 min-w-[100px] sm:w-[100px] w-full justify-between sm:justify-end">
          <button
            className={`text-orange-400 font-medium ${selectedLanguage === 'en' ? 'underline' : ''}`}
            onClick={() => handleLanguageChange('en')}
          >
            <img className='w-8 rounded-md hover:shadow-xl hover:rounded-sm' src={getAsset('flagUsa').image} alt="getAsset('flagUsa').alt" />
          </button>
          <button
            className={`text-orange-400 font-medium ${selectedLanguage === 'es' ? 'underline' : ''}`}
            onClick={() => handleLanguageChange('es')}
          >
            <img className='w-8 rounded-md hover:shadow-xl hover:rounded-sm' src={getAsset('flagChile').image} alt="getAsset('flagChile').alt" />
          </button>
        </div>

      </div>
    </>
  );
};
