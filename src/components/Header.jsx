import icon from "../assets/ALTA.svg"
import humberger from "../assets/humberger-menu-aktif.svg"
import { useState, useEffect } from "react"
import humberger_non_aktif from "../assets/maki_cross.svg"
import Home from "../assets/clarity_home-solid.svg"

function Header() {
    const [toggleNavbar, setToggleNavbar] = useState(false)

    const [showNavbar, setShowNavbar] = useState(true); // Untuk menampilkan navbar
    const [lastScrollY, setLastScrollY] = useState(0); // Untuk menyimpan posisi gulir terakhir

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            if (currentScrollY > lastScrollY) {
                // Jika scroll ke bawah
                setShowNavbar(true);
            } else {
                // Jika scroll ke atas
                setShowNavbar(false);
            }
            setLastScrollY(currentScrollY);
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [lastScrollY]);



    return (
        <>
            <nav className="justify-center flex ">
                <div className={` w-full bg-white bg-opacity-70 backdrop-blur-sm sm:bg-white sm:bg-opacity-30 sm:backdrop-blur-sm fixed  z-[9999999] transition-transform duration-300 ${showNavbar ? "translate-y-0" : "-translate-y-full"}`}>
                    <div className="container mx-auto flex justify-between items-center py-[22px] sm:py-4 font-medium">
                        <div className="order-1 sm:order-2 lg:order-1">
                            <img src={icon} alt="" />
                        </div>
                        <div className="cursor-pointer order-2 sm:order-1 lg:hidden" onClick={() => setToggleNavbar(toggleNavbar ? false : true)}>
                            <img src={toggleNavbar ? humberger_non_aktif : humberger} alt="toggle" />
                        </div>
                        <div className="hidden lg:block lg:order-2  ">
                            <ul className="flex gap-1 items-center bg-white border-2 border-black rounded-full">
                                <li className="py-[10px] flex gap-2 items-center px-[18px] bg-black text-white rounded-full border-2 ">
                                    <img src={Home} alt="" />
                                    Home</li>
                                <li className="py-[10px]  flex gap-2 items-center hover:underline  rounded-full   px-[18px]">About</li>
                                <li className="py-[10px]  flex gap-2 items-center hover:underline rounded-full   px-[18px]">Contact</li>
                                <li className="py-[10px]  flex gap-2 items-center hover:underline rounded-full   px-[18px]">Service</li>
                            </ul>
                        </div>
                        <div className="hidden sm:block font-medium order-3">
                            <button className="py-[10px] px-[18px] border-2 border-black hover:bg-white hover:border-white rounded-full mr-4">Sign In</button>
                            <button className="py-[10px] px-[18px] border-2 border-black rounded-full hover:bg-white hover:border-white ">Sign Up</button>
                        </div>
                    </div>

                    <div className={`${toggleNavbar ? "block" : "hidden"} lg:hidden`}>
                        <ul className="text-lg text-black ">
                            <li className="bg-black px-4 sm:px-16 py-[10px] border-b-2 text-white">Home</li>
                            <li className="px-4 sm:px-16 py-[10px] bg-white border-b-2 border-black">About</li>
                            <li className="px-4 sm:px-16 py-[10px] bg-white border-b-2 border-black">Contact</li>
                            <li className="px-4 sm:px-16 py-[10px] bg-white border-b-2 border-black">Services</li>
                            <div className="flex w-full justify-evenly pt-5 sm:pt-0">
                                <li className="px-4 sm:px-16 py-[10px] mx-2 bg-black text-white inline-block rounded-full sm:hidden">Sign In</li>
                                <li className="px-4 sm:px-16 py-[10px] mx-2 text-white bg-black rounded-full inline-block sm:hidden">Sign Up</li>
                            </div>

                        </ul>
                    </div>
                </div>
            </nav >
        </>
    )
}

export default Header