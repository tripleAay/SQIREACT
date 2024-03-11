import React from 'react'

function Take() {
  return (
    <>
        <div className='flex items-center justify-center  bg-[#000442] p-10 text-white'   >

            <div className='w-1/2' >

            </div>

            {/* second div */}
            <div className='w-1/2 text-left mt-4' >
                <h1 className='text-3xl text-extrabold mt-4' >Take a Tour</h1>
                <div className='mt-5'> Our campus is a living centre for innovation and creativity 
                    for sustainability. We love showing students our campus and 
                    allowing them to see, hear and feel the excitement that 
                    comes with being part of the Central community which 
                    is an atmosphere that is open-minded, always 
                    exciting, and filled with academic 
                    excellence.

                </div> 
                <button className='bg-[#153246] px-4 py-2 rounded-lg mt-5 :hover' >Apply New</button>
            </div>
        </div>
    </>
  )
}

export default Take
