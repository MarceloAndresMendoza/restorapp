import i18next from 'i18next';
import { getAsset } from '../../assets/assetList';

export const ProductsShowcase = () => {

    const productShocaseList = [];
    for (let n = 1; n <= 4; n++) {
        productShocaseList.push({
            title: i18next.t("food-showcase-product-" + n + "-title"),
            text: i18next.t("food-showcase-product-" + n + "-text"),
            image: getAsset(`productShowcase${n}`).image,
            alt: getAsset(`productShowcase${n}`).alt,
        })
    }

    return (
        <>
            <div className="bg-cover " style={{ backgroundImage: `url(${getAsset("cherryTree").image})` }}>
                <div className=" px-10 py-5 sm:pt-10 flex sm:flex-row flex-col gap-5 bg-white/80 backdrop-blur-sm flex-wrap justify-center">
                    {
                        productShocaseList.map(product => (
                            // One Product group
                            <div className="flex flex-row sm:flex-col gap-4 items-center sm:w-60" key={product.alt}>

                                {/* Image */}
                                <img className="sm:w-60 w-[120px] rounded-sm shadow-md" src={product.image} alt={product.id} />
                                {/* Text */}
                                <div className=" ">
                                    {/* Title group */}
                                    <div className="flex flex-row items-center gap-1 mt-2 text-accent">
                                        {/* Icon */}
                                        <i className="fa-solid fa-utensils"></i>
                                        {/* Title */}
                                        <div>{product.title}</div>
                                    </div>
                                    {/* Text */}
                                    <div className="text-sm sm:text-lg mt-2">{product.text}</div>
                                </div>


                            </div>
                        )
                        )}
                </div>
            </div>
        </>
    )
}