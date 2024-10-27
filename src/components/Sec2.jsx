import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


import { faArrowRight } from '@fortawesome/free-solid-svg-icons'


function Sec2() {
    return (
        <>
            <div className='bg-[#E1E1E1] sm:h-[250px] h-[200px] w-full   flex flex-col justify-center items-center py-6 ' >
                <h1 className='font-bold sm:text-[30px] md:text-[35px] max-sm:w-[329px] text-[20px] text-center  max-md:w-[450px] max-lg:w-[650px] '>THE ULTIMATE DESTINATION FOR STOCK MARKET INSIGHT</h1>
                <h2 className='sm:text-[20px] md:text-[22px] text-[14px] text-center max-sm:w-[317px]
                max-md:w-[427px] max-lg:w-[600px]'>Join 1 million Traders & Investors who trust Nifty Trader for smart trading & real-time stock insights.</h2>
                <button className='border border-[black] rounded-[4px] w-[200px] sm:p-[16px_28px] p-[8px_12px]  my-2 gap-[10px]'>Explore Features <FontAwesomeIcon icon={faArrowRight} /></button>
            </div>
        </>
    )
}

export default Sec2