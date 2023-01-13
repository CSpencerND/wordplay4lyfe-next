import { useEffect, useState } from "react"
import groupBy from "lodash/groupBy"
import { ProductImages } from "~/types"

interface ProductProps {
    product: ProductImages
}

export const ProductPreview = ({ product }: ProductProps) => {
    const [image, setImage] = useState<JSX.Element>(product[1][0])
    console.log(product[0])
    return (
        <li className="card" key={product[1][0].key}>
            <figure>{image}</figure>
            <div className="card-body p-4">
                <h2 className="card-title !text-xs !sm:text-base">
                    {product[0]}
                </h2>
            </div>
        </li>
    )
}

interface ProductImageProps {
    images: JSX.Element[]
}

type LiArray = React.ReactElement<HTMLLIElement>[]

export const ProductsList = ({ images }: ProductImageProps): LiArray => {
    const productImages = useProducts(images)
    const products = productImages.map((product) => {
        return <ProductPreview product={product} />
    })
    return products
}

function useProducts(images: JSX.Element[]) {
    const [groupedImages, setGroupedImages] = useState<object>({})
    useEffect(() => {
        const groupedImages = groupBy(
            images,
            (image: JSX.Element) => image.props.alt
        )
        setGroupedImages(groupedImages)
    }, [])
    return Object.entries(groupedImages)
}
