import Image from "next/image"
import Link from "next/link"
import { useEffect, useState } from "react"
// import { ChevronRight, ChevronLeft } from "react-feather"
import AliceCarousel from "react-alice-carousel"
import "react-alice-carousel/lib/alice-carousel.css"
import imageImports from "~/static/showcase"

export const Showcase = () => {
    const handleDragStart = (e: React.DragEvent<HTMLImageElement>) => {
        e.preventDefault()
    }

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
                    onDragStart={handleDragStart}
                    role="presentation"
                    className="carousel-image"
                    placeholder="blur"
                />
            )
        })

        setImages(imageData)
    }, [])

    return (
        <div className="wrapper">
            <div className="card">
                <h2 className="py-6 text-center font-semibold text-accent">
                    Fresh Summer Drip
                </h2>
                <AliceCarousel
                    items={images}
                    infinite
                    keyboardNavigation
                    mouseTracking
                    paddingLeft={70}
                    paddingRight={70}
                    autoPlay
                    autoPlayStrategy="all"
                    autoPlayInterval={675}
                    disableButtonsControls
                    responsive={{
                        0: {
                            items: 1,
                        },
                        640: {
                            items: 2,
                        },
                        1024: {
                            items: 3,
                        },
                        1280: {
                            items: 4,
                        },
                    }}
                    // renderPrevButton={prevButton}
                    // renderNextButton={nextButton}
                />
                <div className="mx-auto py-6">
                    <Link href="/" className="btn-info btn">
                        See More
                    </Link>
                </div>
            </div>
        </div>
    )
}

// const prevButton = () => {
//     return (
//         <ChevronLeft
//             className="btn-outline btn-secondary btn-sm btn-circle btn my-3.5 mr-1 p-1.5"
//             aria-controls="alice-carousel"
//         />
//     )
// }

// const nextButton = () => {
//     return (
//         <ChevronRight
//             className="btn-outline btn-secondary btn-sm btn-circle btn my-3.5 ml-1 p-1.5"
//             aria-controls="alice-carousel"
//         />
//     )
// }
