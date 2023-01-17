import Link from "next/link"
import { useRouter } from "next/router"

export const SideBar = ({ handleClick }: { handleClick: () => void }) => {
    const pathname = useRouter().pathname

    return (
        <div className="drawer-side mt-[5rem]" onClick={handleClick}>
            <label className="drawer-overlay !cursor-default"></label>
            <ul className="menu w-max whitespace-nowrap p-4 text-base">
                <li>
                    <Link className={pathname === "/" ? "active" : ""} href="/">
                        Home
                    </Link>
                </li>
                <li>
                    <Link
                        className={pathname === "/collections" ? "active" : ""}
                        href="/collections"
                    >
                        Collections Directory
                    </Link>
                </li>
                {/* <li className="menu-title"><span>Collections</span></li> */}
                <li>
                    <Link
                        className={pathname === "/collections/summer-22" ? "active" : ""}
                        href="/collections/summer-22"
                    >
                        Summer 2022
                    </Link>
                </li>
                <li>
                    <Link
                        className={pathname === "/collections/staff-picks" ? "active" : ""}
                        href="/collections/staff-picks"
                    >
                        Staff Picks
                    </Link>
                </li>
                <li>
                    <Link
                        className={pathname === "/collections/mindset" ? "active" : ""}
                        href="/collections/mindset"
                    >
                        Mindset Tees
                    </Link>
                </li>
                <li>
                    <Link
                        className={pathname === "/collections/creative-minds" ? "active" : ""}
                        href="/collections/creative-minds"
                    >
                        Creative Minds
                    </Link>
                </li>
                <li>
                    <Link
                        className={pathname === "/collections/lifestyle" ? "active" : ""}
                        href="/collections/lifestyle"
                    >
                        Lifestyle Tess
                    </Link>
                </li>
            </ul>
        </div>
    )
}
