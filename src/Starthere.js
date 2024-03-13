import React from 'react'
import frameone from "./images/college.jpg"
import frametwo from "./images/prof.jpg"
import framethree from "./images/certificate.jpg"
import "./App.css"

function Starthere() {
  return (
    <>


            <div className=" cursor-pointer flex flex-col items-left ">
                <div className='px-15 text-left pl-10 '  > 
                    <h1 className='text-3xl mr-10 text-extrabold p-5 -mb-14  ' >Start here. Change the world.</h1> 
                </div>
                <div className='grid grid-cols-3  p-5 g-2'>
                        
                        <div className='px-5 p-4 '>
                        <div className='p-4 text-justify cursor-pointer '><img src={frameone} className=" w-m  *:" alt="" />
                        <h5 className='text-[#000e54] text-left text-xl  text-extrabold mt-7'>National Innovative 
                        Diploma (NID)</h5></div>
                        <div className='text-wrap p-4 text-justify  '>
                        The National Innovation Diploma (NID) offered at SQI College of ICT is 
                        a 2 year approved academic program of the National Board for Technical Education (NBTE).
                        </div>


                        <div className='mt-4 px-5 text-left'>
                            <button className='' >Learn More</button>
                            <hr className='mt-3  shadow-lg border-t-2 border-dashed border-gray-500 my-4'></hr>
                        </div>
                        </div>

                        {/* second grid */}

                        <div className='px-5 p-4 '>
                        <div className='p-4 text-justify cursor-pointer '><img src={frametwo} className=" Pix   w-m  *:" alt="" />
                        <h5 className='text-[#000e54] text-left text-xl  text-extrabold mt-7'>Professional Diploma Certificate</h5></div>
                        <div className='text-wrap p-4 text-justify  '>
                        The Professional Certificate Program is 1 year practical training with wide range of edge-cutting IT certification courses offered in SQI College of ICT to people who want to advance their career.
                        </div>


                        <div className='mt-4 px-5 text-left'>
                            <button className='' >Learn More</button>
                            <hr className='mt-3  shadow-lg border-t-2 border-dashed border-gray-500 my-4'></hr>
                        </div>
                        </div>

                        {/* third grid */}

                        <div className='px-5 p-4 '>
                        <div className='p-4 text-justify cursor-pointer '><img src={framethree} className=" w-m  *:" alt="" />
                        <h5 className='text-[#000e54] text-left text-2xl  text-extrabold  mt-7'>Certification Program</h5></div>
                        <div className='text-wrap p-4 text-justify  '>
                        The Certificate Program is a short-term training, 2 weeks to 6 months with a wide range of edge-cutting IT certification courses offered in SQI College of ICT to people who want to advance their careers.
                        </div>


                        <div className='mt-4 px-5 text-left'>
                            <button className='' >Learn More</button>
                            <hr className='mt-3  shadow-lg border-t-2 border-dashed border-gray-500 my-4'></hr>
                        </div>
                        </div>






                   

                </div>
            </div>


    </>
  )
}

export default Starthere
