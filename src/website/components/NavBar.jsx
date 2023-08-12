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
    window.location.href = "https://marceloandresmendoza.github.io/restorapp";

  };

  return (
    <>
      <div className="flex justify-between">
        <ul className="flex items-center sm:justify-normal justify-between gap-4 sm:gap-2 ml-2">
          <li>
            <NavLink to="/restorapp/" className="flex flex-col sm:flex-row gap-2 items-center p-5 hover:bg-accent hover:text-white">
              <i className="fa-solid fa-house"></i>
              <div className='hidden sm:block'>{i18next.t('navbar-link-index')}</div>
            </NavLink>
          </li>
          <li>
            <NavLink to="/restorapp/menu" className="flex flex-col sm:flex-row gap-2 items-center p-5 hover:bg-accent hover:text-white">
              <i className="fa-solid fa-mug-hot"></i>
              <div className='hidden sm:block'>{i18next.t('navbar-link-menu')}</div>
            </NavLink>
          </li>
          <li>
            <NavLink to="/restorapp/reservations" className="flex flex-col sm:flex-row gap-2 items-center p-5 hover:bg-accent hover:text-white">
              <i className="fa-solid fa-check-to-slot"></i>
              <div className='hidden sm:block'>{i18next.t('navbar-link-reservation')}</div>
            </NavLink>
          </li>
          <li>
            <NavLink to="/restorapp/admin" className="flex flex-col sm:flex-row gap-2 items-center p-5 hover:bg-accent hover:text-white">
              <i className="fa-solid fa-lock"></i>
              <div className='hidden sm:block'>{i18next.t('navbar-link-admin')}</div>
            </NavLink>
          </li>

        </ul>

        <div className="flex items-center space-x-2 p-5 min-w-[100px] w-full justify-end sm:gap-0 gap-5">
          <button
            className={`text-orange-400 hover:shadow-xl font-medium ${selectedLanguage === 'es' ? 'underline' : ''}`}
            onClick={() => handleLanguageChange('es')}
          >
            <img className='w-8 rounded-md hover:shadow-sm hover:translate-y-1' src={getAsset('flagChile').image} alt="getAsset('flagChile').alt" />
          </button>
          <button
            className={`text-orange-400 hover:shadow-xl font-medium ${selectedLanguage === 'en' ? 'underline' : ''}`}
            onClick={() => handleLanguageChange('en')}
          >
            <img className='w-8 rounded-md hover:shadow-sm hover:translate-y-1' src={getAsset('flagUsa').image} alt="getAsset('flagUsa').alt" />
          </button>
          <button
            className={`text-orange-400 hover:shadow-xl font-medium ${selectedLanguage === 'por' ? 'underline' : ''}`}
            onClick={() => handleLanguageChange('por')}
          >
            <img className='w-8 rounded-md hover:shadow-sm hover:translate-y-1' src={getAsset('flagBrazil').image} alt="getAsset('flagBrazil').alt" />
          </button>
        </div>

      </div>
    </>
  );
};
