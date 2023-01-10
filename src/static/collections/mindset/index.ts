import { ImageImport, ImageData } from "~/types"
import facesofchangetee10 from "./faces-of-change-tee-10.webp"
import facesofchangetee11 from "./faces-of-change-tee-11.webp"
import gameonlocktee10 from "./game-on-lock-tee-10.webp"
import mensshortsleevetee10 from "./mens-short-sleeve-tee-10.webp"
import mensshortsleevetee11 from "./mens-short-sleeve-tee-11.webp"
import nocap10 from "./no-cap-10.webp"
import powerinnumberstee10 from "./power-in-numbers-tee-10.webp"
import saylesstee10 from "./say-less-tee-10.webp"
import saylesstee11 from "./say-less-tee-11.webp"
import saylesstee0 from "./say-less-tee0.webp"
import saylesstee1 from "./say-less-tee1.webp"
import saylesstee2 from "./say-less-tee2.webp"
import saylesstee3 from "./say-less-tee3.webp"
import saylesstee4 from "./say-less-tee4.webp"
import saylesstee5 from "./say-less-tee5.webp"
import unisexheavycottontee20 from "./unisex-heavy-cotton-tee-20.webp"
import wordplayheartbeattee10 from "./wordplay-heartbeat-tee-10.webp"

import { mindset } from "./mindset"

const initialImports: ImageImport[] = [
    [facesofchangetee10, "facesofchangetee10"],
    [facesofchangetee11, "facesofchangetee11"],
    [gameonlocktee10, "gameonlocktee10"],
    [mensshortsleevetee10, "mensshortsleevetee10"],
    [mensshortsleevetee11, "mensshortsleevetee11"],
    [nocap10, "nocap10"],
    [powerinnumberstee10, "powerinnumberstee10"],
    [saylesstee10, "saylesstee10"],
    [saylesstee11, "saylesstee11"],
    [saylesstee0, "saylesstee0"],
    [saylesstee1, "saylesstee1"],
    [saylesstee2, "saylesstee2"],
    [saylesstee3, "saylesstee3"],
    [saylesstee4, "saylesstee4"],
    [saylesstee5, "saylesstee5"],
    [unisexheavycottontee20, "unisexheavycottontee20"],
    [wordplayheartbeattee10, "wordplayheartbeattee10"],
]

const imageImports: ImageData[] = []

initialImports.forEach((imageImport) => {
    const imageData = imageImport[0]
    const alt: string = imageImport[1]

    imageData.alt = alt
    imageImports.push(imageData)
})

imageImports.forEach((imageImport) => {
    const alt = imageImport.alt?.slice(0, -1)
    mindset.find((product) => {
        if (alt === product.handle.replaceAll("-", "")) {
            imageImport.alt = product.title
            imageImport.id = product.id
        }
    })
})

export default imageImports
export { mensshortsleevetee11 }
