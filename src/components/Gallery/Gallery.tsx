import Masonry, { ResponsiveMasonry } from "react-responsive-masonry"
import Image from "next/image"
import imageImports from "~/static/gallery"

const images = imageImports.map((data, i) => {
    const { src, alt, width, height, blurDataURL } = data

    return (
        <Image
            src={src}
            alt={alt as string}
            key={i}
            width={width}
            height={height}
            blurDataURL={blurDataURL}
            placeholder="blur"
        />
    )
})

export const Gallery = () => {
    return (
        <ResponsiveMasonry columnsCountBreakPoints={{ 0: 1, 360: 2, 1024: 3 }}>
            <Masonry gutter="1rem">{images}</Masonry>
        </ResponsiveMasonry>
    )
}
