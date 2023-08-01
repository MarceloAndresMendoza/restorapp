import i18next from "i18next"
import { NavLink } from "react-router-dom"
import { getAsset } from "../../assets/assetList"

export const NotFound = () => {
  return (
    <>
      <div className="relative flex items-center justify-center py-16 bg-latte sm:py-24 lg:py-32 mb-16">
        <div className="absolute inset-0 bg-bright"
          aria-hidden="true"></div>
        <div className="relative px-4 sm:px-6 lg:px-8">
          <div className="mx-auto text-lg text-center max-w-4xl">
            <h1 className="text-4xl font-extrabold tracking-tight text-primary sm:text-4xl lg:text-5xl">
              <span className="block mb-6">{i18next.t('404-title')}</span>
              <span className="block text-3xl">{i18next.t('404-subtitle')}</span>
            </h1>
            <p className="mt-6 text-xl text-primary-50 max-w-3xl mb-6">
              {i18next.t('404-text')}
            </p>

            <div className="flex justify-center">
              <img className=" w-full max-w-md" src={getAsset('logo')} alt="" srcset="" />
            </div>

            <div className="flex justify-center drop-shadow rounded-full bg-bright text-primary px-4 py-2 -md hover:drop-shadow-md">
              <NavLink className="w-full" to="/"
                class="">
                {i18next.t('string-goto-home')}
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
