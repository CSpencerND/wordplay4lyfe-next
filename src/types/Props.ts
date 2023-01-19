import { StaticImageData } from "next/image"
import { ProductImages } from "./"

export interface Children {
    children: React.ReactNode | React.ReactNode[]
}

export interface PreviewProps {
    src: StaticImageData
    title: string
    href: string
}

export interface ProductProps {
    product: ProductImages
}
