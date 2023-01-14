import imageImports from "~/static/collections/summer"
import { useImageImports } from "~/utils/useImageImports"
import ProductGrid from "~/components/Products"
import { useProductImages } from "~/utils"

const SummerCollection = () => {
    const images: JSX.Element[] = useImageImports(imageImports, {
        className: "product-image",
    })

    const products: JSX.Element[] = useProductImages(images)

    return (
        <main className="md:wrapper">
            <section className="pt-6">
                <ProductGrid>{products}</ProductGrid>
            </section>
        </main>
    )
}

export default SummerCollection
