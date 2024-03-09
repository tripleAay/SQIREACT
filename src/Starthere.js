import React from 'react'
import frameone from "./images/college.jpg"
import frametwo from "./images/prof.jpg"
import framethree from "./images/certificate.jpg"

function Starthere() {
  return (
    <>


            <div className=" cursor-pointer flex flex-col items-left ">
                <div className='px-15  '  > 
                    <h1 className='text-2xl  ' >Start here. Change the world.</h1> 
                </div>
                <div className='grid grid-cols-3 p-5 g-5'>
                        
                        <div className='px-5 p-4 '>
                        <div className='p-4 text-justify cursor-pointer '><img src={frameone} className=" w-m  *:" alt="" />
                        <h5 className='text-[#000e54] text-left text-xl  text-bold mt-7'>National Innovative 
                        Diploma (NID)</h5></div>
                        <div className='text-wrap p-4 text-justify  '>
                        The National Innovation Diploma (NID) offered at SQI College of ICT is 
                        a 2 year approved academic program of the National Board for Technical Education (NBTE).
                        </div>


                        <div className='mt-4 px-5 text-left'>
                            <button className='' >Learn More</button>
                            <hr className='mt-3 outline-4 shadow-lg'></hr>
                        </div>
                        </div>

                        <div>
                        <img src={frametwo} className=" w-m  *:" alt="" />
                        </div>
                        <div>
                        <img src={framethree} className=" w-m  *:" alt="" />
                        </div>

                </div>
            </div>


    </>
  )
}

export default Starthere
