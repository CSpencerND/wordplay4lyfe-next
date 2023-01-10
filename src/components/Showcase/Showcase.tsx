import Link from "next/link"
import AliceCarousel from "react-alice-carousel"
import "react-alice-carousel/lib/alice-carousel.css"
import imageImports from "~/static/showcase"
import { useImageImports } from "~/utils"
// import { ChevronRight, ChevronLeft } from "react-feather"

export const Showcase = () => {
    const images = useImageImports(imageImports, {
        className: "carousel-image",
        role: "presentation",
        onDragStart: (e) => e.preventDefault(),
    })

    return (
        <div className="">
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

// function prevButton(): React.ReactNode {
//     return (
//         <ChevronLeft
//             className="btn-outline btn-secondary btn-sm btn-circle btn my-3.5 mr-1 p-1.5"
//             aria-controls="alice-carousel"
//         />
//     )
// }

// function nextButton(): React.ReactNode {
//     return (
//         <ChevronRight
//             className="btn-outline btn-secondary btn-sm btn-circle btn my-3.5 ml-1 p-1.5"
//             aria-controls="alice-carousel"
//         />
//     )
// }
