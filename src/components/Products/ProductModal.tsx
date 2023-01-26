import { useState } from "react"
import { ProductData } from "~/types"
import Swatch from "./Swatch"
import { X } from "react-feather"
import {} from "@shopify/hydrogen-react"

export default function ProductPreview({ product }: { product: ProductData }) {
    const [image, setImage] = useState<JSX.Element>(product[1][0])

    return (
        <>
            <input id={`${product[0]}Modal`} type="checkbox" className="modal-toggle" />
            <label
                htmlFor={`${product[0]}Modal`}
                className="modal cursor-pointer backdrop-blur"
                role="dialog"
            >
                <label htmlFor="" className="card modal-box relative space-y-2">
                    <label
                        htmlFor={`${product[0]}Modal`}
                        className="btn-sm btn-square btn absolute right-2 top-2 z-50"
                    >
                        <X />
                    </label>
                    <h2 className="card-title py-2">{product[0]}</h2>
                    <figure className="relative pb-4 [&>*]:rounded-xl [&>*]:!shadow-none">
                        {image}
                    </figure>
                    <section className="card-body px-2 py-0">
                        <Swatch productImages={product[1]} setImage={setImage} />
                        <p className="whitespace-nowrap pr-2 text-sm opacity-75">$27</p>
                    </section>
                </label>
            </label>
        </>
    )
}
