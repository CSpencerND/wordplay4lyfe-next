import { createContext, useState, useEffect } from "react"
import { Children, ImageData, ImageImport, PreviewProps, ProductData } from "~/types"
import { useImageImports, useProductImages } from "~/utils"

export type ProductContextType = {
    modalContent: JSX.Element
    setModalContent: React.Dispatch<React.SetStateAction<JSX.Element>>
}

const ProductContext = createContext({} as ProductContextType)

export const ProductProvider = ({ children }: Children) => {
    const [modalContent, setModalContent] = useState<JSX.Element>(<h1>Modal Content</h1>)

    return (
        <ProductContext.Provider
            value={{
                modalContent,
                setModalContent,
            }}
        >
            {children}
        </ProductContext.Provider>
    )
}

export default ProductContext
