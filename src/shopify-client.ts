import { createStorefrontClient } from "@shopify/hydrogen-react"

const client = createStorefrontClient({
    publicStorefrontToken: "06479233182de39ca69e466f1837adda",
    storeDomain: "wordplay4lyfe.myshopify.com",
    storefrontApiVersion: "2022-10",
})

export const getStorefrontApiURL = client.getStorefrontApiUrl
export const getPublicTokenHeaders = client.getPublicTokenHeaders
