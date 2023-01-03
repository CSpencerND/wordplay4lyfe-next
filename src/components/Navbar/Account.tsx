import { User } from "react-feather"

const Account = () => {
    return (
        <div className="dropdown-end dropdown">
            <label tabIndex={0} className="btn-ghost btn-circle avatar btn">
                <User />
            </label>
            <ul
                tabIndex={0}
                className="dropdown-content menu menu-compact mt-3 w-52 p-2"
            >
                <li>
                    <a className="justify-between">
                        Profile
                        <span className="badge">New</span>
                    </a>
                </li>
                <li>
                    <a>Settings</a>
                </li>
                <li>
                    <a>Logout</a>
                </li>
            </ul>
        </div>
    )
}

export default Account
