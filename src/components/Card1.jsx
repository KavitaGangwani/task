'use client'
import React from 'react'
import Image from "next/image";
import troubleshoot from "./../../public/troubleshoot.svg"



function Card1({image,title,desc,func,img}) {

  // console.log(img)

  return (
   <>
   <div className='w-[350px] h-[240px] hover:w-[416px] hover:h-[244px] hover:text-[#4399EB] p-[24px_16px] rounded-[32px] gap-[4px]' onClick={()=>func(img)}>
    <div className='w-[76px] h-[76px] p-[8px] gap-[10px]'>
      <Image className='w-[60px] h-[60px] hover:text-[#4399EB]' src={image} alt=''/></div>
    <h1 className='leading-[36px] w-[293px] h-[36px] text-[22px] font-bold'>{title}</h1>
    <div>
      <p className='h-[72px] w-[320px]  text-[16px]'>{desc}</p>
    </div>

   </div>
   </>
  )
}

export default Card1