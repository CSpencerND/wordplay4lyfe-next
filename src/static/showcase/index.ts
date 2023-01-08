import { ImageImport, ImageData } from "~/types"
import cottoncandy from "./cotton-candy.webp"
import icecream from "./ice-cream.webp"
import milkshake from "./milkshake.webp"
import strawberrycake from "./strawberry-cake.webp"
import tastetherainbow from "./taste-the-rainbow.webp"
import yumyum from "./yum-yum.webp"

const initialImports: ImageImport[] = [
    [cottoncandy, "cottoncandy"],
    [icecream, "icecream"],
    [milkshake, "milkshake"],
    [strawberrycake, "strawberrycake"],
    [tastetherainbow, "tastetherainbow"],
    [yumyum, "yumyum"],
]

const imageImports: ImageData[] = []

initialImports.forEach((imageImport) => {
    const imageData = imageImport[0]
    const alt: string = imageImport[1]

    imageData.alt = alt
    imageImports.push(imageData)
})

export default imageImports
export { cottoncandy }
