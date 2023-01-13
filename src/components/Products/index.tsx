import Image from "next/image"
import Link from "next/link"
import { Children, PreviewProps } from "~/types"

interface LiChildren {
    children: React.ReactElement<HTMLLIElement>[]
}
export default function ProductGrid({ children }: LiChildren) {
    return <ul className="layout-grid">{children}</ul>
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

export { ProductsList, ProductPreview } from "./Product"
