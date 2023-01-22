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
                        onChange={() => {
                            setImage(productImages[0])
                        }}
                    />
                    <input
                        type="radio"
                        name={swatch}
                        data-color={colors[1]}
                        onChange={() => {
                            setImage(productImages[1])
                        }}
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
                        onChange={() => {
                            setImage(productImages[0])
                        }}
                    />
                    <input
                        type="radio"
                        name={swatch}
                        data-color={colors[1]}
                        onChange={() => {
                            setImage(productImages[1])
                        }}
                    />
                    <input
                        type="radio"
                        name={swatch}
                        data-color={colors[2]}
                        onChange={() => {
                            setImage(productImages[2])
                        }}
                    />
                </span>
            )

        case 4:
            return (
                <span className="flex gap-1.5">
                    <input
                        type="radio"
                        name={swatch}
                        data-color={colors[0]}
                        defaultChecked
                        onChange={() => {
                            setImage(productImages[0])
                        }}
                    />
                    <input
                        type="radio"
                        name={swatch}
                        data-color={colors[1]}
                        onChange={() => {
                            setImage(productImages[1])
                        }}
                    />
                    <input
                        type="radio"
                        name={swatch}
                        data-color={colors[2]}
                        onChange={() => {
                            setImage(productImages[2])
                        }}
                    />
                    <input
                        type="radio"
                        name={swatch}
                        data-color={colors[3]}
                        onChange={() => {
                            setImage(productImages[3])
                        }}
                    />
                </span>
            )

        default:
            return null
    }
}
