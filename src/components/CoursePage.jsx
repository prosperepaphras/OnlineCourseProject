import React from 'react'
import Navbar from './Navbar'
import web1 from '../assets/CourseCatg/web1.png'
import web2 from '../assets/CourseCatg/web2.png'
import web3 from '../assets/CourseCatg/web3.png'
import Footer from './Footer'


const CoursePage = () => {

    const coursesCatg = [
        {
            id: 1,
            name: "Web Design Fundamentals",
            text: "Learn the fundamentals of web design, including HTML, CSS, and responsive design principles. Develop the skills to create visually appealing and user-friendly websites.",
            img: [web1, web2, web3],
            duration: "4 Weeks",
            difficulty: "Beginner",
            tutor: "John Smith",
            curriculum: [
                { id: 1, number: "01", phase: "Introduction to HTML" },
                { id: 2, number: "02", phase: "Styling with CSS" },
                { id: 3, number: "03", phase: "Introduction to Responsive Design" },
                { id: 4, number: "04", phase: "Design Principles for Web" },
                { id: 5, number: "05", phase: "Building a Basic Website" }
            ]
        },
        {
            id: 2,
            name: "UI/UX Design",
            text: "Master the art of creating intuitive user interfaces (UI) and enhancing user experiences (UX). Learn design principles, wireframing, prototyping, and usability testing techniques.",
            img: [web1, web2, web3],
            duration: "6 Weeks",
            difficulty: "Intermediate",
            tutor: "John Smith",
            curriculum: [
                { id: 1, number: "01", phase: "Introduction to UI/UX Design" },
                { id: 2, number: "02", phase: "User Research and Personas" },
                { id: 3, number: "03", phase: "Wireframing and Prototyping" },
                { id: 4, number: "04", phase: "Visual Design and Branding" },
                { id: 5, number: "05", phase: "Usability Testing and Iteration" }
            ]
        },
        {
            id: 3,
            name: "Mobile App Development",
            text: "Dive into the world of mobile app development. Learn to build native iOS and Android applications using industry-leading frameworks like Swift and Kotlin.",
            img: [web1, web2, web3],
            duration: "8 Weeks",
            difficulty: "Intermediate",
            tutor: "David Brown",
            curriculum: [
                { id: 1, number: "01", phase: "Introduction to Mobile App Development" },
                { id: 2, number: "02", phase: "Fundamentals of Swift Programming (iOS)" },
                { id: 3, number: "03", phase: "Fundamentals of Kotlin Programming (Android)" },
                { id: 4, number: "04", phase: "Building User Interfaces" },
                { id: 5, number: "05", phase: "App Deployment and Testing" }
            ]
        },
        {
            id: 4,
            name: "Graphic Design for Beginners",
            text: "Discover the fundamentals of graphic design, including typography, color theory, layout design, and image manipulation techniques. Create visually stunning designs for print and digital media.",
            img: [web1, web2, web3],
            duration: "10 Weeks",
            difficulty: "Beginner",
            tutor: "Sarah Thompson",
            curriculum: [
                { id: 1, number: "01", phase: "Introduction to Graphic Design" },
                { id: 2, number: "02", phase: "Typography and Color Theory" },
                { id: 3, number: "03", phase: "Layout Design and Composition" },
                { id: 4, number: "04", phase: "Image Editing and Manipulation" },
                { id: 5, number: "05", phase: "Designing for Print and Digital Media" }
            ]
        },
        {
            id: 5,
            name: "Front-End Web Development",
            text: "Become proficient in front-end web development. Learn HTML, CSS, JavaScript, and popular frameworks like Bootstrap and React. Build interactive and responsive websites.",
            img: [web1, web2, web3],
            duration: "10 Weeks",
            difficulty: "Intermediate",
            tutor: "Michael Adams",
            curriculum: [
                { id: 1, number: "01", phase: "HTML Fundamentals" },
                { id: 2, number: "02", phase: "CSS Styling and Layouts" },
                { id: 3, number: "03", phase: "JavaScript Basics" },
                { id: 4, number: "04", phase: "Building Responsive Websites" },
                { id: 5, number: "05", phase: "Introduction to Bootstrap and React" }
            ]
        }
    ]


    return (
        <>
            {/* <Navbar /> */}
            <div className="bg-[#f7f7f8] px-3">
                {/* CoursePage Intro  */}
                <div className=" flex flex-col md:flex-row md:gap-10 p-3 items-center justify-center mb-5">
                    <h1 className='text-[28px] md:text-[34px] lg:text-[44px] mb-3 font-medium'>Online Courses on Design and Development</h1>
                    <p className='text-[14px] md:text-[16px] lg:text-[18px] text-pretty md:max-w-[50%]'>Welcome to our online course page, where you can enhance your skills in design and development. Choose from our carefully curated selection of 10 courses designed to provide you with comprehensive knowledge and practical experience. Explore the courses below and find the perfect fit for your learning journey.</p>
                </div>
                {/* Courses Available */}
                <div className="p-3">
                    <div className=" space-y-10">
                        {coursesCatg.map(course =>
                            <div key={course.id} className="p-8 bg-[#ffffff]">
                                <div className=" md:grid grid-cols-4 ">
                                    <div className="mb-5 col-span-3">
                                        <h1 className='font-medium text-[18px] md:text-[20px] lg:text-[24px]'>{course.name}</h1>
                                        <p className='text-[14px] md:text-[16px] lg:text-[18px] text-pretty '>{course.text}</p>
                                    </div>
                                    <div className="col-span-1 place-content-center md:justify-self-center-safe">
                                        <button className="bg-[#f7f7f8] border border-[#cccccc] text-[14px] md:text-[14px] lg:text-[18px] p-2 rounded-[10px] w-[120px] mb-5 ">View Course</button>
                                    </div>
                                </div>
                                {/* images */}
                                <div className="flex items-center justify-center gap-3 mb-3">
                                    {course.img.map((image, idx) =>
                                        <img key={idx} src={image} alt="" className=" w-[32%] object-cover flex-shrink-0 rounded" />
                                    )}
                                </div>
                                {/* Course duration, etc  */}
                                <div className="p-3 sm:flex justify-between">
                                    <div className=" mb-5 space-x-3">
                                        <span className='border border-[#dcdcdb] p-2 rounded' >{course.duration}</span>
                                        <span className='border border-[#dcdcdb] p-2 rounded' >{course.difficulty}</span>
                                    </div>
                                    <div className="">
                                        <span>{course.tutor}</span>
                                    </div>
                                </div>

                                {/* Curriculum  */}
                                <div className="  border border-[#dcdcdb] rounded-[10px]">
                                    <h1 className='font-bold text-[16px] sm:text-[18px] lg:text-[22px] p-3 ml-2 ' >Curriculum</h1>
                                    <div className=" grid grid-cols-1 sm:grid-cols-5 p-5 border-t border-[#dcdcdb]">
                                        {course.curriculum.map(outline =>
                                            <div className="  items-center place-items-center border-[#dcdcdb] border-t sm:border-t-0 sm:border-r p-5 ">
                                                <h1 className='font-bold text-[30px] md:text-[40px] lg:text-[50px]' >{outline.number}</h1>
                                                <p className=" text-[14px] md:text-[16px] lg:text-[18px]">{outline.phase}</p>
                                            </div>)}
                                    </div>

                                </div>
                            </div>
                           
                        )}
                    </div>
                </div>
            </div>
        {/* <Footer/> */}
        </>
    )
}

export default CoursePage