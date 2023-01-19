import { StaticImageData } from "next/image"

export interface ImageData extends StaticImageData {
    alt?: string | undefined
    id?: number | undefined
    color?: string | undefined
}

export type ImageImport = [ImageData, string, string?]
