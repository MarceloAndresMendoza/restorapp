import i18next from "i18next"
import { getAsset } from "../../assets/assetList"

export const Description = () => {
    return (
        <>
            <div className="p-20">
                <div className="text-center flex flex-col justify-center items-center">
                    <img className="max-w-[300px] mb-4" src={getAsset('mountain').image} alt={getAsset('mountain').alt} />
                    <h1 className="text-4xl font-black text-primary mb-8">{i18next.t('home-main-title')}</h1>
                    <h3 className="text-xl font-normal text-gray">{i18next.t('home-main-subtitle')}</h3>
                </div>
            </div>
        </>
    )
}
