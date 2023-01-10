import { ImageImport, ImageData } from "~/types"
import icecream from "./ice-cream.webp"
import milkshake from "./milkshake.webp"
import strawberrycake from "./strawberry-cake.webp"
import tastetherainbow from "./taste-the-rainbow.webp"
import popit from "./pop-it-tee0.webp"
import queen from "./queen-drip0.webp"
import whatever from "./its-whatever-tee0.webp"

const initialImports: ImageImport[] = [
    [whatever, "whatever"],
    [queen, "queen"],
    [milkshake, "milkshake"],
    [icecream, "icecream"],
    [strawberrycake, "strawberrycake"],
    [tastetherainbow, "tastetherainbow"],
    [popit, "popit"],
]

const imageImports: ImageData[] = []

initialImports.forEach((imageImport) => {
    const imageData = imageImport[0]
    const alt: string = imageImport[1]

    imageData.alt = alt
    imageImports.push(imageData)
})

export default imageImports
