import React from 'react'
import student from "./images/bg-header-sqi-1.png"

function Bodystyle() {
  return (
    <>
      
      <div className='grid grid-cols-2'>

        <div className="p-10 ">
            <div className=''><h1 className="text-[#000e42] hover:text-[#000e42e2] text-7xl font-bold cursor-pointer  ">Study to become a global talent</h1></div>
            <div className="flex flex-col mt-8 text-m    ">
            <p className="text-[#474747]">Learn new tech skills using a world-class curriculum from  </p>
            <p className="text-[#474747]">top industry experts in an accredited institution.</p>
            </div>
            <button className="bg-[#00208A] hover:bg-[#000e42] mt-10 px-8 py-3 text-white">Start Now</button>
        </div>

        <div>
            <img src={student} className="h-568 w-578" alt="" />
        </div>


      </div>




    </>
  )
}

export default Bodystyle
