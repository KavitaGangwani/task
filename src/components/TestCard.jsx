'use client'
import Image from "next/image";
import React from 'react'

function TestCard({image,name,desc}) {
    return (
        <>
            <div className='sm:w-[600px] sm:h-[200px] w-[282px] h-[299px] my-6 relative rounded-[32px] sm:p-[24px]  p-[80px_10px_10px_10px]  gap-[16px] shadow-[0px_4px_4px_0_#00000040]  '>
                <div className="sm:w-[160px] w-[84px] sm:h-[160px] h-[84px]  absolute sm:top-[31px] top-[-11%] left-[32%] sm:left-[31px] rounded-full bg-[white] border-[2px]  border-[#A8A09D] p-[3.5px]">

                    <div className='sm:w-[150px] sm:h-[150px] rounded-full bg-[#A8A09D] overflow-hidden' >
                        <Image src={image}/>
                    </div>

                </div>
                <div className="sm:w-[380px] w-[250px] h-[138px] gap-[6px] sm:text-start absolute sm:top-[50px] sm:left-[215px] top-[50px] "  >
                    <h1 className="sm:text-[24px] text-[20px] font-bold">{name}</h1>
                    <p className="sm:text-[14px] sm:w-[350px] w-[250px] leading-[20px]">{desc}</p>
                </div>

            </div>
        </>
    )
}

export default TestCard