import { type NextPage } from "next"
import { CollectionPreview } from "~/components/Products"

import { yumyumtee1 } from "~/static/collections/summer"
import { tvpopculturetee10 } from "~/static/collections/lifestyle"
import { mensshortsleevetee11 } from "~/static/collections/mindset"
import { unisexjerseyshortsleevetee10 } from "~/static/collections/creative"
import { facesofchangetee10 } from "~/static/collections/staff"

const Collections: NextPage = () => {
    return (
        <section className="pt-6">
            <ul className="std-grid-md">
                <CollectionPreview
                    src={yumyumtee1}
                    title="Summer '22"
                    href="/collections/summer-22"
                />
                <CollectionPreview
                    src={tvpopculturetee10}
                    title="Lifestyle"
                    href="/collections/lifestyle"
                />
                <CollectionPreview
                    src={mensshortsleevetee11}
                    title="Mindset"
                    href="/collections/mindset"
                />
                <CollectionPreview
                    src={unisexjerseyshortsleevetee10}
                    title="Creative"
                    href="/collections/creative-minds"
                />
                <CollectionPreview
                    src={facesofchangetee10}
                    title="Staff Picks"
                    href="/collections/staff-picks"
                />
            </ul>
        </section>
    )
}

export default Collections
