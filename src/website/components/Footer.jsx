import i18next from "i18next"
import { getAsset } from "../../assets/assetList"

export const Footer = () => {
  return (
    <>
      <div className="pt-20 pb-5 bg-[#FEFFFF] flex justify-center items-end">
        <div className="flex flex-row justify-center items-center">
          <img className="w-20" src={getAsset('restorapp').image} alt={getAsset('restorapp').alt} />
          <div>
            <div className="text-accent font-semibold text-sm">{i18next.t("footer-copyright-appname")}</div>
            <div className="text-gray text-xs">{i18next.t("footer-copyright-author")}</div>
            <div className="text-gray font-extralight text-xs">{i18next.t("footer-copyright-year")}</div>
          </div>
        </div>
      </div>
    </>
  )
}
