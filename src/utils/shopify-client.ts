import { createStorefrontClient } from "@shopify/hydrogen-react"

const client = createStorefrontClient({
    publicStorefrontToken: "06479233182de39ca69e466f1837adda",
    storeDomain: "wordplay4lyfe",
    storefrontApiVersion: "2022-10",
})

export default async function storefrontQuery(query: string, variables = {}) {
    const response = await fetch(getStorefrontApiURL(), {
        method: "POST",
        headers: getPublicTokenHeaders(),
        body: JSON.stringify({ query, variables }),
    })

    /*
     * TODO: Error handling here before the return
     */

    return await response.json()
}

export const getStorefrontApiURL = client.getStorefrontApiUrl
export const getPublicTokenHeaders = client.getPublicTokenHeaders
export const getShopifyDomain = client.getShopifyDomain
