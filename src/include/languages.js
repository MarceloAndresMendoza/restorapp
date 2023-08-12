import i18next from 'i18next';
import {addEngLanguage} from './locale/eng-usa';
import {initDefaultLanguageEs} from './locale/esp-la';
import { addPortLanguage } from './locale/port-bra';

export const initLanguageSystem = () => {
    initDefaultLanguageEs();
    addEngLanguage();
    addPortLanguage();

    const selectedLanguage = localStorage.getItem('selectedLanguage') || 'es';
    i18next.changeLanguage(selectedLanguage);
}