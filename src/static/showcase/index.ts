import { StaticImageData } from "next/image"
import cottoncandy from "./cotton-candy.webp"
import icecream from "./ice-cream.webp"
import milkshake from "./milkshake.webp"
import strawberrycake from "./strawberry-cake.webp"
import tastetherainbow from "./taste-the-rainbow.webp"
import yumyum from "./yum-yum.webp"

type ImageImport = [StaticImageData, string]

const imageImports: ImageImport[] = [
    [cottoncandy, "cottoncandy"],
    [icecream, "icecream"],
    [milkshake, "milkshake"],
    [strawberrycake, "strawberrycake"],
    [tastetherainbow, "tastetherainbow"],
    [yumyum, "yumyum"],
]
export default imageImports
