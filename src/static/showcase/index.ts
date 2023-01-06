import { ImageImport, ImageDataX } from "~/types"
import cottoncandy from "./cotton-candy.webp"
import icecream from "./ice-cream.webp"
import milkshake from "./milkshake.webp"
import strawberrycake from "./strawberry-cake.webp"
import tastetherainbow from "./taste-the-rainbow.webp"
import yumyum from "./yum-yum.webp"

const imageImports: ImageImport[] = [
    [cottoncandy, "cottoncandy"],
    [icecream, "icecream"],
    [milkshake, "milkshake"],
    [strawberrycake, "strawberrycake"],
    [tastetherainbow, "tastetherainbow"],
    [yumyum, "yumyum"],
]

const imageImportsX: ImageDataX[] = []

imageImports.forEach((imageImport) => {
    const imageData = imageImport[0]
    const alt: string = imageImport[1]

    imageData.alt = alt
    imageImportsX.push(imageData)
})

export default imageImportsX
export { cottoncandy }
