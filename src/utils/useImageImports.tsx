import Image from "next/image"
import { ImageImport } from "~/types"
import { useEffect, useState } from "react"

export const useImageImports = (
    imageImports: ImageImport[],
    props: {
        className?: string
        role?: string
        onDragStart?: React.DragEventHandler
    },
): React.ReactNode[] => {
    const [images, setImages] = useState<React.ReactNode[]>([])
    useEffect(() => {
        const imageData = imageImports.map((data, i) => {
            const { src, width, height, blurDataURL } = data[0]
            const alt = data[1]

            return (
                <Image
                    src={src}
                    alt={alt}
                    key={i}
                    width={width}
                    height={height}
                    blurDataURL={blurDataURL}
                    placeholder="blur"
                    /** Optional Params */
                    className={props.className}
                    role={props.role}
                    onDragStart={props.onDragStart}
                />
            )
        })

        setImages(imageData)
    }, [])

    return images
}
