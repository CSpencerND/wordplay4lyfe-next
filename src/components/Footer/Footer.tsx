import { Instagram, Twitter, Facebook } from "react-feather"
import Link from "next/link"
import Image from "next/image"

// import logo from "~/static/julee-gradient.webp"
import logo from "~/static/comforter-gradient.webp"

export const Footer = () => {
    return (
        <>
            <footer className="footer p-10 max-md:footer-center">
                <div className="form-control">
                    <label className="label">
                        <span className="footer-title">
                            Sign Up To Our Newsletter!
                        </span>
                    </label>
                    <div className="relative">
                        <input
                            type="text"
                            placeholder="username@site.com"
                            className="input-bordered input w-full pr-28"
                        />
                        <button className="btn-primary btn absolute top-0 right-0 rounded-l-none">
                            Subscribe
                        </button>
                    </div>
                </div>
                <div className="md:place-self-center md:self-end md:justify-self-end">
                    <ul className="grid grid-flow-col gap-4">
                        <li>
                            <Link href="https://www.instagram.com/word_play4lyfe/">
                                <Instagram />
                            </Link>
                        </li>
                        <li>
                            <Link href="">
                                <Twitter />
                            </Link>
                        </li>
                        <li>
                            <Link href="">
                                <Facebook />
                            </Link>
                        </li>
                    </ul>
                </div>
            </footer>
            <footer className="footer border-t border-base-300 px-10 pt-6 max-md:footer-center md:pb-6">
                <div className="grid-flow-col items-center">
                    <Image src={logo} alt="wordplay4lyfe" className="pt-2 w-32" id="logo" />
                    <p>Copyright ?? 2022 - All right reserved wordplay4lyfe</p>
                </div>
                <div className="md:place-self-center md:self-end md:justify-self-end">
                    <ul className="grid grid-flow-col items-center gap-4 [&>li]:w-8"></ul>
                </div>
            </footer>
        </>
    )
}
