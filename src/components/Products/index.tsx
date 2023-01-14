import { Children } from "~/types"

export default function ProductGrid({ children }: Children) {
    return <ul className="layout-grid lg:grid-cols-4">{children}</ul>
}

export function CollectionGrid({ children }: Children) {
    return <ul className="layout-grid">{children}</ul>
}

export { CollectionPreview, ProductPreview } from "./ProductBase"
export { SummerProducts } from "./SummerProducts"
export { CreativeProducts } from "./CreativeProducts"
export { MindsetProducts } from "./MindsetProducts"
export { LifestyleProducts } from "./LifestyleProducts"
export { StaffProducts } from "./StaffProducts"
