import logo from './branding/matcha.png';
import photoFront from './photos/front-photo.jpg';
import foodBreakfast from './photos/food-breakfast.jpg';
import foodCake from './photos/food-cake.jpg';

export const getAsset = (file) => {
    switch (file) {
        case 'logo':
            return logo;
        case 'photoFront':
            return photoFront;
        case 'foodBreakfast':
            return foodBreakfast;
        case 'foodCake':
            return foodCake;
        default:
            return null;
    }
}