import { useEffect, useState } from "react"
import { PreviewProps, ProductData, Children } from "~/types"
import Image from "next/image"
import Link from "next/link"

/** TODO: Need to pass product array to button to get colors */

export const ProductPreview = ({ product }: { product: ProductData }) => {
    const [image, setImage] = useState<JSX.Element>(<h2>Loading Image ...</h2>)
    const [imagesLength, setLength] = useState<number>(0)

    useEffect(() => {
        const initialImage = product[1][0]
        const numberOfImages = product[1].length

        setImage(initialImage)
        setLength(numberOfImages)
    }, [])

    return (
        <li className="card" key={image.key}>
            <figure className="">{image}</figure>
            <div className="card-body !space-y-0 rounded-b-xl bg-base-300/50 px-4 py-2 backdrop-blur">
                <h2 className="overflow-hidden text-ellipsis whitespace-nowrap text-sm font-bold">
                    {product[0]}
                </h2>
                <div className="flex justify-between">
                    <p className="-translate-y-0.5 text-sm opacity-75">$27</p>
                    {Buttons(imagesLength, product[1])}
                </div>
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

export const CollectionGrid = ({ children }: Children) => {
    return <ul className="std-grid-md">{children}</ul>
}

function Buttons(imagesLength: number, productImages: JSX.Element[]): JSX.Element | null {
    const colors = productImages.map((image) => {
        return image.props.color
    })

    const swatch = productImages[0].key as string

    switch (imagesLength) {
        case 1:
            return (
                <span className="grid grid-cols-3 gap-1">
                    <input type="radio" name={swatch} data-color={colors[0]} />
                </span>
            )

        case 2:
            return (
                <span className="grid grid-cols-3 gap-1">
                    <input type="radio" name={swatch} data-color={colors[0]} />
                    <input type="radio" name={swatch} data-color={colors[1]} />
                </span>
            )

        case 3:
            return (
                <span className="grid grid-cols-3 gap-1">
                    <input type="radio" name={swatch} data-color={colors[0]} />
                    <input type="radio" name={swatch} data-color={colors[1]} />
                    <input type="radio" name={swatch} data-color={colors[2]} />
                </span>
            )

        default:
            return null
    }
}
