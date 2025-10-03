import { useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "../assets/Logo.png"

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <nav className="w-full bg-[#f7f7f8] border-b space-y-3 border-[#dcdcdc] p-3">
                <div className="bg-[#ff9500] p-2 rounded flex justify-center gap-5 text-white">
                    <p className="text-center text-[14px]">Free Courses 🌟 Sale Ends Soon, Get It Now</p> <span> <i className="bx bx-right-arrow-alt"></i></span>
                </div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between h-12 items-center">
                        <div className="flex items-center space-x-7">
                            <img src={logo} alt="" className="h-9" />

                            {/* <div className="hidden md:flex space-x-8 text-gray-700 font-medium"> */}
                            <div className="hidden md:flex ">
                    <a href="/" className="p-2 hover:bg-[#ededed] rounded-[10px]" >Home</a>
                    <a href="/shop" className="p-2 hover:bg-[#ededed] rounded-[10px]">Courses</a>
                    <a href="/blog" className="p-2 hover:bg-[#ededed] rounded-[10px]">About Us</a>
                    <a href="/blog" className="p-2 hover:bg-[#ededed] rounded-[10px]">Pricing</a>
                    <a href="/contact" className="p-2 hover:bg-[#ededed] rounded-[10px]">Contact</a>
                </div>
                        </div>

                        {/* Register Link */}
                        <div className="hidden md:flex items-center space-x-2 text-gray-700">
                            <a href="/" className="py-2 px-3 hover:bg-[#ededed] rounded-[10px]">Sign Up</a>
                            <a href="/shop" className="bg-[#ff9500] py-2 px-5 rounded-[10px]" >Login</a>

                        </div>

                        {/* Mobile Menu Button */}
                        <div className="md:hidden">
                            <a onClick={() => setIsOpen(!isOpen)} className="">
                                {isOpen ? <X className="w-9 h-11  " /> : <Menu className="w-9 h-11" />}
                            </a>
                        </div>
                    </div>
                </div>

                {/* Mobile Menu */}
                {isOpen && (
                    <div className="md:hidden bg-[#f7f7f8] border-t">
                        <div className="px-4 py-3 space-y-2 text-gray-700 font-medium">
                            <a href="/" className=" block hover:text-[#ff9500]">Home</a>
                            <a href="/shop" className="block hover:text-[#ff9500]">Courses</a>
                            <a href="/blog" className="block hover:text-[#ff9500]">About Us</a>
                            <a href="/blog" className="block hover:text-[#ff9500]">Pricing</a>
                            <a href="/contact" className="block hover:text-[#ff9500]">Contact</a>
                        </div>
                        <div className="flex justify-between mx-5">
                            <a href="/" className="bg-[#ff9500] py-2 px-3 hover:bg-[#ededed] rounded-[10px]">Sign Up</a>
                            <a href="/shop" className="bg-[#ff9500] py-2 px-5 rounded-[10px]" >Login</a>
                        </div>
                    </div>
                )}
            </nav>
        </>

    );
}
