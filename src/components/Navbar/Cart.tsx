import { ShoppingCart } from "react-feather"

const Cart = () => {
    return (
        <div className="dropdown-end dropdown">
            <label tabIndex={0} className="btn-ghost btn-circle btn">
                <div className="indicator">
                    <ShoppingCart />
                    <span className="badge badge-sm indicator-item">8</span>
                </div>
            </label>
            <div
                tabIndex={0}
                className="card dropdown-content card-compact mt-3 w-52"
            >
                <div className="card-body bg-opacity-90">
                    <span className="text-lg font-bold">8 Items</span>
                    <span className="text-info">Subtotal: $999</span>
                    <div className="card-actions">
                        <button className="btn-primary btn-block btn">
                            View cart
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cart
