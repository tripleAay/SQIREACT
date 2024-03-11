import React from 'react'
import Wema from "./images/Wema-Bank-Logo.png"
import edozzier from "./images/edozzier.png"
import interswitch from "./images/Interswitch.png"
import Niger from "./images/Nigerian_Army.png"
import micro from "./images/Microsoft_logo.png"
import paystack from "./images/Paystack.png"
import money from "./images/moneymie.png"
import google from "./images/google.png"
import brewery from "./images/brewery.png"
import clan from "./images/clan-logo.png"
import alat from "./images/aella-credit.png"
import angela from "./images/Andela-log-landscape-blue-400px.png"
import ela from "./images/aella-credit.png"

function Alumni() {
    return (
        <>
            <div className="flex flex-col p-10 text-left g-5 ">
                <div className="pl-10" >
                    <h4 className="text-extrabold text-2xl text-[#333333] line-clamp-2 " >Our alumni work at world-class  </h4>
                    <h4 className="text-extrabold text-2xl text-[#333333] line-clamp-2 " >companies around the world including</h4>
                </div>


                {/* first column */}
                        <div className="flex item-center justify-center gap-12 mt-10  " >

                            <div className="flex flex-col gap-8 w-18" >
                                <img className='w-18 h-16' src={google} alt="" />
                            </div>


                            <div className="flex flex-col gap-8 w-18">
                                <img className='w-18 h-16' src={interswitch} alt="" />
                            </div>

                            <div className="flex flex-col gap-8 w-18"></div>
                                <img className='w-18 h-16' src={angela} alt="" />
                            <div>

                            <div className="flex flex-col gap-8 w-18"></div>
                                <img className='w-18 h-16' src={micro} alt="" />
                            <div>

                
                        </div>
                </div>

                </div>
                
                {/* second column  */}
                <div className="flex item-center justify-center gap-12 mt-10 " >

                    <div className="flex flex-col gap-8 w-18" >
                        <img className='w-18 h-16' src={paystack} alt="" />
                    </div>


                    <div className="flex flex-col gap-8 w-18">
                        <img className='w-18 h-16' src={Wema} alt="" />
                    </div>

                    <div className="flex flex-col gap-8 w-18"></div>
                    <img className='w-18 h-16' src={ela} alt="" />
                    <div>

                        <div className="flex flex-col gap-8 w-18"></div>
                        <img className='w-18 h-16'src={money} alt="" />
                        <div>


                        </div>
                    </div>

                </div>

                {/* third column */}
                <div className="flex item-center justify-center gap-12 mt-10 " >

                    <div className="flex flex-col gap-8 w-18" >
                        <img className='w-18 h-16' src={edozzier} alt="" />
                    </div>


                    <div className="flex flex-col gap-8 w-18">
                        <img className='w-18 h-16' src={Niger} alt="" />
                    </div>

                    <div className="flex flex-col gap-8 w-18"></div>
                    <img className='w-18 h-16' src={brewery} alt="" />
                    <div>

                        <div className="flex flex-col gap-8 w-18"></div>
                        <img className='w-18 h-16'src={clan} alt="" />
                        <div>


                        </div>

                    </div>

                </div>

            </div>
        </>
    )
}

export default Alumni;
