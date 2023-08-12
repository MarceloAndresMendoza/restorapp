import { getAsset } from "../../assets/assetList";
import { Header } from "../websiteComponents";
import i18next from 'i18next';

export const Menu = () => {
  const sweetsMenu = [];
  const drinksMenu = [];

  for (let n = 1; n <= 4; n++) {
    const sweetItem = {
      title: i18next.t("food-menu-sweet-" + n + "-title"),
      description: i18next.t("food-menu-sweet-" + n + "-description"),
      price: i18next.t("food-menu-sweet-" + n + "-price"),
    };
    sweetsMenu.push(sweetItem);

    const drinkItem = {
      title: i18next.t("food-menu-drink-" + n + "-title"),
      description: i18next.t("food-menu-drink-" + n + "-description"),
      price: i18next.t("food-menu-drink-" + n + "-price"),
    };
    drinksMenu.push(drinkItem);
  }

  return (
    <>
      <Header small='true' title={i18next.t('brand-main-title')}/>

      <div className="container mx-auto p-20">
        <div className="flex flex-col sm:flex-row w-full justify-between items-end sm:items-start sm:gap-10">
          <h1 className="text-6xl font-semibold mb-4 text-accent whitespace-nowrap">{i18next.t("food-menu-title")}</h1>
          <p className="text-sm text-gray-400 mb-8 max-w-[500px] text-right">{i18next.t("food-menu-description")}</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* <!-- Menú de Dulces --> */}
          <div className="bg-white rounded-lg shadow">
            <div className="mb-4">
              <img src={getAsset('menuSweetsHeader').image} alt={getAsset('menuSweetsHeader').alt} className="w-full h-48 object-cover mb-2 rounded-t-lg" />
              <div className="p-4">
                <h2 className="text-xl font-bold mb-4">{i18next.t("food-menu-sweets-title")}</h2>
                {sweetsMenu.map((item, index) => (
                  <div className="mb-4" key={index}>
                    <h3 className="text-lg font-semibold text-accent">{index + 1}. {item.title}</h3>
                    <p>{item.description}</p>
                    <p className="font-semibold">{item.price}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* <!-- Bebidas --> */}
          <div className="bg-white rounded-lg shadow">
            <img src={getAsset('menuDrinksHeader').image} alt={getAsset('menuDrinksHeader').alt} className="w-full h-48 object-cover mb-2 rounded-t-lg" />
            <div className="mb-4">
              <div className="p-4">
                <h2 className="text-xl font-bold mb-4">{i18next.t("food-menu-drinks-title")}</h2>
                {drinksMenu.map((item, index) => (
                  <div className="mb-4" key={index}>
                    <h3 className="text-lg font-semibold text-accent">{index + 1}. {item.title}</h3>
                    <p>{item.description}</p>
                    <p className="font-semibold">{item.price}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
