import Link from "next/link"

export const SideBar = ({ handleClick }: { handleClick: () => void }) => {
    return (
        <div className="drawer-side mt-[5rem]" onClick={handleClick}>
            <label className="drawer-overlay !cursor-default"></label>
            <ul className="menu w-64 p-4 md:w-80">
                <li>
                    <Link href="/">Home</Link>
                </li>
                <li>
                    <Link href="/collections">Collections Directory</Link>
                </li>
                {/* <li className="menu-title"><span>Collections</span></li> */}
                <li>
                    <Link href="/collections/summer-22">Summer 2022</Link>
                </li>
                <li>
                    <Link href="/collections/staff-picks">Staff Picks</Link>
                </li>
                <li>
                    <Link href="/collections/mindset">Mindset Tees</Link>
                </li>
                <li>
                    <Link href="/collections/creative-minds">Creative Minds</Link>
                </li>
                <li>
                    <Link href="/collections/lifestyle">Lifestyle Tess</Link>
                </li>
            </ul>
        </div>
    )
}
