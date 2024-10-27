'use client'
import React, { useState } from 'react'

import accordian from '@/data';
import Accordianitem from './Accordianitem';


function Accordian() {


    const [ques, setQues] = useState(accordian)


    return (
        <div className='w-full  my-6 bg-[#F8FBFF] sm:bg-transparent '>
            <div className='w-[100%]  text-center'>
            <h1 className='font-bold text-[35px] my-4'>FAQ</h1>
            </div>
           

            <div className='sm:w-[80%] w-[90%]  mx-auto'>
                {ques.map((v, i) => {
                    return (
                        <Accordianitem v={v} />
                    )



                })}

            </div>
        </div>



    )
}

export default Accordian