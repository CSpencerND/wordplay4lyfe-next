import imageImports from "~/static/collections/summer"
import { useImageImports, useProductImages } from "~/utils"
import { ProductGrid } from "./"

export const SummerProducts = () => {
    const images: JSX.Element[] = useImageImports(imageImports, {
        className: "product-image",
    })

    const products: JSX.Element[] = useProductImages(images)

    return <ProductGrid>{products}</ProductGrid>
}
