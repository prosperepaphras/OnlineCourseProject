import React from 'react'
import logo from "../assets/Logo.png"
const Footer = () => {
    return (
        <footer className='m-8'>
            <div className=" md:flex space-y-5 justify-around">
             <div className=" flex flex-col space-y-3 md:space-y-4">
                <img src={logo} alt="" className='w-9 ' />
                <i className='bx bxs-envelope'> hello@skillbridge.com </i>
                <i className='bx bxs-phone'> +91 91813 23 2309 </i>
                <i className="bx bxs-location-plus"> Somewhere in the World </i>
            </div>
            <div className=" md:flex md:space-x-5 md:w-3/4 md:justify-around ">
                <div className="flex space-x-25 space-y-5 md:justify-between">
                    <div className="flex flex-col md:space-y-2">
                        <h2 className='font-bold'>Home</h2>
                        <a href="">Benefits</a>
                        <a href="">Our Courses</a>
                        <a href="">Our Testimonials</a>
                        <a href="">Our FAQ</a>
                    </div>
                    <div className=" flex flex-col md:space-y-2">
                        <h2 className='font-bold'>About</h2>
                        <a href="">Company</a>
                        <a href="">Achievements</a>
                        <a href="">Our Goals</a>
                    </div>
                </div>
                <div className=" flex flex-col ">
                    <h2 className='font-bold'>Social Profiles</h2>
                    <div className=" space-x-2 mt-3">
                        <a href="" className=' p-1.5 bg-[#ebebebd9] rounded text-[25px]'><i className="bx bxl-facebook-circle"></i></a>
                        <a href="" className=' p-1.5 bg-[#ebebebd9] rounded text-[25px]'><i className="bx bxl-twitter"></i></a>
                        <a href="" className=' p-1.5 bg-[#ebebebd9] rounded text-[25px]'><i className="bx bxl-linkedin-square"></i></a>
                    </div>
                </div>
            </div>
            
            </div>
            <div className="border-t p-4 mt-5">
                <p className='text-center'>&copy;{new Date().getFullYear()}Skillbridge. All rights reserved</p>
            </div>
        </footer>
    )
}

export default Footer