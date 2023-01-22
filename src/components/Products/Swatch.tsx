interface Props {
    imagesLength: number
    productImages: JSX.Element[]
    setImage: React.Dispatch<React.SetStateAction<JSX.Element>>
}

export default function Swatch({ imagesLength, productImages, setImage }: Props) {
    const colors = productImages.map((image) => {
        return image.props.color
    })

    const swatch = productImages[0].key as string

    switch (imagesLength) {
        case 1:
            return (
                <span className="flex gap-1.5">
                    <input type="radio" name={swatch} data-color={colors[0]} defaultChecked />
                </span>
            )

        case 2:
            return (
                <span className="flex gap-1.5">
                    <input
                        type="radio"
                        name={swatch}
                        data-color={colors[0]}
                        defaultChecked
                        onChange={() => {setImage(productImages[0])}}
                    />
                    <input
                        type="radio"
                        name={swatch}
                        data-color={colors[1]}
                        onChange={() => {setImage(productImages[1])}}
                    />
                </span>
            )

        case 3:
            return (
                <span className="flex gap-1.5">
                    <input
                        type="radio"
                        name={swatch}
                        data-color={colors[0]}
                        defaultChecked
                        onChange={() => {setImage(productImages[0])}}
                    />
                    <input
                        type="radio"
                        name={swatch}
                        data-color={colors[1]}
                        onChange={() => {setImage(productImages[1])}}
                    />
                    <input
                        type="radio"
                        name={swatch}
                        data-color={colors[2]}
                        onChange={() => {setImage(productImages[2])}}
                    />
                </span>
            )

        default:
            return null
    }
}
