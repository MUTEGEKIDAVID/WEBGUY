import Link from 'next/link';
import { RxHamburgerMenu } from 'react-icons/rx';
import { AiOutlineClose } from 'react-icons/ai';

import { useState } from 'react';

function NavBar() {
    const [navbar, setNavbar] = useState(false);
    return (
        <div>
            <nav className="w-full bg-cyan-500 fixed top-0 left-0 right-0 z-10">
                <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
                    <div>
                        <div className="flex items-center justify-between py-3 md:py-5 md:block">
                            {/* LOGO */}
                            <Link href="/">
                                <h2 className="text-3xl font-bold ">WEBGUY UG</h2>
                            </Link>
                            {/* HAMBURGER BUTTON FOR MOBILE */}
                            <div className="md:hidden">
                                <button
                                    className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                                    onClick={() => setNavbar(!navbar)}
                                >
                                    {navbar ? (
                                        <AiOutlineClose width={30} height={30} alt="logo" />
                                    ) : (
                                        <RxHamburgerMenu
                                            width={30}
                                            height={30}
                                            alt="logo"
                                            className="focus:border-none active:border-none"
                                        />
                                    )}
                                </button>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div
                            className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${navbar ? 'p-12 md:p-0 block' : 'hidden'
                                }`}
                        >
                            <ul className="h-screen md:h-auto items-center justify-center md:flex ">
                                <li className=" text-xl py-4 md:px-6 text-center hover:underline border-b-2 md:border-b-0  border-white  md:hover:underline  md:hover:bg-transparent">
                                    <Link href="#home" onClick={() => setNavbar(!navbar)}>
                                        Home
                                    </Link>
                                </li>
                                <li className=" text-xl  py-4 px-6 text-center  border-b-2 md:border-b-0 hover:underline md:hover:underline  border-white  md:hover:bg-transparent">
                                    <Link href="#about" onClick={() => setNavbar(!navbar)}>
                                        About
                                    </Link>
                                </li>
                                <li className="text-xl py-4 px-6 text-center  border-b-2 md:border-b-0 hover:underline md:hover:underline  border-white  md:hover:bg-transparent">
                                    <Link href="#services" onClick={() => setNavbar(!navbar)}>
                                        Services
                                    </Link>
                                </li>
                                <li className=" text-xl py-4 px-6 text-center  border-b-2 md:border-b-0 hover:underline md:hover:underline  border-white md:hover:bg-transparent">
                                    <Link href="#clients" onClick={() => setNavbar(!navbar)}>
                                        Clients
                                    </Link>
                                </li>
                                <li className=" text-xl py-4 px-6 text-center  border-b-2 md:border-b-0 hover:underline md:hover:underline  border-white md:hover:bg-transparent">
                                    <Link href="#contactus" onClick={() => setNavbar(!navbar)}>
                                        Contact us
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default NavBar;