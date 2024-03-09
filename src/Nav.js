import React from 'react'
import logo from "./images/co.jpg"

function Nav() {
  return (
    <>
      <nav className="bg-[#ffffff] px-15 p-4 flex space-x-2 pt-5  ">


                <div>
                    <img src={logo} className=" w-12 h-12 mr-40 ml-40 *:" alt="" />
                </div>

                <div className="mr-4">
                    <ul className="flex item-center gap-4 cursor-pointer  ">
                        <li>About</li>
                        <li>Programmes</li>
                        <li>Admission</li>
                        <li>E-Portal</li>
                        <li>SQI Scholarship</li>
                        <li>Scholarship</li>
                        <li>News</li>
                    </ul>
                </div>



      </nav>
    </>
  )
}

export default Nav
