import { Navbar } from "../Navbar"
import { SideBar } from "./SideBar"
import { Footer } from "../Footer"

type Props = { children: React.ReactNode | React.ReactNode[] }

export const Layout = ({ children }: Props) => {
    return (
        <>
            <div className="drawer">
                <input id="sidebar" className="drawer-toggle" type="checkbox" />

                {/** Main Content */}
                <div className="drawer-content flex flex-col">
                    <Navbar />
                    {children}
                    <Footer />
                </div>

                <SideBar />
            </div>
        </>
    )
}
