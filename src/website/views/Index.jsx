import { Header } from "../websiteComponents"
import { ProductsShowcase } from "../components/ProductsShowcase";
import { Description } from "../components/Description";

export const Index = () => {
  return (
    <>
        <Header/>
        <Description />
        <ProductsShowcase />
    </>
  )
}
