import Image from "next/image"
import { ImageData } from "~/types"
import { useEffect, useState } from "react"

interface Props {
    className?: string
    role?: string
    onDragStart?: React.DragEventHandler
}
/**
 * @param imageImports Array of ImageData
 * @param props Optional object of className, role, onDragStart
 *
 * @returns Array of NextJS <Image /> components
 */
export const useImageImports = (
    imageImports: ImageData[],
    props?: Props
): JSX.Element[] => {
    const [images, setImages] = useState<JSX.Element[]>([])
    useEffect(() => {
        const imageData = imageImports.map((data) => {
            const { src, alt, width, height, blurDataURL, id, color }: ImageData = data

            return (
                <Image
                    src={src}
                    alt={alt as string}
                    key={id}
                    width={width}
                    height={height}
                    blurDataURL={blurDataURL}
                    placeholder="blur"
                    /** Optional Params */
                    className={props?.className}
                    role={props?.role}
                    onDragStart={props?.onDragStart}
                    color={color}
                    priority
                />
            )
        })

        setImages(imageData)
    }, [imageImports]) // eslint-disable-line

    return images
}
