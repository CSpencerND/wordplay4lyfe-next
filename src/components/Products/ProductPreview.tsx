import Link from "next/link"
import Image, { StaticImageData } from "next/image"

export const CollectionPreview = ({ src }: { src: StaticImageData }) => {
    return (
        <li className="transition-all active:scale-95">
            <Link
                href={""}
                className="card image-full before:!opacity-60 before:transition-all hover:before:!opacity-50"
            >
                <figure>
                    <Image src={src} alt="Shirt" />
                </figure>
                <div className="card-body items-center justify-end pb-1">
                    <h2 className="card-title text-zinc-100 drop-shadow-[-1px_2px_4px_rgb(0,0,0)]">
                        Shirts!
                    </h2>
                </div>
            </Link>
        </li>
    )
}

export const ProductPreview = () => {
    return (
        <div className="card w-96">
            <figure>
                <Image src="https://placeimg.com/400/225/arch" alt="Shoes" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">
                    Shoes!
                    <div className="badge-secondary badge">NEW</div>
                </h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <div className="card-actions justify-end">
                    <div className="badge-outline badge">Fashion</div>
                    <div className="badge-outline badge">Products</div>
                </div>
            </div>
        </div>
    )
}
