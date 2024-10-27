'use client'
import React from 'react'
import Image from "next/image";
import Navbar from './Navbar';
import img from "./../../public/image30.png"
import button from "./../../public/buttons.png"

function Sec1() {
    return (
        <>
        <section>
            <div className=' sm:w-full  max-sm:justify-center sm:h-[700px] h-[1195px]  bg-gradient-to-r from-[#FFC7C7] to-[#0AA6D7] ' >
                <div className='bg-section1  w-[726px] sm:h-[700px] absolute z-[0]'></div>
                
                

                <div className='w-[100%] absolute  sm:top-[150px] sm:left-[75px] sm:grid sm:grid-cols-[60%_40%] sm:gap-[10px] flex flex-col text-[white] z-1 p-[60px_24px] sm:text-start text-cente ' >
                    <div className='w-[100%] text-center sm:text-start my-4'>
                        <h1 className='w-[750px] font-bold text-[40px] max-sm:w-[100%]'>STOCK SCREENING SIMPLIFIED!</h1>
                        <p className='w-[600px] mx-auto sm:mx-0 text-[20px] my-5'>Find Winning Stock Faster with Nifty Trader's Advanced Stock Screening Tool</p>
                        <button className='bg-[#13A8D7] p-[14px_30px] rounded-[4px] text-[20px] hover:text-[#13A8D7] hover:bg-transparent hover:border-[2px] hover:border-[#13A8D7] font-semibold my-5'>Free Trial</button>
                        <div className='absolute sm:hidden top-[50%] left-[50%] -translate-y-2/4 -translate-x-2/4'>
                            <Image src={button}/>
                        </div>
                        <Image className='w-[100%] sm:hidden ' src={img}/>
                        

                    </div>
                    <div className='overflow-hidden rounded-[40px] relative sm:w-[100%] w-full mx-auto text-center sm:block hidden'>
                        <div className='absolute  top-[50%] left-[50%] -translate-y-2/4 -translate-x-2/4'>
                            <Image src={button}/>
                        </div>
                        <Image className='w-[80%] ' src={img}/>

                    </div>
                   
                </div>

            </div>
            </section>
        </>
    )
}

export default Sec1