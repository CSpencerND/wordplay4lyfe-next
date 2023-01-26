import { X } from "react-feather"
import { ProductProps } from "~/types"
import { Swatch } from "./"

interface ModalProps extends ProductProps {
    image: JSX.Element
    setImage: React.Dispatch<React.SetStateAction<JSX.Element>>
}

export function ProductModal({ attributes, image, setImage }: ModalProps) {
    const { title, images, id } = attributes

    return (
        <>
            {/* Put this part before </body> tag */}
            <input type="checkbox" id="productModal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label
                        htmlFor="productModal"
                        className="btn-sm btn-circle btn absolute right-2 top-2"
                    >
                        <X />
                    </label>

                    <li className="card" key={id}>
                        <label htmlFor="productModal">
                            <figure className="rounded-t-xl">{images[0]}</figure>
                        </label>
                        <div className="card-body !space-y-0 rounded-b-xl bg-base-300/50 px-4 py-2 backdrop-blur">
                            <h2 className="overflow-hidden text-ellipsis whitespace-nowrap text-sm font-bold">
                                {title}
                            </h2>
                            <p className="whitespace-nowrap pr-2 text-sm opacity-75">
                                from $27
                            </p>
                            <Swatch productImages={images} setImage={setImage} />
                        </div>
                    </li>
                </div>
            </div>
        </>
    )
}
