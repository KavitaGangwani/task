'use client'
import React, { useState } from 'react'
import Image from "next/image";
import optionscreener from "./../../public/screener.png"
import advancestockscreener from "./../../public/advanced.png"
import livemarketscreener from "./../../public/livemarket.png"
import optionchainscreener from "./../../public/optionchain.png"

import troubleshoot from "./../../public/troubleshoot.svg"
import troubleshoot2 from "./../../public/trouble2.png"
import troubleshoot3 from "./../../public/trouble3.png"
import troubleshoot4 from "./../../public/trouble4.png"
import Card1 from './Card1';

function Sec3() {
    const [screener ,setScreener] = useState(optionscreener)

    const handleScreener = (e)=>{
      setScreener(e)
      
    }

    
  return (
    <>
    <section  >
      <div className=' h-[700px] z-[0] '>
      <div>
            <Image src={screener} alt='' />
            
        </div>
        <div className=' mx-auto flex w-[94%] gap-3 justify-center'>
            <Card1 image = {troubleshoot} title = 'Advanced Stock Screener' desc='Access advanced flters like volume shockers, price action, range breakout, opening price  clues, and more for efcient stock screening.' func = {handleScreener} img ={advancestockscreener}/>
            <Card1 image = {troubleshoot2} title = 'Live Market Screener' desc='Access real-time market data and  dynamic flters to ensure timely trades  without outdated information.'
            img ={livemarketscreener} func = {handleScreener}/>
            <Card1 image = {troubleshoot3} title = 'Options Screener' desc='Quickly identify optimal trading  opportunities in the options market with  our real-time data and advanced flters.' img ={optionscreener} func = {handleScreener}/>
            <Card1 image = {troubleshoot4} title = 'Advanced Option Chain' desc='Stay ahead with highlighted data on  Greeks, PCR, Vol PCR, and Expected  Range for the Day feature for  confdent target setting' img ={optionchainscreener} func = {handleScreener}/>
        </div>
      </div>
        
    </section>
    </>
  )
}

export default Sec3