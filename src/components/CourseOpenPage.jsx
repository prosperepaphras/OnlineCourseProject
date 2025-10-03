import React from 'react'
import Navbar from './Navbar'
import ux1 from '../assets/CourseCatg/ux1.png'
import Footer from './Footer'

const CourseOpenPage = () => {
    const courseDetails = [
        {
        id: 1,
        number:"01",
        title: "Introduction to UI/UX Design",
        breakdown1:"Understanding UI/UX Design Principles",
        breakdown2: "Importance of User-Centered Design",
        breakdown3: "The Role of UI/UX Design in Product Development"
    },
    {
        id: 2,
        number:"02",
        title: "Introduction to UI/UX Design",
        breakdown1:"Understanding UI/UX Design Principles",
        breakdown2: "Importance of User-Centered Design",
        breakdown3: "The Role of UI/UX Design in Product Development"
    },
     {
        id: 3,
        number:"03",
        title: "Introduction to UI/UX Design",
        breakdown1:"Understanding UI/UX Design Principles",
        breakdown2: "Importance of User-Centered Design",
        breakdown3: "The Role of UI/UX Design in Product Development"
    },
     {
        id: 4,
        number:"04",
        title: "Introduction to UI/UX Design",
        breakdown1:"Understanding UI/UX Design Principles",
        breakdown2: "Importance of User-Centered Design",
        breakdown3: "The Role of UI/UX Design in Product Development"
    },
     {
        id: 5,
        number:"05",
        title: "Introduction to UI/UX Design",
        breakdown1:"Understanding UI/UX Design Principles",
        breakdown2: "Importance of User-Centered Design",
        breakdown3: "The Role of UI/UX Design in Product Development"
    },
    
]
    return (
        <>
            {/* <Navbar /> */}
            <div className="bg-[#f7f7f8] px-6 space-y-10">
                {/* CourseOpenPage Intro  */}
                <div className=" flex flex-col md:flex-row md:gap-10 p-3 items-center justify-center mb-5">
                    <h1 className='text-[28px] md:text-[34px] lg:text-[44px] mb-3 font-medium'>UI/UX Design Course</h1>
                    <p className='text-[14px] md:text-[16px] lg:text-[18px] text-pretty md:max-w-[50%]'>Welcome to our UI/UX Design course! This comprehensive program will equip you with the knowledge and skills to create exceptional user interfaces (UI) and enhance user experiences (UX). Dive into the world of design thinking, wireframing, prototyping, and usability testing. Below is an overview of the curriculum</p>
                </div>

                {/* Course Video  */}
                <div className="place-items-center w-full my-[5%] ">
                    <img src={ux1} alt="" className='object-fit object w-[90%] md:w-[80%] md:h-[400px] ' />
                </div>

                {/* Course Details  */}
                <div className=" px-[10%] py-4 pb-10 grid md:grid-cols-2 gap-8 ">
                    {courseDetails.map(details => 
                        <div className="bg-[#ffffff] p-7 space-y-3 rounded-[10px]">
                            <h1 className='font-bold text-[40px] md:text-[40px] lg:text-[50px] flex justify-end'> {details.number}</h1>
                            <h2 className="text-[16px] md:text-[18px] lg:text-[22px] font-medium">{details.title}</h2>
                            
                            <div className="space-y-4">
                                    <div className="border border-[#f7f7f8] p-4 rounded-[10px] sm:grid grid-cols-3 gap-2">
                                    <div className="col-span-2">
                                    <h1 className="text-[14px] font-normal md:text-[14px] lg:text-[16px]">{details.breakdown1}</h1>
                                    <h2 className="text-[14px] font-light">Lesson 01</h2>
                                    </div>
                                    <i className="bx bx-time text-[14px] bg-[#f7f7f8] text-[#59595A] p-2 rounded my-3 sm:w-fit flex self-center text-center"> 45 Minutes </i>
                                </div>
                                <div className="border border-[#f7f7f8] p-4 rounded-[10px] sm:grid grid-cols-3 gap-2">
                                    <div className="col-span-2">
                                    <h1 className="text-[14px] font-normal md:text-[14px] lg:text-[16px]">{details.breakdown2}</h1>
                                    <h2 className="text-[14px] font-light">Lesson 02</h2>
                                    </div>
                                    <i className="bx bx-time text-[14px] bg-[#f7f7f8] text-[#59595A] p-2 rounded my-3 sm:w-fit flex self-center text-center"> 1 Hour </i>
                                </div>
                                <div className="border border-[#f7f7f8] p-4 rounded-[10px] sm:grid grid-cols-3 gap-2">
                                    <div className="col-span-2">
                                    <h1 className="text-[14px] font-normal md:text-[14px] lg:text-[16px]">{details.breakdown3}</h1>
                                    <h2 className="text-[14px] font-light">Lesson 03</h2>
                                    </div>
                                    <i className="bx bx-time text-[14px] bg-[#f7f7f8] text-[#59595A] p-2 rounded my-3 sm:w-fit flex self-center text-center "> 45 Minutes </i>
                                </div>
                            </div>
                            
                        </div>
                    )}
                </div>

            </div>
            {/* <Footer/> */}
        </>
    )
}

export default CourseOpenPage