import { ImageImport, ImageData } from "~/types"
import creativityiscontagious10 from "./creativity-is-contagious-10.webp"
import keepthemusicplaying10 from "./keep-the-music-playing-10.webp"
import popstartee10 from "./pop-star-tee-10.webp"
import popstartee11 from "./pop-star-tee-11.webp"
import unisexjerseyshortsleevetee10 from "./unisex-jersey-short-sleeve-tee-10.webp"
import unisexjerseyshortsleevetee0 from "./unisex-jersey-short-sleeve-tee0.webp"
import unisexjerseyshortsleevetee1 from "./unisex-jersey-short-sleeve-tee1.webp"
import womenssoftstyletee0 from "./womens-softstyle-tee0.webp"
import womenstheboyfriendtee0 from "./womens-the-boyfriend-tee0.webp"

import { creative } from "./creativeMinds"

const initialImports: ImageImport[] = [
    [creativityiscontagious10, "creativityiscontagious10"],
    [keepthemusicplaying10, "keepthemusicplaying10"],
    [popstartee10, "popstartee10"],
    [popstartee11, "popstartee11"],
    [unisexjerseyshortsleevetee10, "unisexjerseyshortsleevetee10"],
    [unisexjerseyshortsleevetee0, "unisexjerseyshortsleevetee0"],
    [unisexjerseyshortsleevetee1, "unisexjerseyshortsleevetee1"],
    [womenssoftstyletee0, "womenssoftstyletee0"],
    [womenstheboyfriendtee0, "womenstheboyfriendtee0"],
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
    creative.find((product) => {
        if (alt === product.handle.replaceAll("-", "")) {
            imageImport.alt = product.title
            imageImport.id = product.id
        }
    })
})

export default imageImports
export { unisexjerseyshortsleevetee10 }
