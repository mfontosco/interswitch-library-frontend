import React from 'react'
import { MdOutlineEdit } from "react-icons/md";
import Colors from '../Color/Colors';


const DisplayName = () => {
  return (
    <div className='bg-white rounded-md shadow-sm w-1/2 ml-56 mt-4  pb-6 pt-3 '>
    <div className='flex justify-center items-center mb-2'>
      <Colors size={"100px"} bgColor={"pink"} borderColor={"#F2AFEF"}/>
    </div>
     <div className="flex flex-col justify-center items-center">
     <h2 className='mb-2'>Task Assignment Colour</h2>
     <section className='flex justify-evenly gap-6'>
      <div className='flex justify-center items-center flex-col'>
      <Colors size={"60px"} bgColor={"pink"} borderColor={"light-pink"}/>
      <p className='text-xs'>Pink (Default)</p>
      </div>
      <div className='flex justify-center items-center flex-col'>
      <Colors size={"60px"} bgColor={"blue"} borderColor={"#AEDEFC"}/>
      <p className='text-xs'>Blue </p>
      </div>
      <div className='flex justify-center items-center flex-col'>
      <Colors size={"60px"} bgColor={"#E4E4D0"} borderColor={"#7AA874"}/>
      <p className='text-xs'>Green</p>
      </div>
      <div className='flex justify-center items-center flex-col'>
      <Colors size={"60px"} bgColor={"#CE5A67"} borderColor={"#F79BD3"}/>
      <p className='text-xs'>Red</p>
      </div>
      <div className='flex justify-center items-center flex-col'>
      <Colors size={"60px"} bgColor={"#FFDBAA"} borderColor={"#FFEECC"}/>
      <p className='text-xs'>Yellow</p>
      </div>
     
     </section>
     <button className='mb-2 text-xs mt-2 bg-black text-white rounded-sm py-1 px-2'>
     Save Colour
     </button>
     </div>
      <div className=''>
        <p className=" text-xs mr-6 text-gray-200 flex justify-end items-center">
        <span className=''><MdOutlineEdit /></span>
        Edit Display Name</p>
      </div>
      <hr/>
      <section className='w-full flex flex-col justify-center items-center'>
        <h2 className='mb-2'>Display Name</h2>
        <div>
      <input className="opacity-50 bg-gray-300 text-gray-600 cursor-not-allowed" disabled />
       </div>
       <button className='mb-10 text-xs mt-2 bg-black text-white rounded-sm py-1 px-2'>Save Display Name</button>
       <hr/>
       <div className='border py-2 w-full flex justify-center items-center '>
            <p className='text-sm flex justify-center items-center'><span className='text-lg'>Username:</span>ayeniisaac1on1@gmail.com</p>
            
        </div>
        <hr/>
        <div><p>Role:</p></div>
      </section>
      <section>
      
       
      </section>
    </div>
  )
}

export default DisplayName
