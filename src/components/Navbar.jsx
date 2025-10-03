import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";   // ✅ Import Link
import logo from "../assets/Logo.png";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <nav className="w-full bg-[#f7f7f8] border-b space-y-3 border-[#dcdcdc] p-3">
                <div className="bg-[#ff9500] p-2 rounded flex justify-center gap-5 text-white">
                    <p className="text-center text-[14px]">
                        Free Courses 🌟 Sale Ends Soon, Get It Now
                    </p> 
                    <span><i className="bx bx-right-arrow-alt"></i></span>
                </div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between h-12 items-center">
                        <div className="flex items-center space-x-7">
                            <img src={logo} alt="Logo" className="h-9" />

                            {/* Desktop Links */}
                            <div className="hidden md:flex space-x-2">
                                <Link to="/" className="p-2 hover:bg-[#ededed] rounded-[10px]">Home</Link>
                                <Link to="/courses" className="p-2 hover:bg-[#ededed] rounded-[10px]">Courses</Link>
                                <Link to="/about" className="p-2 hover:bg-[#ededed] rounded-[10px]">About Us</Link>
                                <Link to="/pricing" className="p-2 hover:bg-[#ededed] rounded-[10px]">Pricing</Link>
                                <Link to="/contact" className="p-2 hover:bg-[#ededed] rounded-[10px]">Contact</Link>
                            </div>
                        </div>

                        {/* Register/Login */}
                        <div className="hidden md:flex items-center space-x-2 text-gray-700">
                            <Link to="/signUp" className="py-2 px-3 hover:bg-[#ededed] rounded-[10px]">Sign Up</Link>
                            <Link to="/login" className="bg-[#ff9500] py-2 px-5 rounded-[10px]">Login</Link>
                        </div>

                        {/* Mobile Menu Button */}
                        <div className="md:hidden">
                            <button onClick={() => setIsOpen(!isOpen)}>
                                {isOpen ? <X className="w-9 h-11" /> : <Menu className="w-9 h-11" />}
                            </button>
                        </div>
                    </div>
                </div>

                {/* Mobile Menu */}
                {isOpen && (
                    <div className="md:hidden bg-[#f7f7f8] border-t">
                        <div className="px-4 py-3 space-y-2 text-gray-700 font-medium">
                            <Link to="/" className="block hover:text-[#ff9500]">Home</Link>
                            <Link to="/courses" className="block hover:text-[#ff9500]">Courses</Link>
                            <Link to="/about" className="block hover:text-[#ff9500]">About Us</Link>
                            <Link to="/pricing" className="block hover:text-[#ff9500]">Pricing</Link>
                            <Link to="/contact" className="block hover:text-[#ff9500]">Contact</Link>
                        </div>
                        <div className="flex justify-between mx-5">
                            <Link to="/signUp" className="bg-[#ff9500] py-2 px-3 hover:bg-[#ededed] rounded-[10px]">Sign Up</Link>
                            <Link to="/login" className="bg-[#ff9500] py-2 px-5 rounded-[10px]">Login</Link>
                        </div>
                    </div>
                )}
            </nav>
        </>
    );
}
