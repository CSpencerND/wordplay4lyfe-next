import { useState } from "react"
import { ProductData } from "~/types"
import Swatch from "./Swatch"
import { X } from "react-feather"

export default function ProductPreview({ product }: { product: ProductData }) {
    const [image, setImage] = useState<JSX.Element>(product[1][0])

    return (
        <>
            <input type="checkbox" id={`${product[0]}Modal`} className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label
                        htmlFor={`${product[0]}Modal`}
                        className="btn-sm btn-circle btn absolute right-2 top-2"
                    >
                        <X />
                    </label>
                    <li className="card" key={image.key}>
                        <figure className="relative rounded-t-xl">
                            {image}
                            <h2 className="product-title">{product[0]}</h2>
                        </figure>
                        <div className="card-body rounded-b-xl px-4 py-2 backdrop-blur">
                            <p className="whitespace-nowrap pr-2 text-sm opacity-75">
                                from $27
                            </p>
                            <Swatch productImages={product[1]} setImage={setImage} />
                        </div>
                    </li>
                </div>
            </div>
        </>
    )
}
