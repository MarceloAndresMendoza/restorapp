import i18next from 'i18next';
import { getAsset } from '../../assets/assetList';

export const Header = () => {
    return (
        <>
            <div style={{ backgroundImage: `url(${getAsset("photoFront")})` }} className="flex flex-row items-center shadow-inner w-full bg-cover h-80">
                <div className="flex items-center bg-gradient-to-r from-[#ffffffcc] from-30% to-transparent w-full h-full">
                    <img className="w-24 md:w-32" src={getAsset('logo')} alt="" />
                    <div className="flex flex-col justify-start">
                        <h1 className="text-4xl sm:text-6xl mb-3 font-semibold tracking-tight text-primary">{i18next.t('brand-main-title')}</h1>
                        <h2 className="text-xs sm:text-lg tracking-tight text-primary">{i18next.t('brand-main-subtitle')}</h2>
                    </div>
                </div>
            </div>
        </>
    )
}