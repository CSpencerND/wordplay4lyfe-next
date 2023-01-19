import imageImports from "~/static/collections/mindset"
import { useImageImports, useProductImages } from "~/utils"
import { ProductGrid } from "./"

export const MindsetProducts = () => {
    const images: JSX.Element[] = useImageImports(imageImports, {
        className: "product-image",
    })

    const products: JSX.Element[] = useProductImages(images)

    return <ProductGrid>{products}</ProductGrid>
}
