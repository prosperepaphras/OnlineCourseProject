import { Mail, MapPin, Phone } from 'lucide-react';
import React from 'react'
import { useState } from 'react';

const ContactPage = () => {

    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        subject: "",
        message: ""
    });

    // Step 2: Handle input changes
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    // Step 3: Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault(); // Prevent page reload
        console.log("Form Data Submitted:", formData);
        // Here you can send the data to an API or backend
        alert("Form submitted successfully!");
        // Optional: reset the form
        setFormData({
            firstName: "",
            lastName: "",
            email: "",
            phone: "",
            subject: "",
            message: ""
        });
    };

    const contactInfo = [
        {id: 1, icon:<Mail size={30} />, detail: 'support@skillbridge.com'},
        {id: 2, icon:<Phone size={30} />, detail: '+91 00000 00000'},
        {id: 3, icon:<MapPin size={30} />, detail: 'Some Where in the World'}
    ]
    return (
        <>
            <div className="p-5 bg-[#f7f7f8]">
                {/* Contact Intro  */}
                <div className=" grid md:grid-cols-3 md:gap-10 p-3 mb-5">
                    <h1 className='text-[28px] md:text-[34px] lg:text-[44px] mb-3 font-medium col-span-1'>Contact Us</h1>
                    <p className='text-[14px] md:text-[16px] lg:text-[18px] text-pretty col-span-2'>Welcome to SkillBridge's Pricing Plan page, where we offer two comprehensive options to cater to your needs: Free and Pro. We believe in providing flexible and affordable pricing options for our services. Whether you're an individual looking to enhance your skills or a business seeking professional development solutions, we have a plan that suits you. Explore our pricing options below and choose the one that best fits your requirements.</p>
                </div>

                {/* Contact Form  */}
                <div className="contact-form border bg-white p-6 rounded-md max-w-4xl mx-auto">
                    <form onSubmit={handleSubmit} className="space-y-4">
                        {/* First Name and Last Name */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <label htmlFor="FN" className="block text-sm font-medium text-gray-700">First Name</label>
                                <input
                                    type="text"
                                    id="FN"
                                    name="firstName"
                                    value={formData.firstName}
                                    onChange={handleChange}
                                    required
                                    placeholder="Enter First Name"
                                    className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:ring-orange-500 focus:border-orange-500"
                                />
                            </div>
                            <div>
                                <label htmlFor="LN" className="block text-sm font-medium text-gray-700">Last Name</label>
                                <input
                                    type="text"
                                    id="LN"
                                    name="lastName"
                                    value={formData.lastName}
                                    onChange={handleChange}
                                    required
                                    placeholder="Enter Last Name"
                                    className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:ring-orange-500 focus:border-orange-500"
                                />
                            </div>
                        </div>

                        {/* Email and Phone */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    placeholder="Enter your Email"
                                    className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:ring-orange-500 focus:border-orange-500"
                                />
                            </div>
                            <div>
                                <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone</label>
                                <input
                                    type="tel"
                                    id="phone"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    placeholder="Enter Phone Number"
                                    className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:ring-orange-500 focus:border-orange-500"
                                />
                            </div>
                        </div>

                        {/* Subject */}
                        <div>
                            <label htmlFor="subject" className="block text-sm font-medium text-gray-700">Subject</label>
                            <input
                                type="text"
                                id="subject"
                                name="subject"
                                value={formData.subject}
                                onChange={handleChange}
                                placeholder="Enter your Subject"
                                className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:ring-orange-500 focus:border-orange-500"
                            />
                        </div>

                        {/* Message */}
                        <div>
                            <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
                            <textarea
                                id="message"
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                required
                                placeholder="Enter your Message here..."
                                className="mt-1 block w-full border border-gray-300 rounded-md p-2 h-32 resize-none focus:ring-orange-500 focus:border-orange-500"
                            />
                        </div>

                        {/* Submit Button */}
                        <div className="text-center">
                            <button
                                type="submit"
                                className="bg-[#ff9500] text-white font-semibold py-2 px-6 rounded-md transition duration-300"
                            >
                                Send Your Message
                            </button>
                        </div>
                    </form>

                    <div className="">
                        {contactInfo.map(info => 
                            <div className="">
                                <p>{info.icon}</p>
                                <p>{info.detail}</p>
                            </div>
                        )}
                    </div>
                </div>


            </div>
        </>
    )
}

export default ContactPage