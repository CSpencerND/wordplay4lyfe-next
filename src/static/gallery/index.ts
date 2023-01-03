import { StaticImageData } from "next/image"
import adidasblazin from "./adidas-blazin.webp"
import petty from "./petty.webp"
import creativity from "./creativity.webp"
import responsibility from "./responsibility.webp"
import savage from "./savage.webp"
import city from "./city.webp"

type ImageImport = [StaticImageData, string]

const imageImports: ImageImport[] = [
    [adidasblazin, "adidasblazin"],
    [petty, "petty"],
    [creativity, "creativity"],
    [responsibility, "responsibility"],
    [savage, "savage"],
    [city, "city"],
]
export default imageImports
