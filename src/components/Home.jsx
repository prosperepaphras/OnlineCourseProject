import React from 'react'
import { Link } from "react-router-dom"; 
import Navbar from './Navbar'
import Footer from './Footer'
import supportImg1 from "../assets/supportTeams/Team1.png"
import supportImg2 from "../assets/supportTeams/Team2.png"
import supportImg3 from "../assets/supportTeams/Team3.png"
import supportImg4 from "../assets/supportTeams/Team4.png"
import supportImg5 from "../assets/supportTeams/Team5.png"
import supportImg6 from "../assets/supportTeams/Team6.png"
import supportImg7 from "../assets/supportTeams/Team7.png"
import videoImg from "../assets/videoImg.svg"
import Course1 from "../assets/CoursesImg/Course1.png"
import Course2 from "../assets/CoursesImg/Course2.png"
import Course3 from "../assets/CoursesImg/Course3.png"
import Course4 from "../assets/CoursesImg/Course4.png"
import Course5 from "../assets/CoursesImg/Course5.png"
import Course6 from "../assets/CoursesImg/Course6.png"
import avatar1 from "../assets/Avatar/avatar1.png"
import avatar2 from "../assets/Avatar/avatar2.png"
import avatar3 from "../assets/Avatar/avatar3.png"
import avatar4 from "../assets/Avatar/avatar4.png"

