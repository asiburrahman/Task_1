"use client";
import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
    const [open, setOpen] = useState(false);

    return (
        <nav className="w-full py-6 px-6 lg:px-20 flex justify-between items-center bg-transparent absolute top-0 left-0 z-30">
            
            {/* Logo */}
            
            <Link href="/" className="text-2xl font-bold text-white ">Insunet</Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-10 text-white font-medium">
                <div className="dropdown dropdown-hover">
                    <div tabIndex={0} role="button" className="cursor-pointer">
                        All Insurance ▾
                    </div>
                    <ul
                        tabIndex={0}
                        className="dropdown-content menu bg-white rounded-box shadow-lg w-52 text-black"
                    >
                        <li><a>Life Insurance</a></li>
                        <li><a>Health Insurance</a></li>
                        <li><a>Family Plans</a></li>
                    </ul>
                </div>

                <Link href="#" className="hover:text-gray-200">Company</Link>
                <Link href="#" className="hover:text-gray-200">Customer Stories</Link>
                <Link href="#" className="hover:text-gray-200">Contact</Link>
            </div>

            {/* Desktop Button */}
            <button className="hidden lg:block border border-white text-white font-semibold px-6 py-2 rounded-full shadow hover:bg-gray-600">
                Secure Your Family
            </button>

            {/* Mobile Menu Button */}
            <div
                className="lg:hidden text-white text-3xl cursor-pointer"
                onClick={() => setOpen(!open)}
            >
                ☰
            </div>

            {/* Mobile Dropdown Menu */}
            {open && (
                <div className="absolute top-20 left-0 w-full bg-[#1a1a1a]/90 text-white p-6 flex flex-col gap-5 lg:hidden">

                    <div className="flex flex-col gap-3">
                        <details className="dropdown">
                            <summary className="cursor-pointer">All Insurance</summary>
                            <ul className="pl-4  mt-2 flex flex-col gap-2 text-sm">
                                <li><a>Life Insurance</a></li>
                                <li><a>Health Insurance</a></li>
                                <li><a>Family Plans</a></li>
                            </ul>
                        </details>

                        <Link href="#" className="hover:text-gray-300">Company</Link>
                        <Link href="#" className="hover:text-gray-300">Customer Stories</Link>
                        <Link href="#" className="hover:text-gray-300">Contact</Link>
                    </div>

                    <button className="border border-white text-white font-semibold px-6 py-2 rounded-full hover:bg-gray-600">
                        Secure Your Family
                    </button>
                </div>
            )}
        </nav>
    );
}
