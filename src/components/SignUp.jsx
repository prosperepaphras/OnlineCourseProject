import React, { useState } from 'react'
import avatar1 from "../assets/Avatar/avatar1.png"
// import avatar2 from "../assets/Avatar/avatar2.png"
// import avatar3 from "../assets/Avatar/avatar3.png"
// import avatar4 from "../assets/Avatar/avatar4.png"

export const SignUp = () => {
     const testimonials = [
            { id: 1, avatar: avatar1, name: "Sarah L", text: "The web design course provided a solid foundation for me. The instructors were knowledgeable and supportive, and the interactive learning environment was engaging. I highly recommend it!" },
            
        ]

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const emailValue = (e) => {
        setEmail(e.target.value)
    }
    const passwordValue = (e) => {
        setPassword(e.target.value)
    }

    return (
        <>
            <div className=" lg:flex flex-row-reverse bg-[#f7f7f8] p-[5%]">
                
                <div className=" bg-white place-items-center rounded-lg p-10 lg:w-[50%]">
                    <h1 className='font-medium text-[40px]'>Sign Up</h1>
                    <p  className='font-light text-[20px] text-center'>Create an account to unlock exclusive features. </p>
                    <form className=' grid p-5 px-10 w-full space-y-2' >
                        <label htmlFor="mail" className='block'>Full Name</label>
                            <input className='bg-[#f7f7f8] border border-gray-400 rounded-[5px] p-2 w-full' type="text" name="mail" id="mail" placeholder='Enter your Name' value={email} onChange={emailValue} />
                            <label htmlFor="mail" className='block'>Email</label>
                            <input className='bg-[#f7f7f8] border border-gray-400 rounded-[5px] p-2 w-full' type="email" name="mail" id="mail" placeholder='abc@gmail.com' value={email} onChange={emailValue} />
                       
                            <label htmlFor="password" className='block'>Password</label>
                            <input className='bg-[#f7f7f8] border border-gray-400 rounded-[5px] p-2 w-full' type="password" name="mail" id="password" placeholder='Enter your Password' value={password} onChange={passwordValue} />
                            <div className="flex justify-end">
                            <a href="" className="block "> Forgot Password?</a>
                       </div>
                        <div className="space-x-1 flex">
                        <input type="checkbox" name="agree" id="agree" /> 
                        <p>I agree with <a href="" className="underline">Terms of Use</a>  and <a href="" className="underline">Privacy Policy</a></p>
                        </div>
                        <button type="submit" className='bg-[#ff9500] p-2 rounded-lg '>Sign Up</button>

                        {/* OR Separator */}
                        <div className="flex items-center justify-center space-x-2 my-4">
                            <span className="h-px w-[48%] bg-gray-300"></span>
                            <span className="text-gray-500 text-sm">OR</span>
                            <span className="h-px w-[48%] bg-gray-300"></span>
                        </div>
                        {/* Google Login */}
                        <button
                            type="button"
                            className="flex items-center justify-center w-full py-2 border border-gray-300 rounded-lg bg-gray-100"
                        >
                            <img
                                src="https://www.svgrepo.com/show/475656/google-color.svg"
                                alt="Google"
                                className="w-5 h-5 mr-2"
                            />
                            Sign Up with Google
                        </button>
                        <p className="text-center">
                            Already have an account? <a href="" className="underline">Login</a>
                            </p>
                    </form>
                </div>
                 <div className="py-4 px-8 flex flex-col space-y-9 lg:w-1/2">
                    <div className="">
                        <h1 className='font-bold text-[36px] mb-3' >Students Testimonials</h1>
                        <div className="space-y-5">
                            <p className='text-pretty text-[20px] text-gray-600' >Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio facilis voluptatibus sapiente unde ea a dignissimos repellat soluta!</p>
                            <a href=" " className=" bg-[#ffffff] p-3 rounded"> View All</a>
                        </div>
                    </div>
                    <div className=" gap-10 grid grid-cols-1  place-items-center-safe">
                        {testimonials.map(test =>
                            <div className="bg-[#ffffff] p-5 space-y-5 rounded-[10px]">
                                <p className='text-pretty'>{test.text}</p>
                                <div className="flex justify-between border-t-1 pt-5">
                                    <div className="flex space-x-3 items-center text-[16px]">
                                        <img src={test.avatar} alt="" />
                                        <h3 className=' font-medium'>{test.name}</h3>
                                    </div>
                                    <a href="" className="self-center border p-3 rounded font-medium text-[14px]">Read Full Story</a>
                                </div>
                            </div>)}
                    </div>

                </div>

            </div>
        </>
    )
}
