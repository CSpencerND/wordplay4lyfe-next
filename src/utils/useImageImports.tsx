import Image from "next/image"
import { ImageData } from "~/types"
import { useEffect, useState } from "react"

export const useImageImports = (
    imageImports: ImageData[],
    props?: {
        className?: string
        role?: string
        onDragStart?: React.DragEventHandler
    }
): React.ReactNode[] => {
    const [images, setImages] = useState<React.ReactNode[]>([])
    useEffect(() => {
        const imageData = imageImports.map((data, i) => {
            const { src, alt, width, height, blurDataURL }: ImageData = data

            return (
                <Image
                    src={src}
                    alt={alt as string}
                    key={i}
                    width={width}
                    height={height}
                    blurDataURL={blurDataURL}
                    placeholder="blur"
                    /** Optional Params */
                    className={props?.className}
                    role={props?.role}
                    onDragStart={props?.onDragStart}
                />
            )
        })

        setImages(imageData)
    }, []) // eslint-disable-line

    return images
}
