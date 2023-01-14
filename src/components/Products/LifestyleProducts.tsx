import imageImports from "~/static/collections/lifestyle"
import { useImageImports, useProductImages } from "~/utils"
import ProductGrid from "./"

export const LifestyleProducts = () => {
    const images: JSX.Element[] = useImageImports(imageImports, {
        className: "product-image",
    })

    const products: JSX.Element[] = useProductImages(images)

    return <ProductGrid>{products}</ProductGrid>
}
