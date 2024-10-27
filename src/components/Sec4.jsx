import React from 'react'

function Sec4() {
    return (
        <>
            <div className=' w-full relative z-[0] max-sm:flex max-sm:flex-col max-sm:justify-center max-sm:items-center '>
                <div className='w-[1450px] relative shadow-[0_0_15px_0_#0000001A] rounded-[8px] mx-auto  overflow-hidden h-[200px]  sm:grid sm:grid-cols-2 flex flex-col max-sm:justify-center max-sm:items-center  max-sm:bg-section4 bg-cover'>
                    <div >
                    </div>
                    <div className="min-sm:w-[100%]  bg-section4 relative">
                        <button className=' w-[200px] font-bold text-[white]  p-[15px_20px] text-[22px] gap-[10px] rounded-[8px] absolute bg-gradient-to-r from-[#537E95] to-[#004063] sm:top-[70px] sm:left-[490px] max-sm:top-[20px] max-sm:left-[-122px] hover:text-[#004063] hover:border-[2px] hover:border-[#004063] hover:bg-transparent'>Get Free Trial</button>
                    </div>
                </div>
                <div className='absolute sm:top-[60px] sm:left-[140px] w-[966px] top-[10px] max-sm:left-[365px] max-sm:text-[white]'>
                    <h1 className='font-bold text-[35px]  '>Missing Trades Because of Outdated Data?</h1>
                    <h2 className='text-[25px]'>Get the Live Market Screening with Dynamic Filters</h2>
                </div>
            </div>

        </>
    )
}

export default Sec4