import imageImports from "~/static/collections/summer"
import { useImageImports } from "~/utils/useImageImports"
import ProductGrid, {
    ProductsList,
} from "~/components/Products"

const SummerCollection = () => {
    const images: JSX.Element[] = useImageImports(imageImports, {
        className: "product-image",
    })

    // products.forEach((product, i) => {
    //     console.log(product)
    // })
    // const Title = products[0][0]
    // const Images = products[0][1]
    // console.log(Title, Images)

    // products.map((image, i) => {
    //     return <ProductPreview key={i}>{image}</ProductPreview>
    // })

    return (
        <main className="md:wrapper">
            <section className="pt-6">
                <ProductGrid>
                    <ProductsList images={images} />
                </ProductGrid>
            </section>
        </main>
    )
}

export default SummerCollection
