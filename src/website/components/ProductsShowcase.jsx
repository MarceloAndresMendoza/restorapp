import i18next from 'i18next';
import { getAsset } from '../../assets/assetList';

export const ProductsShowcase = () => {

    const productShocaseList = [
        {
            title: i18next.t('food-showcase-breakfast-title'),
            text: i18next.t('food-showcase-breakfast-text'),
            image: getAsset('foodBreakfast')
        },
        {
            title: i18next.t('food-showcase-cake-title'),
            text: i18next.t('food-showcase-cake-text'),
            image: getAsset('foodCake')
        }
    ]

    return (
        <>
            <div className="p-6 flex flex-col gap-5">
                {
                    productShocaseList.map(product => (
                        <div className="flex flex-row">
                            <img className=" rounded-lg w-60 shadow-lg" src={product.image} alt="breakfast photo" />
                            <div className="flex flex-col px-4 justify-center">
                                <div className="text-3xl text-accent flex gap-4 flex-nowrap">
                                    <i class="fa-solid fa-utensils"></i>
                                    <div>{product.title}</div>
                                </div>
                                <div className="text-lg">{product.text}</div>
                            </div>
                        </div>
                    )
                )}
            </div>
        </>
)}
