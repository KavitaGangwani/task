'use client'
import React from 'react'
import Image from "next/image";
import img from "./../../public//Ellipse66.png"
import img1 from "./../../public//Vector13.png"
import img2 from "./../../public//Vector11.png"
import img3 from "./../../public/Group2541.png"

function Sec8() {
    return (
        <>
            <div className='w-full h-[400px] bg-[#ECF5FE] grid sm:grid-cols-2 grid-cols-1 overflow-hidden my-8'>
                <div className='relative overflow-hidden max-sm:w-[100%]'>
                    <Image className='absolute sm:top-[-10px] sm:left-[340px] left-[600px] z-0' src={img}/>
                    <Image className='absolute sm:top-[0px] sm:left-[80px] left-[300px] z-1' src={img1}/>
                    <Image className='absolute sm:top-[-70px] sm:left-[0px]  z-2' src={img2}/>
                    <Image className='absolute w-[380px] h-[380px] sm:top-[0px] sm:left-[220px] max-sm:hidden z-3' src={img3}/>
                   
                    <div className=' z-5 w-[600px] mx-auto absolute left-[500px] sm:hidden   my-20 text-center ' >
                        <h1 className='text-[35px] text-center'>Screening Like a Pro with </h1>
                        <h1 className='text-[35px] text-center font-semibold'>Nifty Trader</h1>
                        <h2 className='text-[#999999] text-[20px] text-center'>Stop wasting time and start winning! Get access to  Nifty Traders Stock Screeners today!</h2>
                        <button className='bg-[#4399EB] sm:w-[290px] w-[350px] p-[20px_60px] text-[white] text-[20px] font-bold my-5 rounded-[4px]' >Start Free Trial Now</button>
                   
                    </div>
                    
                </div>
                <div className='max-sm:hidden' >
                    <div className=' w-[600px] mx-auto max-sm:hidden  my-20 text-center' >
                        <h1 className='text-[35px] text-center'>Screening Like a Pro with </h1>
                        <h1 className='text-[35px] text-center font-semibold'>Nifty Trader</h1>
                        <h2 className='text-[#999999] text-[20px] text-center'>Stop wasting time and start winning! Get access to  Nifty Traders Stock Screeners today!</h2>
                        <button className='bg-[#4399EB] sm:w-[290px] w-[10px] p-[20px_50px] text-[white] text-[20px] font-bold my-5 rounded-[4px]' >Start Free Trial Now</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Sec8