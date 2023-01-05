import Image from "next/image"
import Link from "next/link"
import Cart from "./Cart"
import Account from "./Account"
import logo from "./logo/wordplay-logo-reprisal.webp"
import { Twirl as Hamburger } from "hamburger-react"

type Props = { toggled: boolean }
export const Navbar = ({ toggled }: Props) => {
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
                            toggled={toggled}
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
                    <Link
                        href="/"
                        onClick={(event) => toggled && event.preventDefault()}
                    >
                        <Image
                            id="logo"
                            className={!toggled ? "pt-2" : "pt-2 opacity-50 cursor-not-allowed transition-all"}
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
