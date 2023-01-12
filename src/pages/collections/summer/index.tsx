import imageImports from "~/static/collections/summer"
import { useImageImports } from "~/utils/useImageImports"
import ProductGrid from "~/components/Products"
import { ProductPreview, ProductFocus } from "~/components/Products"
import groupBy from "lodash/groupBy"
import { useEffect, useState } from "react"

const SummerCollection = () => {
    const images = useImageImports(imageImports, { className: "product-image" })
    const products = useProducts(images)
    // products.map((image, i) => {
    //     return <ProductPreview key={i}>{image}</ProductPreview>
    // })

    return (
        <main className="md:wrapper">
            <section className="pt-6">
                {/* <ProductGrid>{products}</ProductGrid> */}
            </section>
        </main>
    )
}

export default SummerCollection

function useProducts(images: React.ReactElement[]) {
    const [groupedImages, setGroupedImages] = useState<object>({})
    useEffect(() => {
        const groupedImages = groupBy(
            images,
            (image: React.ReactElement) => image.props.alt
        )
        setGroupedImages(groupedImages)
    }, [])
    console.log(Object.entries(groupedImages))
    return groupedImages
}
