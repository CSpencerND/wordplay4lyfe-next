import { Twirl as Hamburger } from "hamburger-react"
import Image from "next/image"
import Link from "next/link"
import Cart from "./Cart"
import Account from "./Account"
import logo from "./logo/wordplay-logo-reprisal.webp"

export const Navbar = () => {
    return (
        <header className="sticky top-0 z-50">
            <nav className="navbar p-3 lg:container lg:mx-auto">
                {/* Left Side */}
                <div className="flex-1 gap-3">
                    {/** Hamburger **/}
                    <label
                        htmlFor="sidebar"
                        className="btn-ghost drawer-button btn-circle btn"
                        aria-labelledby="menuButtonText"
                    >
                        <Hamburger
                            rounded
                            size={24}
                            distance="lg"
                            label="Menu Button Icon"
                        />
                        <span id="menuButtonText" className="sr-only">
                            MENU
                        </span>
                    </label>

                    {/** Brand Logo **/}
                    <Link href="/">
                        <Image
                            id="logo"
                            // className="max-h-14 w-full drop-shadow-[-1px_2px_4px_rgb(0,0,0)]"
                            className="pt-2"
                            // className="pt-2 drop-shadow-[-1px_2px_4px_#777]"
                            // className="max-h-14 w-full drop-shadow-[-1px_2px_4px_#0b84b0]"
                            src={logo}
                            alt="Wordplay 4 Lyfe logo"
                        />
                    </Link>
                </div>

                {/* Right Side */}
                <div className="flex-none">
                    <Cart />
                    <Account />
                </div>
            </nav>
        </header>
    )
}
