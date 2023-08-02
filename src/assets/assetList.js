import logo from './branding/matcha.png';
import photoFront from './photos/front-photo.jpg';
import cherryTree from './photos/pink-scene.jpg';
import productShowcase1 from './photos/food-breakfast.jpg';
import productShowcase2 from './photos/food-cake.jpg';
import productShowcase3 from './photos/green-tea.jpg';
import productShowcase4 from './photos/people.jpg';
import menuSweetsHeader from './photos/mochis.jpg';
import menuDrinksHeader from './photos/tea-cup.jpg';

export const getAsset = (file) => {
    switch (file) {
        case 'logo':
            return logo;
        case 'photoFront':
            return photoFront;
        case 'cherryTree':
            return cherryTree;
        case 'productShowcase1':
            return productShowcase1;
        case 'productShowcase2':
            return productShowcase2;
        case 'productShowcase3':
            return productShowcase3;
        case 'productShowcase4':
            return productShowcase4;
        case'menuSweetsHeader':
            return menuSweetsHeader;
        case'menuDrinksHeader':
            return menuDrinksHeader;
        default:
            return null;
    }
}