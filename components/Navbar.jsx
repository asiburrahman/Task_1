"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
    const [open, setOpen] = useState(false);
    const pathname = usePathname();

    const linkStyle = (path) =>
        pathname === path
            ? "border-b-2 border-white pb-1"
            : "hover:text-gray-200";

    return (
        <nav className="w-full py-6 px-6 lg:px-20 flex justify-between items-center bg-transparent absolute top-0 left-0 z-30">

            {/* Logo */}
            <Link href="/" className={`text-2xl font-bold text-white`}>
                Insunet
            </Link>

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
                        <li><Link href="#">Life Insurance</Link></li>
                        <li><Link href="#">Health Insurance</Link></li>
                        <li><Link href="#">Family Plans</Link></li>
                    </ul>
                </div>

                <Link href="#" className={linkStyle("#")}>Company</Link>
                <Link href="#" className={linkStyle("#")}>Customer Stories</Link>
                <Link href="/blog" className={linkStyle("/blog")}>Blog</Link>
                <Link href="#" className={linkStyle("#")}>Contact</Link>
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
                <div className="absolute top-20 left-0 w-full bg-white text-black p-6 flex flex-col gap-5 lg:hidden">

                    <div className="flex flex-col gap-3">
                        <details className="dropdown">
                            <summary className="cursor-pointer">All Insurance</summary>
                            <ul className="pl-4 mt-2 flex flex-col gap-2 text-sm">
                                <li><Link href="#">Life Insurance</Link></li>
                                <li><Link href="#">Health Insurance</Link></li>
                                <li><Link href="#">Family Plans</Link></li>
                            </ul>
                        </details>

                        <Link href="#" className={linkStyle("#")}>Company</Link>
                        <Link href="#" className={linkStyle("#")}>Customer Stories</Link>
                        <Link href="/blog" className={linkStyle("/blog")}>Blog</Link>
                        <Link href="#" className={linkStyle("#")}>Contact</Link>
                    </div>

                    <button className="border border-white text-white font-semibold px-6 py-2 rounded-full hover:bg-gray-600">
                        Secure Your Family
                    </button>
                </div>
            )}
        </nav>
    );
}
