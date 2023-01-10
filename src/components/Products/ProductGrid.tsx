import Link from "next/link"
import Image, { StaticImageData } from "next/image"

interface PreviewProps {
    src: StaticImageData
    title: string
    href: string
}

interface Children {
    children: React.ReactNode | React.ReactNode[]
}

export const ProductGrid = ({ children }: Children) => {
    return <ul className="layout-grid">{children}</ul>
}

export const CollectionPreview = ({ src, title, href }: PreviewProps) => {
    return (
        <li className="transition-all active:scale-95">
            <Link
                href={href}
                className="card image-full before:!opacity-40 before:transition-all hover:before:!opacity-25"
            >
                <figure>
                    <Image src={src} alt="Category Preview" />
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

export const ProductPreview = ({ children }: Children) => {
    return (
        <li className="card">
            <figure>{children}</figure>
            <div className="card-body">
                <h2 className="card-title">
                    Shirts!
                    <div className="badge-secondary badge">NEW</div>
                </h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <div className="card-actions justify-end">
                    <div className="badge-outline badge">Fashion</div>
                    <div className="badge-outline badge">Products</div>
                </div>
            </div>
        </li>
    )
}
