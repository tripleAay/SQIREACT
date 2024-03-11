import React from 'react'
import softengr from "./images/software-engineering-630x330-1.webp"
import softengra from "./images/DATA-SQI.jpg"
import "./App.css"
import softengrb from "./images/product.jpg";
import softengre from "./images/digital-literacy.jpg"


function Topcourse() {
    return (
        <>
            <div className='flex  item-center justify-center space-x-3 gap-10 p-10 cursor-pointer'>


                <div className='flex justify-center p-10'>

                    <div className=' bg-white text-block w-1/2  p-10' >

                        <div className='text-left m-10 p-10'>
                            <h1 className='text-5xl'>Our Top Courses</h1>
                            <p className='mt-4'>Take a look at some of our popular courses</p>
                            <a className='mt-4' href="">View all Courses</a>
                        </div>

                        <div className='bg-[#D5EAF3] flex flex-col item-left  rounded-xl p-12 px-10 '>
                            <img className=' w-31 h-39 rounded-xl' src={softengr} alt="" />
                            <h4 className='text-left mt-4 mb-3 text-2xl' >Software Engineering</h4>
                            <div className='Stubborn  text-justify text-full'>
                                Software Engineering is one of the most in-demand jobs across the globe today.

                                Software Engineers are also known as programmers, developers or coders. They are the ones behind all
                                the apps and software you use today either on your phone or computer within your browser. Software
                                such as banking apps, booking apps, mailing apps (e.g Gmail), Chat apps (e.g WhatsApp) and other
                                Social apps (e.g Twitter, Facebook) and many more are created by software engineers.

                            </div>
                            <div className="text-left  mt-5">
                                <a href="">Learn More</a>
                            </div>
                        </div>

                        <div className='bg-[#e0d5c0] flex flex-col item-left  rounded-xl p-12 px-10 mt-5'>
                            <img className=' w-31 h-39 rounded-xl' src={softengrb} alt="" />
                            <h4 className='text-left mt-4 mb-3 text-2xl' >UI/UX – Product Design</h4>
                            <div className='Stubborn  text-justify text-full'>
                                More than ever before individuals and businesses are relying on digital products and services. From online meeting tools to finance, from e-commerce platforms to healthcare and food apps. Making an intuitive digital product design is even more import at this time as it determines the overall experience of the users.

                                Here, you’ll build your product design skillset from the bottom up with lessons, mentorship sessions, and career advice from our design professionals.
                            </div>
                            <div className="text-left  mt-5">
                                <a href="">Learn More</a>
                            </div>
                        </div>
                    </div>



                    <div className=' bg-white  text-block w-1/2  p-10'>
                        <div className='bg-[#eeefbd] flex flex-col item-left  rounded-xl p-12 px-10 mt-5'>
                            <img className=' w-31 h-39 rounded-xl' src={softengra} alt="" />
                            <h4 className='text-left mt-4 mb-3 text-2xl' >Data Science & Analysis</h4>
                            <div className='Stubborn  text-justify text-full'>
                            The eruption of data is transforming indiviuals and businesses. Companies either 
                            big or small are now expecting their business decisions to be based on data-led insight.

                                Data specialists have a tremendous impact on business strategies and marketing 
                                tactics because everyone now depends on data to formulate improved strategies for the future of their companies.
                            </div>
                            <div className="text-left  mt-5">
                                <a href="">Learn More</a>
                            </div>
                        </div>

                        <div className='bg-[#dfd5e8] flex flex-col item-left  rounded-xl p-12 px-10 mt-10'>
                            <img className=' w-31 h-39 rounded-xl' src={softengre} alt="" />
                            <h4 className='text-left mt-4 mb-3 text-2xl' >Data Science & Analysis</h4>
                            <div className='Stubborn  text-justify text-full'>
                            This course is designed to prepare you for success in a modern world full of computers—not only the traditional computers such as desktop and notebook PCs but also computers that you interact with in other places too, like your bank’s ATM or your employer’s computerized cash register. In this course, you will learn about the technologies that drive our computerized society, including the Internet and local area networks (LANs).

                            Taking this course will help you become a digitally literate person—that is, someone who understands how computer technology fits into our modern society and knows how to navigate a variety of computing environments.
                            </div>
                            <div className="text-left  mt-5">
                                <a href="">Learn More</a>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Topcourse
