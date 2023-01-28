import { useEffect, useState } from "react"
import { ProductData } from "~/types"
import Swatch from "./Swatch"
import { X } from "react-feather"
import { sanitize } from "dompurify"

// query Description {
//   product(id: "gid://shopify/Product/7375343943874") {
//     description
//     options {
//       name
//       values
//       id
//     }
//     variants(first: 99) {
//       nodes {
//         price {
//           amount
//         }
//       }
//     }
//   }
// }

// import { ProductPrice, useShop } from "@shopify/hydrogen-react"
import storefrontQuery from "~/utils/shopify-client"
const gql = String.raw

export default function ProductModal({ product }: { product: ProductData }) {
    const [image, setImage] = useState<JSX.Element>(product[1][0])
    const [description, setDesc] = useState("")

    useEffect(() => {
        const getData = async () => {
            const productQuery = gql`
                query {
                    product(id: "gid://shopify/Product/${image.key}") {
                        descriptionHtml 
                        options {
                            name
                            values
                            id
                        }
                        variants(first: 99) {
                            nodes {
                                price {
                                    amount
                                }
                            }
                        }
                    }
                }
            `
            const { data } = await storefrontQuery(productQuery)
            const productDesc = data.product.descriptionHtml
            setDesc(productDesc)
        }
        getData()
    }, [])

    return (
        <>
            <input id={`${product[0]}Modal`} type="checkbox" className="modal-toggle" />
            <label
                htmlFor={`${product[0]}Modal`}
                className="modal cursor-pointer backdrop-blur"
                role="dialog"
            >
                <label htmlFor="" className="card modal-box relative max-h-[85vh] space-y-2">
                    <label
                        htmlFor={`${product[0]}Modal`}
                        className="btn-square btn-sm btn absolute right-2 top-2 z-50"
                    >
                        <X />
                    </label>

                    <h2 className="card-title py-2">{product[0]}</h2>

                    <figure className="relative pb-4 [&>*]:rounded-xl [&>*]:!shadow-none">
                        {image}
                    </figure>

                    <section className="px-2 py-0 flex items-center justify-between">
                        <Swatch productImages={product[1]} setImage={setImage} />
                        <p className="whitespace-nowrap pr-2 text-sm font-semibold">$27</p>
                    </section>

                    <Sizes productKey={image.key as string} />

                    <button className="btn btn-primary">add to cart</button>

                    <article
                        className="p-2"
                        dangerouslySetInnerHTML={{ __html: sanitize(description) }}
                    ></article>
                </label>
            </label>
        </>
    )
}

/** TODO:
 * Possibly use buttons only and have the button check the corresponding radio,
 * and button gets bg-primary when radio checked. Gosh golly idk.
 */

function Sizes({ productKey }: { productKey: string }) {
    const size = `${productKey}SIZE`
    return (
        <section className="p-1">
            <label htmlFor={size} className="grid grid-cols-5 grid-rows-2 gap-2 py-2">
                <button className="size-btn">
                    <span className="size-title">xs</span>
                    <input
                        className="size-select"
                        value="xs"
                        type="radio"
                        name={size}
                        // data-color={colors[0]}
                        // defaultChecked
                        onChange={() => {
                            console.log("checked!")
                        }}
                    />
                </button>
                <button className="size-btn">
                    <span className="size-title">sm</span>
                    <input
                        className="size-select"
                        value="sm"
                        type="radio"
                        name={size}
                        // data-color={colors[0]}
                        // defaultChecked
                        onChange={() => {
                            console.log("checked!")
                        }}
                    />
                </button>
                <button className="size-btn">
                    <span className="size-title">md</span>
                    <input
                        className="size-select"
                        value="md"
                        type="radio"
                        name={size}
                        // data-color={colors[0]}
                        // defaultChecked
                        onChange={() => {
                            console.log("checked!")
                        }}
                    />
                </button>
                <button className="size-btn">
                    <span className="size-title">lg</span>
                    <input
                        className="size-select"
                        value="lg"
                        type="radio"
                        name={size}
                        // data-color={colors[0]}
                        // defaultChecked
                        onChange={() => {
                            console.log("checked!")
                        }}
                    />
                </button>
                <button className="size-btn">
                    <span className="size-title">xl</span>
                    <input
                        className="size-select"
                        value="xl"
                        type="radio"
                        name={size}
                        // data-color={colors[0]}
                        // defaultChecked
                        onChange={() => {
                            console.log("checked!")
                        }}
                    />
                </button>
                <button className="size-btn">
                    <span className="size-title">2x</span>
                    <input
                        className="size-select"
                        value="2xl"
                        type="radio"
                        name={size}
                        // data-color={colors[0]}
                        // defaultChecked
                        onChange={() => {
                            console.log("checked!")
                        }}
                    />
                </button>
                <button className="size-btn">
                    <span className="size-title">3x</span>
                    <input
                        className="size-select"
                        value="3xl"
                        type="radio"
                        name={size}
                        // data-color={colors[0]}
                        // defaultChecked
                        onChange={() => {
                            console.log("checked!")
                        }}
                    />
                </button>
                <button className="size-btn">
                    <span className="size-title">4x</span>
                    <input
                        className="size-select"
                        value="4xl"
                        type="radio"
                        name={size}
                        // data-color={colors[0]}
                        // defaultChecked
                        onChange={() => {
                            console.log("checked!")
                        }}
                    />
                </button>
                <button className="size-btn">
                    <span className="size-title">5x</span>
                    <input
                        className="size-select"
                        value="5xl"
                        type="radio"
                        name={size}
                        // data-color={colors[0]}
                        // defaultChecked
                        onChange={() => {
                            console.log("checked!")
                        }}
                    />
                </button>
            </label>
        </section>
    )
}
