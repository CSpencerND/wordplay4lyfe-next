"use client"
import { Navbar } from "../Navbar"
import { SideBar } from "./SideBar"
import { Footer } from "../Footer"
import { useRef, useState } from "react"

type Props = { children: React.ReactNode | React.ReactNode[] }

export const Layout = ({ children }: Props) => {
    const [isChecked, setChecked] = useState<boolean>(false)
    const inputRef = useRef<HTMLInputElement | null>(null)

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setChecked(event.target.checked)
    }

    const handleClick = () => {
        setChecked(false)
    }

    return (
        <>
            <div className="drawer-mobile drawer">
                <input
                    onClick={() => setChecked(true)}
                    onChange={handleChange}
                    ref={inputRef}
                    id="sidebar"
                    className="drawer-toggle"
                    type="checkbox"
                    checked={isChecked}
                />

                {/** Main Content */}
                <div className="drawer-content flex flex-col">
                    <Navbar toggled={isChecked} />
                    <div className="mt-20">{children}</div>
                    <Footer />
                </div>

                <SideBar handleClick={handleClick} />
            </div>
        </>
    )
}
