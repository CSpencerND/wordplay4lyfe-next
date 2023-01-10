import { ImageImport, ImageData } from "~/types"
import cottoncandytee0 from "./cotton-candy-tee0.webp"
import cottoncandytee1 from "./cotton-candy-tee1.webp"
import icecreamtee0 from "./ice-cream-tee0.webp"
import icecreamtee1 from "./ice-cream-tee1.webp"
import itswhatevertee0 from "./its-whatever-tee0.webp"
import milkshaketee0 from "./milkshake-tee0.webp"
import milkshaketee1 from "./milkshake-tee1.webp"
import milkshaketee2 from "./milkshake-tee2.webp"
import popittee0 from "./pop-it-tee0.webp"
import popittee1 from "./pop-it-tee1.webp"
import queendrip0 from "./queen-drip0.webp"
import queendrip1 from "./queen-drip1.webp"
import saylesstee10 from "./say-less-tee-10.webp"
import saylesstee11 from "./say-less-tee-11.webp"
import strawberrycaketee0 from "./strawberry-cake-tee0.webp"
import strawberrycaketee1 from "./strawberry-cake-tee1.webp"
import tastetherainbowtee0 from "./taste-the-rainbow-tee0.webp"
import tastetherainbowtee1 from "./taste-the-rainbow-tee1.webp"
import yumyumtee0 from "./yum-yum-tee0.webp"
import yumyumtee1 from "./yum-yum-tee1.webp"

import { summer } from "./summer22"

const initialImports: ImageImport[] = [
    [cottoncandytee0, "cottoncandytee0"],
    [cottoncandytee1, "cottoncandytee1"],
    [icecreamtee0, "icecreamtee0"],
    [icecreamtee1, "icecreamtee1"],
    [itswhatevertee0, "itswhatevertee0"],
    [milkshaketee0, "milkshaketee0"],
    [milkshaketee1, "milkshaketee1"],
    [milkshaketee2, "milkshaketee2"],
    [popittee0, "popittee0"],
    [popittee1, "popittee1"],
    [queendrip0, "queendrip0"],
    [queendrip1, "queendrip1"],
    [saylesstee10, "saylesstee10"],
    [saylesstee11, "saylesstee11"],
    [strawberrycaketee0, "strawberrycaketee0"],
    [strawberrycaketee1, "strawberrycaketee1"],
    [tastetherainbowtee0, "tastetherainbowtee0"],
    [tastetherainbowtee1, "tastetherainbowtee1"],
    [yumyumtee0, "yumyumtee0"],
    [yumyumtee1, "yumyumtee1"],
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
    summer.find((product) => {
        if (alt === product.handle.replaceAll("-", "")) {
            imageImport.alt = product.title
            imageImport.id = product.id
        }
    })
})

export default imageImports
export { yumyumtee1 }
