import { StaticImageData } from "next/image"
import { ProductAttributes } from "./"

export interface Children {
    children: React.ReactNode | React.ReactNode[]
}

export interface CollectionProps {
    src: StaticImageData
    title: string
    href: string
}

export interface ProductProps {
    attributes: ProductAttributes
}
