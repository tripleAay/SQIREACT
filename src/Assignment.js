import { Input } from 'postcss'
import React from 'react'
import { useState } from 'react'
import Correction from './Correction';

function Assignment() {
   
    const  [myName, setfirstMyName] = useState("idris")
    

   const changeName = ()=>{
    setfirstMyName("Adekunle")
   
    }

    const del = ()=>{
      myName = " "  ;   
    }
  return (
    <div>
        <div className='mt-10 p-10 bg-slate-400'>
        <input  placeholder="Name" type="text" />
        <input  placeholder="Name" type="text" />



        <h1 className='mb-5'>{myName}</h1>
         {/* <button className='px-4 py-2 mr-5 bg-black text-white rounded-lg' onClick={()=>setfirstMyName("Adekunle")}>Change Name</button> */}

         <button className='px-4 py-2 mr-5 bg-black text-white rounded-lg' 
         onClick={changeName}>Change Name</button>


         <button className='px-4 py-2 mr-5 bg-black text-white rounded-lg'>Edit</button>
         <button className='px-4 py-2 mr-5 bg-black text-white rounded-lg' onClick={del}>Delete</button>
        </div>
        <Correction/>
    </div>
  )
}

export default Assignment
