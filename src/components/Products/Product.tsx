import { useState } from "react"
import { ProductImages, PreviewProps } from "~/types"
import Image from "next/image"
import Link from "next/link"

interface ProductProps {
    product: ProductImages
}

export const ProductPreview = ({ product }: ProductProps) => {
    const [image, setImage] = useState<JSX.Element>(product[1][0])
    return (
        <li className="card" key={product[1][0].key}>
            <figure>{image}</figure>
            <div className="card-body p-4">
                <h2 className="card-title !text-xs sm:!text-base">
                    {product[0]}
                </h2>
            </div>
        </li>
    )
}

export const CollectionPreview = ({ src, title, href }: PreviewProps) => {
    return (
        <li className="transition-all active:scale-95">
            <Link href={href} className="card image-full before:!opacity-0">
                <figure>
                    <Image src={src} alt="Category Preview" className="" />
                </figure>
                <div className="card-body items-center justify-end pb-2 md:pb-4">
                    <h2 className="card-title !text-sm text-zinc-100 drop-shadow-[-1px_2px_4px_rgb(0,0,0)] md:!text-xl">
                        {title}
                    </h2>
                </div>
            </Link>
        </li>
    )
}
