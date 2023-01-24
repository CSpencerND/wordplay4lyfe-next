import { useState } from "react"
import { PreviewProps, ProductData, Children } from "~/types"
import Image from "next/image"
import Link from "next/link"
import Swatch from "./Swatch"

/** TODO: Need to pass product array to button to get colors */

export const ProductPreview = ({ product }: { product: ProductData }) => {
    const [image, setImage] = useState<JSX.Element>(product[1][0])

    return (
        <li className="card" key={image.key}>
            <label htmlFor="productModal">
                <figure className="relative rounded-t-xl">
                    {image}
                    <h2 className="product-title">
                        {product[0]}
                    </h2>
                </figure>
            </label>
            <div className="card-body !space-y-0 rounded-b-xl px-4 py-2 backdrop-blur">
                <p className="whitespace-nowrap pr-2 text-sm opacity-75">from $27</p>
                <Swatch productImages={product[1]} setImage={setImage} />
            </div>
        </li>
    )
}

export const CollectionPreview = ({ src, title, href }: PreviewProps) => {
    return (
        <li className="transition-all active:scale-95">
            <Link href={href} className="card">
                <figure className="rounded-xl">
                    <Image src={src} alt="Category Preview" className="" />
                </figure>
                <div className="card-body absolute bottom-0 w-full rounded-b-xl bg-base-300/50 px-4 py-2 backdrop-blur">
                    <h2 className="py-2 text-center text-sm backdrop-blur md:!text-base lg:!text-lg">
                        {title}
                    </h2>
                </div>
            </Link>
        </li>
    )
}

export const ProductGrid = ({ children }: Children) => {
    return <ul className="std-grid-lg">{children}</ul>
}
