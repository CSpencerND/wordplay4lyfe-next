import { CollectionProps, ProductProps, ProductAttributes } from "~/types"
import Image from "next/image"
import Link from "next/link"
import { Swatch } from "./"

/** TODO: Need to pass product array to button to get colors */

interface PreviewProps extends ProductProps {
    setModal: React.Dispatch<React.SetStateAction<ProductAttributes>>
    image: JSX.Element
    setImage: React.Dispatch<React.SetStateAction<JSX.Element>>
}

export const ProductPreview = ({ attributes, setModal, image, setImage }: PreviewProps) => {
    const { title, images, id } = attributes

    const handleClick = () => setModal(attributes)

    return (
        <li className="card transition-all hover:scale-105" key={id}>
            <label className="cursor-pointer" htmlFor="productModal" onClick={handleClick}>
                <figure className="relative rounded-t-xl">
                    {images[0]}
                    <h2 className="product-title">{title}</h2>
                </figure>
            </label>
            <div className="card-body !space-y-0 rounded-b-xl px-4 py-2 backdrop-blur">
                <p className="whitespace-nowrap pr-2 text-sm opacity-75">from $27</p>
                <Swatch productImages={images} setImage={setImage} />
            </div>
        </li>
    )
}

export const CollectionPreview = ({ src, title, href }: CollectionProps) => {
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
