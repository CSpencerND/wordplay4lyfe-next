import { ImageImport, ImageDataX } from "~/types"
import adidasblazin from "./adidas-blazin.webp"
import city from "./city.webp"
import creativity from "./creativity.webp"
import petty from "./petty.webp"
import responsibility from "./responsibility.webp"
import savage from "./savage.webp"

const imageImports: ImageImport[] = [
    [adidasblazin, "adidasblazin"],
    [city, "city"],
    [creativity, "creativity"],
    [petty, "petty"],
    [responsibility, "responsibility"],
    [savage, "savage"],
]

const imageImportsX: ImageDataX[] = []

imageImports.forEach((imageImport) => {
    const imageData = imageImport[0]
    const alt: string = imageImport[1]

    imageData.alt = alt
    imageImportsX.push(imageData)
})

export default imageImportsX
