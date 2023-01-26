import {
    summerImports,
    mindsetImports,
    lifestyleImports,
    creativeImports,
    staffImports,
} from "~/static/collections"

import groupBy from "lodash/groupBy"
import { ProductPreview } from "~/components/Products"
import { useImageImports } from "~/utils"
import { ImageData, ProductAttributes } from "~/types"
import { useEffect, useState } from "react"
import { useRouter } from "next/router"

interface CollectionData {
    imageData: ImageData[]
    collectionName: string
}

type SetModalAttributes = React.Dispatch<React.SetStateAction<ProductAttributes>>

const defaultCollectionData: CollectionData = {
    imageData: summerImports,
    collectionName: "Summer '22",
}

export function useCollection(
    setModalAttributes: SetModalAttributes,
    image: JSX.Element,
    setImage: React.Dispatch<React.SetStateAction<JSX.Element>>
) {
    const [collectionData, setData] = useState<CollectionData>(defaultCollectionData)
    const [productPreviews, setProductPreviews] = useState<JSX.Element[]>([])

    const { collection } = useRouter().query

    useEffect(() => {
        switch (collection) {
            case "lifestyle":
                setData({ imageData: lifestyleImports, collectionName: "Lifestyle" })
                break

            case "staff-picks":
                setData({ imageData: staffImports, collectionName: "Staff Picks" })
                break

            case "mindset":
                setData({ imageData: mindsetImports, collectionName: "Mindset" })
                break

            case "creative-minds":
                setData({ imageData: creativeImports, collectionName: "Creative Minds" })
                break

            default:
                setData({ imageData: summerImports, collectionName: "Summer '22" })
                break
        }
    }, [collection])

    const { imageData, collectionName } = collectionData

    /** Transform imageData into Image components */
    const images = useImageImports(imageData, {
        className: "product-image",
    })

    useEffect(() => {
        const groupedImages = groupBy(images, (image: JSX.Element) =>
            image.props.alt.replace(/tee/gi, "")
        )
        const groupedImagesArray = Object.entries(groupedImages)

        const products = groupedImagesArray.map((product) => {
            const productAttributes = {
                initialImage: product[1][0],
                title: product[0],
                images: product[1],
                id: product[1][0].key,
            }
            return (
                <ProductPreview
                    attributes={productAttributes}
                    setModal={setModalAttributes}
                    image={image}
                    setImage={setImage}
                />
            )
        })

        setProductPreviews(products)
    }, [images])

    return { collectionName, productPreviews }
}
