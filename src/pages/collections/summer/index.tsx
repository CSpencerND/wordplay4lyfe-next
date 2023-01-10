import imageImports from "~/static/collections/summer"
import { useImageImports } from "~/utils/useImageImports"
import {
    ProductGrid,
    ProductPreview,
    ProductFocus,
} from "~/components/Products"

const SummerCollection = () => {
    const images = useImageImports(imageImports, { className: "product-image" })
    const products = images.map((image, i) => {
        return <ProductPreview key={i}>{image}</ProductPreview>
    })

    return (
        <main className="md:wrapper">
            <section className="pt-6">
                <ProductGrid>{products}</ProductGrid>
            </section>
        </main>
    )
}

export default SummerCollection
