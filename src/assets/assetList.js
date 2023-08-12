import logo from './branding/matcha.png';
import photoFront from './photos/front-photo.jpg';
import cherryTree from './photos/pink-scene.jpg';
import productShowcase1 from './photos/food-breakfast.jpg';
import productShowcase2 from './photos/food-cake.jpg';
import productShowcase3 from './photos/green-tea.jpg';
import productShowcase4 from './photos/people.jpg';
import menuSweetsHeader from './photos/mochis.jpg';
import menuDrinksHeader from './photos/tea-cup.jpg';
import descImg from './branding/tori.png';
import restorapp from './branding/restorapp.jpg';
import flagChile from './icons/flag-chile.jpg';
import flagUsa from './icons/flag-usa.jpg';
import flagBrazil from './icons/flag-brazil.jpg';

import i18next from 'i18next';

export const getAsset = (file) => {
    const alt = i18next.t("alt-" + file);
    switch (file) {
        case 'logo':
            return { image: logo, alt: alt };
        case 'photoFront':
            return { image: photoFront, alt: alt };
        case 'cherryTree':
            return { image: cherryTree, alt: alt };
        case 'productShowcase1':
            return { image: productShowcase1, alt: alt };
        case 'productShowcase2':
            return { image: productShowcase2, alt: alt };
        case 'productShowcase3':
            return { image: productShowcase3, alt: alt };
        case 'productShowcase4':
            return { image: productShowcase4, alt: alt };
        case 'menuSweetsHeader':
            return { image: menuSweetsHeader, alt: alt };
        case 'menuDrinksHeader':
            return { image: menuDrinksHeader, alt: alt };
        case 'descImg':
            return { image: descImg, alt: alt };
        case 'restorapp':
            return { image: restorapp, alt: alt };
        case 'flagChile':
            return { image: flagChile, alt: alt };
        case 'flagUsa':
            return { image: flagUsa, alt: alt };
        case 'flagBrazil':
            return { image: flagBrazil, alt: alt };
        default:
            return null;
    }
};
