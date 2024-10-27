import React from 'react'
import Image from "next/image";
import logo from "./../../public/Logo.png"

function Navbar() {
  return (
    <>
   
    <div className='w-full fixed z-10 sm:h-[77px]  h-[51px] flex justify-between sm:p-[16px_70px] p-[8px_20px]  bg-[#11111180] border-[#333333] border-b-[1px] top-0 left-0'>
        <Image className='sm:w-[200px] sm:h-[45px] w-[155px] h-[35px] ' alt='' src={logo}/>
        
        <button className='sm:w-[152px] sm:h-[40px] w-[94px] h-[30px] border-[1px] border-[white] rounded-[4px] sm:p-[8px_24px] p-[6px_8px] sm:text-[16px] text-[12px]
        gap-[10px] text-[white] hover:text-black hover:bg-white'>Visit Website</button>
        

     </div>
    
    
    </>
  )
}

export default Navbar