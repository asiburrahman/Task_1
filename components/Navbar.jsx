import Link from "next/link";


export default function Navbar() {
    return (
        <nav className="w-full py-6 px-6 lg:px-20 flex justify-between items-center bg-transparent absolute top-0 left-0 z-30">
            {/* Logo */}
            <div className="text-2xl font-bold text-white">Insunet</div>


            {/* Navigation Links */}
            <div className="hidden lg:flex items-center gap-10 text-white font-medium">
                <div className="dropdown dropdown-hover">
                    <div tabIndex={0} role="button" className="cursor-pointer">All Insurance ▾</div>
                    <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box shadow-lg w-52 text-white">
                        <li><a>Life Insurance</a></li>
                        <li><a>Health Insurance</a></li>
                        <li><a>Family Plans</a></li>
                    </ul>
                </div>
                <Link href="#" className="hover:text-gray-200">Company</Link>
                <Link href="#" className="hover:text-gray-200">Customer Stories</Link>
                <Link href="#" className="hover:text-gray-200">Contact</Link>
            </div>


            {/* Button */}
            <button className="hidden lg:block border border-white text-white font-semibold px-6 py-2 rounded-full shadow hover:bg-gray-600">Secure Your Family</button>


            {/* Mobile Menu Button */}
            <div className="lg:hidden text-white text-3xl cursor-pointer">☰</div>
        </nav>
    );
}