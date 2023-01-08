import { StaticImageData } from "next/image"
interface ImageData extends StaticImageData {
    alt?: string | undefined
}

type ImageImport = [ImageData, string]
export default ImageImport
export { type ImageData }
