import i18next from 'i18next';
import { getAsset } from '../../assets/assetList';

export const Header = () => {
    return (
        <>
            <div className="flex flex-row items-center bg-white pt-2 pb-2 shadow-inner">
                <img className="w-24 md:w-32" src={getAsset('logo')} alt="" />
                <div className="flex flex-col justify-start">
                    <h1 className="text-2xl sm:text-4xl mb-3 font-semibold tracking-tight text-primary">{i18next.t('brand-main-title')}</h1>
                    <h2 className="text-xs sm:text-base tracking-tight text-primary">{i18next.t('brand-main-subtitle')}</h2>
                </div>
            </div>
        </>
    )
}
