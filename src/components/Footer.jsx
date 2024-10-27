import React from 'react'
import Image from "next/image";
import icons from "./../../public/footericons.png"

function Footer() {
  return (
    <>
    <div className='sm:w-full max-sm:w-full sm:h-[77px] w-[1000px]  h-[69px] bg-[#111111] flex sm:flex-row flex-col sm:justify-between items-center justify-center sm:p-[16px_70px] p-[15px_0]' >
        <div>
            <Image src={icons} alt=''/>
        </div>
        <div>
            <a href="" className='text-[white] w-[189px] h-[30px] underline '>www.niftytrader.in</a>
        </div>
    </div>
    </>
  )
}

export default Footer