const Home = () => {
    const supportTeams = [
        { id: 1, image: supportImg1, link: "https://www.google.com" },
        { id: 2, image: supportImg2, link: "https://www.google.com" },
        { id: 3, image: supportImg3, link: "https://www.google.com" },
        { id: 4, image: supportImg4, link: "https://www.google.com" },
        { id: 5, image: supportImg5, link: "https://www.google.com" },
        { id: 6, image: supportImg6, link: "https://www.google.com" },
        { id: 7, image: supportImg7, link: "https://www.google.com" }
    ];

    const benefits = [
        { id: 1, num: "01", title: "Flexible Learning Schedule", text: "Fit your coursework around your existing commitments and obligations." },
        { id: 2, num: "02", title: "Expert Instruction", text: "Learn from industry experts who have hands-on experience in design and development." },
        { id: 3, num: "03", title: "Diverse Course Offerings", text: "Explore a wide range of design and development courses covering various topics." },
        { id: 4, num: "04", title: "Updated Curriculum", text: "Access courses with up-to-date content reflecting the latest trends and industry practices." },
        { id: 5, num: "05", title: "Practical Projects and Assignments", text: "Develop a portfolio showcasing your skills and abilities to potential employers." },
        { id: 6, num: "06", title: "Interactive Learning Environment", text: "Collaborate with fellow learners, exchanging ideas and feedback to enhance your understanding." }
    ]

    const courses = [
        { id: 1, image: Course1, duration: "4 weeks", difficulty: 'Beginner', Tutor: "By John Smith", name: "Web Design Fundamentals", info: "Learn the fundamentals of web design, including HTML, CSS, and responsive design principles. Develop the skills to create visually appealing and user-friendly websites." },
        { id: 2, image: Course2, duration: "6 weeks", difficulty: 'Beginner', Tutor: "By Emily Johnson", name: "UI/UX Design", info: "Master the art of creating intuitive user interfaces (UI) and enhancing user experiences (UX). Learn design principles, wireframing, prototyping, and usability testing techniques." },
        { id: 3, image: Course3, duration: "10 weeks", difficulty: 'Intermediate', Tutor: "By Michael Adams", name: "Front-End Web Development", info: "Become proficient in front-end web development. Learn HTML, CSS, JavaScript, and popular frameworks like Bootstrap and React. Build interactive and responsive websites." },
        { id: 4, image: Course4, duration: "6 weeks", difficulty: 'Advance', Tutor: "By Jennifer Wilson", name: "Advanced JavaScript", info: "Take your JavaScript skills to the next level. Explore advanced concepts like closures, prototypes, asynchronous programming, and ES6 features. Build complex applications with confidence." },
        { id: 5, image: Course5, duration: "10 weeks", difficulty: 'Intermediate', Tutor: "By David Brown", name: "Mobile App Development", info: "Dive into the world of mobile app development. Learn to build native iOS and Android applications using industry-leading frameworks like Swift and Kotlin." },
        { id: 6, image: Course6, duration: "10 weeks", difficulty: 'Beginner', Tutor: "By John Smith", name: "Graphic Design for Beginners", info: "Discover the fundamentals of graphic design, including typography, color theory, layout design, and image manipulation techniques. Create visually stunning designs for print and digital media." },

    ]

    const testimonials = [
        { id: 1, avatar: avatar1, name: "Sarah L", text: "The web design course provided a solid foundation for me. The instructors were knowledgeable and supportive, and the interactive learning environment was engaging. I highly recommend it!" },
        { id: 2, avatar: avatar2, name: "Jason M", text: "The UI/UX design course exceeded my expectations. The instructor's expertise and practical assignments helped me improve my design skills. I feel more confident in my career now. Thank you!" },
        { id: 3, avatar: avatar3, name: "Emily R", text: "The mobile app development course was fantastic! The step-by-step tutorials and hands-on projects helped me grasp the concepts easily. I'm now building my own app. Great course!" },
        { id: 4, avatar: avatar4, name: "Michael K", text: "I enrolled in the graphic design course as a beginner, and it was the perfect starting point. The instructor's guidance and feedback improved my design abilities significantly. I'm grateful for this course!" }
    ]
    return (
        <>
           
            <div className="bg-[#f7f7f8] pt-8 place-items-center px-[5%]  ">
                {/* HERO info SECTION */}
                <div className="w-[90%]  text-center space-y-2 p-3 pb-7 md:w-fit">
                    <div className="flex bg-white justify-center p-3 space-x-3 items-center rounded">
                        <i className="bx bxs-zap bg-[#FFF4E5] p-2 rounded"></i>
                        <p className='font-semibold text-[16px] sm:text-[28px] lg:text-[36px]' > <span className='text-[#ff9500]'>Unlock</span> Your Creative Potential</p>
                    </div>
                    <div className="">
                        <p className='text-[24px] md:text-[24px] font-medium'>with Online Design and Development Courses.</p>
                        <p className='text-[14px] lg:text-[18px] text-pretty text-center'>Learn from Industry Experts and Enhance Your Skills.</p>
                    </div>
                    <div className=" flex justify-center items-center gap-5 p-3">
                        <Link to="/courses" className="bg-[#ff9500] text-[14px] sm:text-[14px] text-white p-3 rounded-[10px] w-fit ">Explore Courses</Link>
                       <Link to="/pricing" className="bg-[#ffffff] text-black p-3 rounded-[10px] w-fit"> View Pricing</Link>
                    </div>
                </div>

                {/* Support Teams Logo */}

                <div className=" mb-1 w-full">
                    {/* Small screens → only 3 */}
                    <div className="flex space-x-4 bg-[#ffffff] justify-around md:hidden">
                        {supportTeams.slice(0, 4).map(team => (
                            <a key={team.id} href={team.link} target="_blank" rel="noopener noreferrer">
                                <img src={team.image} alt={`Team ${team.id}`} className="w-16 h-16" />
                            </a>
                        ))}
                    </div>

                    {/* Medium+ screens → all 7 */}
                    <div className="hidden md:flex bg-[#ffffff] space-x-4 justify-around">
                        {supportTeams.map(team => (
                            <a key={team.id} href={team.link} target="_blank" rel="noopener noreferrer">
                                <img src={team.image} alt={`Team ${team.id}`} className="w-16 h-16" />
                            </a>
                        ))}
                    </div>
                </div>

                {/* Homepage Video */}

                <div className="flex justify-center w-full ">
                    <img src={videoImg} alt="" className='w-full  h-auto object-cover' />
                </div>

                {/* Benefits Section  */}

                <div className=" py-4 px-8 flex flex-col space-y-9">
                    <div className=" ">
                        <h1 className='font-bold text-[36px] mb-3' >Benefits</h1>
                        <div className="space-y-5">
                            <p className='text-pretty text-[20px] text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio facilis voluptatibus sapiente unde ea a dignissimos repellat soluta!</p>
                            <a href=" " className=" bg-[#ffffff] p-3 rounded"> View All</a>
                        </div>
                    </div>
                    <div className=" gap-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center-safe ">
                        {benefits.map(benefit =>
                            <div key={benefit.id} className=" w- md:h-full p-5 bg-[#ffffff]">
                                <h1 className='font-extrabold text-[60px] flex justify-end-safe '>{benefit.num}</h1>
                                <h2 className="font-bold text-[20px]"> {benefit.title}</h2>
                                <p className=" text-[16px]">{benefit.text}</p>
                                <span className='flex justify-end'><i class='bx bx-right-arrow-alt text-2xl flex text-[28px] bg-[#f7f7f8] text-[#ff9500] border p-2 border-[#f7f7f8] rounded-[10px]'></i></span>

                            </div>)}
                    </div>
                </div>

                {/* Courses Section  */}

                <div className="py-4 px-8 flex flex-col space-y-9">
                    <div className="">
                        <h1 className='font-bold text-[36px] mb-3' >Our Courses</h1>
                        <div className="space-y-5">
                            <p className='text-pretty text-[20px] text-gray-600' >Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio facilis voluptatibus sapiente unde ea a dignissimos repellat soluta!</p>
                            <a href=" " className=" bg-[#ffffff] p-3 rounded"> View All</a>
                        </div>
                    </div>
                    <div className="gap-10 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
                        {courses.map(course =>
                            <div key={course.id} className="bg-[#ffffff] p-5 flex flex-col  space-y-5 rounded ">
                                <img src={course.image} alt="" />
                                <div className="sm:flex justify-between">
                                    <div className="flex space-x-5 py-3">
                                        <span className='border p-2 bg-[#ffffff] rounded-[10px]'>{course.duration}</span>
                                        <span className='border p-2 bg-[#ffffff] rounded-[10px]'>{course.difficulty}</span>
                                    </div>
                                    <h2 className='pb-[10px] font-medium self-center'>{course.Tutor}</h2>
                                </div>
                                <div className="">
                                    <h2 className="text-[24px] font-bold py-3"> {course.name}</h2>
                                    <p className="text-pretty text-[18px]">{course.info}</p>
                                </div>
                                <button href="" className="bg-[#f7f7f8] w-4/5 p-3 self-center rounded"> Get it Now </button>

                            </div>)}
                    </div>
                </div>

                {/* Testmonials Section  */}

                <div className="py-4 px-8 flex flex-col space-y-9">
                    <div className="">
                        <h1 className='font-bold text-[36px] mb-3' >Our Testimonials</h1>
                        <div className="space-y-5">
                            <p className='text-pretty text-[20px] text-gray-600' >Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio facilis voluptatibus sapiente unde ea a dignissimos repellat soluta!</p>
                            <a href=" " className=" bg-[#ffffff] p-3 rounded"> View All</a>
                        </div>
                    </div>
                    <div className="gap-10 grid grid-cols-1 md:grid-cols-2 place-items-center-safe">
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

                {/* pricing Section */}

                <div className="py-4 px-8 ">
                    <div className=" space-y-4">
                        <h1 className='font-bold text-[36px] mb-3'>Our Pricing</h1>
                        <div className="space-y-7 flex flex-col md:flex-row ">
                            <p className='text-pretty text-[20px] text-gray-600' >Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio facilis voluptatibus sapiente unde ea a dignissimos repellat soluta!</p>
                            <div className="bg-[#ffffff] w-[200px] p-3 flex items-center rounded-[10px] space-x-3 justify-center self-center mb-3">
                                <a href=" " className=" bg-[#ff9500] p-3 rounded"> Monthly</a>
                                <a href=" " className=" bg-[#ffffff] p-3 rounded"> Yearly</a>
                            </div>
                        </div>
                        <div className='grid grid-cols-1 md:grid-cols-2 place-self-center p-5 bg-[#ffffff] rounded-[18px] gap-7 md:w-[80%]'>
                            <div className=" bg-[#f7f7f8] p-5 rounded-[15px] place-items-center ">

                                {/* Free Plan  */}

                                <h1 className='text-[16px] bg-[#FFF9F0] text-center p-2 w-4/5 border border-[#fff1db] '>Free Plan</h1>
                                <h2><span className=' font-bold text-[50px] '>$0</span>/month</h2>
                                <div className=" flex flex-col items-center space-y-3 bg-[#ffffff] p-3 rounded-[15px]">
                                    <h1 className='font-bold text-[18px]'>Available Features</h1>
                                    <p className='border text-[14px] text-[#4C4C4D] border-[#f7f7f8] rounded-[10px] flex p-1 w-4/5 items-center justify-center space-x-3'><i className="bx bx-check p-1 bg-[#FFF4E5] "></i> <h2 className=''>Access to selected free courses</h2></p>
                                    <p className='border text-[14px] text-[#4C4C4D] border-[#f7f7f8] rounded-[10px] flex p-1 w-4/5 items-center justify-center space-x-3'><i className="bx bx-check p-1 bg-[#FFF4E5] "></i> <h2 className=''>Access to selected free courses</h2></p>
                                    <p className='border text-[14px] text-[#4C4C4D] border-[#f7f7f8] rounded-[10px] flex p-1 w-4/5 items-center justify-center space-x-3'><i className="bx bx-check p-1 bg-[#FFF4E5] "></i> <h2 className=''>Access to selected free courses</h2></p>
                                    <p className='border text-[14px] text-[#4C4C4D] border-[#f7f7f8] rounded-[10px] flex p-1 w-4/5 items-center justify-center space-x-3'><i className="bx bx-check p-1 bg-[#FFF4E5] "></i> <h2 className=''>Access to selected free courses</h2></p>
                                    <p className='border text-[14px] text-[#4C4C4D] border-[#f7f7f8] rounded-[10px] flex p-1 w-4/5 items-center justify-center space-x-3'><i className="bx bx-check p-1 bg-[#FFF4E5] "></i> <h2 className=''>Access to selected free courses</h2></p>
                                    <p className='border text-[14px] text-[#4C4C4D] border-[#f7f7f8] rounded-[10px] flex p-1 w-4/5 items-center justify-center space-x-3'><i className="bx bx-check p-1 bg-[#FFF4E5] "></i> <h2 className=''>Access to selected free courses</h2></p>
                                    <p className='border text-[14px] text-[#4C4C4D] border-[#f7f7f8] rounded-[10px] flex p-1 w-4/5 items-center justify-center space-x-3'><i className="bx bx-x p-1 bg-[#ffffff] border border-[#f7f7f8] "></i> <h2 className=''>Access to selected free courses</h2></p>
                                    <p className='border text-[14px] text-[#4C4C4D] border-[#f7f7f8] rounded-[10px] flex p-1 w-4/5 items-center justify-center space-x-3'><i className="bx bx-x p-1 bg-[#ffffff] border border-[#f7f7f8] "></i> <h2 className=''>Access to selected free courses</h2></p>

                                    {/* Button  */}

                                    <a href="" className="bg-[#FF9500] p-3 w-full text-center text-white rounded-[10px]">Get Started </a>

                                </div>
                            </div>

                            {/* Pro plan */}

                            <div className=" bg-[#f7f7f8] p-5 rounded-[15px] place-items-center ">
                                <h1 className='text-[16px] bg-[#FFF9F0] text-center p-2 w-4/5 border border-[#fff1db] '>Pro Plan</h1>
                                <h2><span className=' font-bold text-[50px]'>$79</span>/month</h2>
                                <div className=" flex flex-col items-center space-y-3 bg-[#ffffff] p-3 rounded-[15px]">
                                    <h1 className='font-bold text-[18px]'>Available Features</h1>
                                    <p className='border text-[14px] text-[#4C4C4D] border-[#f7f7f8] rounded-[10px] flex p-1 w-4/5 items-center justify-center space-x-3'><i className="bx bx-check p-1 bg-[#FFF4E5] "></i> <h2 className=''>Access to selected free courses</h2></p>
                                    <p className='border text-[14px] text-[#4C4C4D] border-[#f7f7f8] rounded-[10px] flex p-1 w-4/5 items-center justify-center space-x-3'><i className="bx bx-check p-1 bg-[#FFF4E5] "></i> <h2 className=''>Access to selected free courses</h2></p>
                                    <p className='border text-[14px] text-[#4C4C4D] border-[#f7f7f8] rounded-[10px] flex p-1 w-4/5 items-center justify-center space-x-3'><i className="bx bx-check p-1 bg-[#FFF4E5] "></i> <h2 className=''>Access to selected free courses</h2></p>
                                    <p className='border text-[14px] text-[#4C4C4D] border-[#f7f7f8] rounded-[10px] flex p-1 w-4/5 items-center justify-center space-x-3'><i className="bx bx-check p-1 bg-[#FFF4E5] "></i> <h2 className=''>Access to selected free courses</h2></p>
                                    <p className='border text-[14px] text-[#4C4C4D] border-[#f7f7f8] rounded-[10px] flex p-1 w-4/5 items-center justify-center space-x-3'><i className="bx bx-check p-1 bg-[#FFF4E5] "></i> <h2 className=''>Access to selected free courses</h2></p>
                                    <p className='border text-[14px] text-[#4C4C4D] border-[#f7f7f8] rounded-[10px] flex p-1 w-4/5 items-center justify-center space-x-3'><i className="bx bx-check p-1 bg-[#FFF4E5] "></i> <h2 className=''>Access to selected free courses</h2></p>
                                    <p className='border text-[14px] text-[#4C4C4D] border-[#f7f7f8] rounded-[10px] flex p-1 w-4/5 items-center justify-center space-x-3'><i className="bx bx-check p-1 bg-[#FFF4E5] "></i> <h2 className=''>Access to selected free courses</h2></p>
                                    <p className='border text-[14px] text-[#4C4C4D] border-[#f7f7f8] rounded-[10px] flex p-1 w-4/5 items-center justify-center space-x-3'><i className="bx bx-check p-1 bg-[#FFF4E5] "></i> <h2 className=''>Access to selected free courses</h2></p>

                                    <a href="" className="bg-[#FF9500] p-3 w-full text-center text-white rounded-[10px]">Get Started </a>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
            {/* <Footer /> */}
        </>
    )
}

export default Home