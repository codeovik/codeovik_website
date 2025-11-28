import { Link, NavLink } from "react-router-dom";
import Logo from "/logo.png"
import { useState } from "react"

const navLinks = ["Home", "About", "Portfolio", "Certificates", "Contact", "Tech Stack"];

export default function Navbar() {

    const [isOpenMenu, setIsOpenMenu] = useState(false);

    return (
        <nav className="flex justify-between px-6 md:px-18 py-6 top-0 left-0 w-full">
            {/* logo */}
            <Link
                to="/"
                className="flex gap-1.5 items-center"
            >
                <img src={Logo} alt="logo" className="h-12 2xl:h-15 cursor-pointer" />
                <p className="font-bold text-2xl">CodeOVIK</p>
            </Link>

            {/* desktop navlink */}
            <ul className="gap-4 hidden lg:flex">
                {navLinks.map((item, index) => (
                    <li key={index}>
                        <NavLink
                            to={item === "Home" ? "/" : item.toLowerCase().replace(/\s+/g, "-")}
                            className={({ isActive }) => `relative after:content-[''] after:block after:transition-all after:h-0.5 after:absolute after:bottom-0 after:left-0 after:bg-black after:rounded-full font-medium
                            ${isActive ? "text-primary after:w-full after:bg-primary" : ""}`}
                        >
                            {item}
                        </NavLink>
                    </li>
                ))}
            </ul>

            {/* mobile navlink */}
            <div
                onClick={() => setIsOpenMenu(!isOpenMenu)}
                className={`w-full fixed top-0 h-dvh z-30 bg-white/5 backdrop-blur-2xl transition-all lg:invisible ${isOpenMenu ? "right-0" : "-right-full"}`}
            >
                <div
                    onClick={(e) => e.stopPropagation()}
                    className="absolute top-0 h-dvh right-0 bg-[#151515] min-[450px]:w-100 2xl:w-130 w-8/10"
                >
                    <ul className="gap-4 pt-20 px-5 flex flex-col">
                        {navLinks.map((item, index) => (
                            <li key={index}>
                                <NavLink
                                    onClick={(e) => {
                                        setTimeout(() => {
                                            setIsOpenMenu(false);
                                        }, 400);
                                    }}
                                    to={item === "Home" ? "/" : item.toLowerCase().replace(/\s+/g, "-")}
                                    className={({ isActive }) => `text-2xl font-medium block ${isActive ? "bg-primary px-2.5 py-1.5 rounded-sm text-constant" : ""}`}
                                >
                                    {item}
                                </NavLink>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

            {/* menu btn */}
            <button
                onClick={() => setIsOpenMenu(!isOpenMenu)}
                className="h-12 bg-white p-2 rounded-full cursor-pointer z-31 lg:hidden"
            >
                <svg className="h-full w-full fill-black" viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg"><path d="M4 7C4 6.44771 4.44772 6 5 6H24C24.5523 6 25 6.44771 25 7C25 7.55229 24.5523 8 24 8H5C4.44772 8 4 7.55229 4 7Z" /><path d="M4 13.9998C4 13.4475 4.44772 12.9997 5 12.9997L16 13C16.5523 13 17 13.4477 17 14C17 14.5523 16.5523 15 16 15L5 14.9998C4.44772 14.9998 4 14.552 4 13.9998Z" /><path d="M5 19.9998C4.44772 19.9998 4 20.4475 4 20.9998C4 21.552 4.44772 21.9997 5 21.9997H22C22.5523 21.9997 23 21.552 23 20.9998C23 20.4475 22.5523 19.9998 22 19.9998H5Z" /></svg>
            </button>
        </nav>
    );
}