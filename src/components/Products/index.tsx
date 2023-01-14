import { Children } from "~/types"

export default function ProductGrid({ children }: Children) {
    return <ul className="layout-grid">{children}</ul>
}

export { CollectionPreview, ProductPreview } from "./Product"
