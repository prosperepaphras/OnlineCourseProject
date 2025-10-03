import { Backpack, Book, CrownIcon, Drama, Medal, Puzzle, ShieldCheck, Siren } from 'lucide-react'
import React from 'react'

const AboutUs = () => {
    const achievements = [
        {id:1, icon:<CrownIcon className="w-11 h-11"/>, title:"Trusted by Thousands", text:"We have successfully served thousands of students, helping them unlock their potential and achieve their career goals. "},
        {id:2,  icon:<Medal className="w-11 h-11"/>, title:"Award-Winning Courses", text:"Our courses have received recognition and accolades in the industry for their quality, depth of content, and effective teaching methodologies."},
        {id:3, icon:<Drama className="w-11 h-11"/> ,  title:"Positive Student Feedback", text:"We take pride in the positive feedback we receive from our students, who appreciate the practicality and relevance of our course materials."},
        {id:4, icon:<ShieldCheck className="w-11 h-11"/>, title:"Industry Partnerships", text:"We have established strong partnerships with industry leaders, enabling us to provide our students with access to the latest tools and technologies"},
    ]
     const goals = [
        {id:1, icon:<Backpack className="w-11 h-11" />, title:"Provide Practical Skills", text:"We focus on delivering practical skills that are relevant to the current industry demands. Our courses are designed to equip learners with the knowledge and tools needed to excel in their chosen field. "},
        {id:2,  icon:<Book className="w-11 h-11" />, title:"Foster Creative Problem-Solving", text:"We encourage creative thinking and problem-solving abilities, allowing our students to tackle real-world challenges with confidence and innovation."},
        {id:3, icon:<Puzzle className="w-11 h-11"/> ,  title:"Promote Collaboration and Community", text:"We believe in the power of collaboration and peer learning. Our platform fosters a supportive and inclusive community where learners can connect, share insights, and grow together."},
        {id:4, icon: <Siren className="w-11 h-11"/>, title:"Industry Partnerships", text:"We have established strong partnerships with industry leaders, enabling us to provide our students with access to the latest tools and technologies"},
    ]
    return (
        <>
            <div className="bg-[#f7f7f8] px-[5%] space-y-10 pb-10">
                {/* About Us Intro  */}
                <div className="grid md:grid-cols-2 md:gap-10 p-3 mb-5">
                    <h1 className='text-[28px] md:text-[34px] lg:text-[44px] mb-3 font-medium col-span-1'>About Skillbridge</h1>
                    <p className='text-[14px] md:text-[16px] lg:text-[18px] text-pretty col-span-1'>Welcome to our platform, where we are passionate about empowering individuals to master the world of design and development. We offer a wide range of online courses designed to equip learners with the skills and knowledge needed to succeed in the ever-evolving digital landscape.</p>
                </div>

                {/* Achievement Block  */}

                <div className="space-y-5">
                    <div className=" space-y-5">
                        <h1 className='font-bold text-[36px] mb-3' >Achievements</h1>
                        <p className='text-pretty text-[20px] text-gray-600'> Our commitment to excellence has led us to achieve significant milestones along our journey. Here are some of our notable achievements</p>
                    </div>
                    <div className=" grid md:grid-cols-2 gap-7">
                        {achievements.map(achieve => 
                            <div className="p-5 space-y-3 bg-[#ffffff] rounded-[10px] ">
                                <div className=""><h1 className='text-[#FF9500] font-bold w-9 h-11'>{achieve.icon}</h1></div>
                                <div className="space-y-2">
                                    <h1 className="font-medium text-[18px] md:text-[20px]">{achieve.title}</h1>
                                    <p className='text-[14px] md:text-[16px]'>{achieve.text}</p>
                                </div>
                            </div>
                        )}
                    </div>
                </div>

                {/* Goals Block  */}
                <div className="space-y-5">
                    <div className=" space-y-5">
                        <h1 className='font-bold text-[36px] mb-3' >Our Goals</h1>
                        <p className='text-pretty text-[20px] text-gray-600'> At SkillBridge, our goal is to empower individuals from all backgrounds to thrive in the world of design and development. We believe that education should be accessible and transformative, enabling learners to pursue their passions and make a meaningful impact.
                        Through our carefully crafted courses, we aim to: </p>
                    </div>
                    <div className=" grid md:grid-cols-2 gap-7">
                        {goals.map(goal => 
                            <div className="p-5 space-y-3 bg-[#ffffff] rounded-[10px] ">
                                <div className=""><h1 className='text-[#FF9500] font-bold w-9 h-11'>{goal.icon}</h1></div>
                                <div className="space-y-2">
                                    <h1 className="font-medium text-[18px] md:text-[20px]">{goal.title}</h1>
                                    <p className='text-[14px] md:text-[16px]'>{goal.text}</p>
                                </div>
                            </div>
                        )}
                    </div>
                </div>

            </div>
        </>
    )
}

export default AboutUs