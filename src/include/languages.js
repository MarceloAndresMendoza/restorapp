import i18next from 'i18next';
import {addEngLanguage} from './locale/eng-usa';
import {initDefaultLanguageEs} from './locale/esp-la';

export const initLanguageSystem = () => {
    initDefaultLanguageEs();
    addEngLanguage();

    const selectedLanguage = localStorage.getItem('selectedLanguage') || 'es';
    i18next.changeLanguage(selectedLanguage);
}