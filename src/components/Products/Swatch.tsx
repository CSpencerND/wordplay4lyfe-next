interface Props {
    productImages: JSX.Element[]
    setImage: React.Dispatch<React.SetStateAction<JSX.Element>>
}

export default function Swatch({ productImages, setImage }: Props) {
    const numberOfSwatches = productImages.length

    const colors = productImages.map((image) => {
        return image.props.color
    })

    const swatch = productImages[0].key as string

    switch (numberOfSwatches) {
        case 1:
            return (
                <label htmlFor={swatch} className="flex gap-2 py-2">
                    <input
                        className="swatch"
                        type="radio"
                        name={swatch}
                        data-color={colors[0]}
                        defaultChecked
                    />
                </label>
            )

        case 2:
            return (
                <label htmlFor={swatch} className="flex gap-2 py-2">
                    <input
                        className="swatch"
                        type="radio"
                        name={swatch}
                        data-color={colors[0]}
                        defaultChecked
                        onChange={() => {
                            setImage(productImages[0])
                        }}
                    />
                    <input
                        className="swatch"
                        type="radio"
                        name={swatch}
                        data-color={colors[1]}
                        onChange={() => {
                            setImage(productImages[1])
                        }}
                    />
                </label>
            )

        case 3:
            return (
                <label htmlFor={swatch} className="flex gap-2 py-2">
                    <input
                        className="swatch"
                        type="radio"
                        name={swatch}
                        data-color={colors[0]}
                        defaultChecked
                        onChange={() => {
                            setImage(productImages[0])
                        }}
                    />
                    <input
                        className="swatch"
                        type="radio"
                        name={swatch}
                        data-color={colors[1]}
                        onChange={() => {
                            setImage(productImages[1])
                        }}
                    />
                    <input
                        className="swatch"
                        type="radio"
                        name={swatch}
                        data-color={colors[2]}
                        onChange={() => {
                            setImage(productImages[2])
                        }}
                    />
                </label>
            )

        case 4:
            return (
                <label htmlFor={swatch} className="flex gap-2 py-2">
                    <input
                        className="swatch"
                        type="radio"
                        name={swatch}
                        data-color={colors[0]}
                        defaultChecked
                        onChange={() => {
                            setImage(productImages[0])
                        }}
                    />
                    <input
                        className="swatch"
                        type="radio"
                        name={swatch}
                        data-color={colors[1]}
                        onChange={() => {
                            setImage(productImages[1])
                        }}
                    />
                    <input
                        className="swatch"
                        type="radio"
                        name={swatch}
                        data-color={colors[2]}
                        onChange={() => {
                            setImage(productImages[2])
                        }}
                    />
                    <input
                        className="swatch"
                        type="radio"
                        name={swatch}
                        data-color={colors[3]}
                        onChange={() => {
                            setImage(productImages[3])
                        }}
                    />
                </label>
            )

        default:
            return null
    }
}
