type Props = {
    children: React.ReactNode | React.ReactNode[]
}

export const ProductGrid = ({ children }: Props) => {
    return <ul className="layout-grid">{children}</ul>
}
