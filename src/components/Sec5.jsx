import React from 'react'
import TestCard from './TestCard'
import img1 from "./../../public/test1.png"
import img2 from "./../../public/test2.png"
import img3 from "./../../public/test3.png"

function Sec5() {
  return (
    <section>
      <div className=' bg-white text-center p-6'>
        <h1 className='font-bold text-[35px] mb-8 mt-12'>Client Testimonials</h1>
        <div className='w-[95%] mx-auto '>
          <div className='flex justify-around'>
            <TestCard image = {img3} name="Bhavyaa Narotambhai" desc="Superb app! You guys are great. Everythings at my fingertips now: option analysis, EMA, pivot points, company profiles, gaps up/down, FII & DII data, ban lists... Whats not here?!   You keep nothing hidden. Thank you very much, guys! Thanks a lot!"/>
            <TestCard image = {img2} name="Anjan Banerjee" desc="The website and app are incredibly intuitive and easy to navigate. Whether youre a seasoned trader or a beginner, youll find everything you need right at your fingertips.
                    Overall, NiftyTrader has exceeded my expectations in every way."/>
           
          
            
          </div>
          <div className='flex justify-around'>
            <TestCard image = {img1} name="Vibha Hegde" desc="The website and app are incredibly intuitive and easy to navigate. Whether youre a seasoned trader or a beginner, you’ll find everything you need right at your fingertips.
                    Overall, NiftyTrader has exceeded my expectations in every way." />
            <TestCard image = {img3} name="Rajkumari Sahani" desc="Superb app! You guys are great. Everythings at my fingertips now: option analysis, EMA, pivot points, company profiles, gaps up/down, FII & DII data, ban lists... Whats not here?!   You keep nothing hidden. Thank you very much, guys! Thanks a lot!"/>
            
            
          </div>


          
        </div>

      </div>

    </section>

  )
}

export default Sec5