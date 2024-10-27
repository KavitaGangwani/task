'use client'
import Image from "next/image";

import Navbar from "@/components/Navbar";
import Card1 from "@/components/Card1";
import TestCard from "@/components/TestCard";
import Footer from "@/components/Footer";
import Sec4 from "@/components/Sec4";
import Sec2 from "@/components/Sec2";
import Accordian from "@/components/Accordian";
import Sec1 from "@/components/Sec1";
import Sec8 from "@/components/Sec8";
import Sec6 from "@/components/Sec6";
import Sec3 from "@/components/Sec3";
import Sec5 from "@/components/Sec5";


export default function Home() {
  return (
    <>
    <div className="w-[1518px] relative overflow-x-hidden">
    <Navbar/>
      <Sec1/>

      
      <Sec2/>

      <Sec3/>

      <Sec4/>

      <Sec5/>

      <Sec6/>

      <Accordian/>

      <Sec8/>

      <Footer/>
    </div>

    </>


  );
}
