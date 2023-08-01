import i18next from "i18next";
import { Header } from "../websiteComponents"
import { getAsset } from "../../assets/assetList";
import { ProductsShowcase } from "../components/ProductsShowcase";

export const Index = () => {
  return (
    <>
        <Header/>
        <ProductsShowcase />
    </>
  )
}
