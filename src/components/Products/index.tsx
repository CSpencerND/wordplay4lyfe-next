import { Children } from "~/types"

export default function ProductGrid({ children }: Children) {
    return <ul className="std-grid-lg max-[1920px]:max-w-screen-lg mx-auto">{children}</ul>
}

export function CollectionGrid({ children }: Children) {
    return <ul className="std-grid-md max-[1920px]:max-w-screen-lg mx-auto">{children}</ul>
}

export { CollectionPreview, ProductPreview } from "./ProductBase"
export { SummerProducts } from "./SummerProducts"
export { CreativeProducts } from "./CreativeProducts"
export { MindsetProducts } from "./MindsetProducts"
export { LifestyleProducts } from "./LifestyleProducts"
export { StaffProducts } from "./StaffProducts"
