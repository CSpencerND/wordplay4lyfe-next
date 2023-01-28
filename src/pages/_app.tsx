import "../styles/globals.css"
import type { AppProps } from "next/app"
import { Layout } from "../components/Layout"
// import { ShopifyProvider } from "@shopify/hydrogen-react"

import "~/styles/index.css"

export default function App({ Component, pageProps }: AppProps) {
    return (
        <Layout>
            <Component {...pageProps} />
        </Layout>
    )
}
