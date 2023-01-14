import { useState, useEffect } from "react"
import groupBy from "lodash/groupBy"
import { ProductPreview } from "~/components/Products"

export function useProductImages(images: JSX.Element[]) {
    const [productImages, setProductImages] = useState<JSX.Element[]>([])

    useEffect(() => {
        const groupedImages = groupBy(
            images,
            (image: JSX.Element) => image.props.alt
        )
        const groupedImagesArray = Object.entries(groupedImages)

        const productPreviews = groupedImagesArray.map((product) => {
            return <ProductPreview product={product} key={product[1][0].key} />
        })

        setProductImages(productPreviews)
    }, [images])

    return productImages
}
