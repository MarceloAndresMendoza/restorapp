import { Header } from "../websiteComponents"
import { ProductsShowcase } from "../components/ProductsShowcase";
import { Description } from "../components/Description";
import i18next from "i18next";

export const Index = () => {
  return (
    <>
        <Header title={i18next.t('brand-main-title')}/>
        <Description />
        <ProductsShowcase />
    </>
  )
}
