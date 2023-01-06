import { StaticImageData } from "next/image"
interface ImageDataX extends StaticImageData {
    alt?: string | undefined
}

type ImageImport = [ImageDataX, string]
export default ImageImport
export { type ImageDataX }
