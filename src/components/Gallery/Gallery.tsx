import Masonry, { ResponsiveMasonry } from "react-responsive-masonry"
import Image from "next/image"
import imageImports from "~/static/gallery"

const images = imageImports.map((data, i) => {
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
