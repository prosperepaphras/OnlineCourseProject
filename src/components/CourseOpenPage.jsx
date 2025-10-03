import React from 'react'
import Navbar from './Navbar'

const CourseOpenPage = () => {
    return (
        <>
            <Navbar />
            <div className="bg-[#f7f7f8] px-3">
                {/* CourseOpenPage Intro  */}
                <div className=" flex flex-col md:flex-row md:gap-10 p-3 items-center justify-center mb-5">
                    <h1 className='text-[28px] md:text-[34px] lg:text-[44px] mb-3 font-medium'>UI/UX Design Course</h1>
                    <p className='text-[14px] md:text-[16px] lg:text-[18px] text-pretty md:max-w-[50%]'>Welcome to our UI/UX Design course! This comprehensive program will equip you with the knowledge and skills to create exceptional user interfaces (UI) and enhance user experiences (UX). Dive into the world of design thinking, wireframing, prototyping, and usability testing. Below is an overview of the curriculum</p>
                </div>

            </div>
        </>
    )
}

export default CourseOpenPage