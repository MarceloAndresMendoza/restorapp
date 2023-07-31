import logo from './branding/matcha.png'

export const getAsset = (file) => {
    switch (file) {
        case 'logo':
            return logo;
        default:
            return null;
    }
}