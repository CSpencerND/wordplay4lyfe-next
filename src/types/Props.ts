import { StaticImageData } from "next/image"

export interface Children {
    children: React.ReactNode | React.ReactNode[]
}

export interface PreviewProps {
    src: StaticImageData
    title: string
    href: string
}
