import { Children } from "~/types"

export default function ProductGrid({ children }: Children) {
    return <ul className="std-grid-lg">{children}</ul>
}

export function CollectionGrid({ children }: Children) {
    return <ul className="std-grid-md">{children}</ul>
}

export { CollectionPreview, ProductPreview } from "./ProductBase"
export { SummerProducts } from "./SummerProducts"
export { CreativeProducts } from "./CreativeProducts"
export { MindsetProducts } from "./MindsetProducts"
export { LifestyleProducts } from "./LifestyleProducts"
export { StaffProducts } from "./StaffProducts"
