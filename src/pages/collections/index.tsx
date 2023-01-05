import { type NextPage } from "next"
import { ProductGrid, CollectionPreview } from "~/components/Products"
import { cottoncandy } from "~/static/showcase"

const Collections: NextPage = () => {
    return (
        <section className="pt-6">
            <ProductGrid>
                <CollectionPreview src={cottoncandy} />
                <CollectionPreview src={cottoncandy} />
                <CollectionPreview src={cottoncandy} />
                <CollectionPreview src={cottoncandy} />
                <CollectionPreview src={cottoncandy} />
                <CollectionPreview src={cottoncandy} />
            </ProductGrid>
        </section>
    )
}

export default Collections
