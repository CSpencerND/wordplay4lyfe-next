import { ProductModal } from "./"
import { useCollection } from "~/utils"
import { ProductAttributes } from "~/types"
import { useState } from "react"
import Image from "next/image"
// import {yumyumtee1} from "~/static/collections/summer"

const defaultAttrs = {
    title: "",
    images: [],
    id: 0,
}

export const Collection = () => {
    const [image, setImage] = useState<JSX.Element>(<Image src="" alt="" />)
    const [modalContent, setContent] = useState<ProductAttributes>(defaultAttrs)

    const { collectionName, productPreviews } = useCollection(setContent, image, setImage)

    return (
        <>
            <h1>{collectionName}</h1>
            <ul className="std-grid-lg">{productPreviews}</ul>
            <ProductModal attributes={modalContent} image={image} setImage={setImage} />
        </>
    )
}
