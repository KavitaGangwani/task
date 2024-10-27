import React from 'react'
import Image from "next/image";
import right from "./../../public/Framecorrect.png"
import wrong from "./../../public/Framewrong.png"

function Sec6() {
    return (
        <>
            <div className='w-full text-center my-3'>
                <h1 className='font-bold text-[35px] my-3'>Pricing Plan</h1>
                <div className='sm:w-[90%] w-[100%] mx-auto '>
                    <table className='border w-[100%]'>
                        <tr>
                            <th className='p-[20px] border'>
                                <div className='flex gap-[16px]  items-center'>
                                    <h1 className='text-[16px]'>Compare Plans</h1>
                                    <div className='border rounded-[32px] text-[12px] font-light p-[5px_10px] '> 60% off</div>
                                </div>
                                <div className='text-[12px] text-[#999999]  font-light w-[320px] text-start'>
                                Choose your workspace plan according to your organisational plan
                                </div>
                            </th>
                            <th className='p-[20px] border'>
                                <div >
                                    <h1 className='text-[24px]'>Free <span className='text-[12px] text-[#999999]  font-light'>/Lifetime</span></h1>
                                    <button className='bg-[#236AD4] p-[16px_60px] w-[290px] my-2 text-[white] hover:text-[#236AD4] hover:bg-[white] hover:border-[1px] hover:border-[#236AD4]'>Create Free Account</button>
                                </div>
                            </th>
                            
                            <th className='p-[20px] border'>
                                <div >
                                    <h1 className='text-[24px]'>849 <span className='text-[12px] text-[#999999]  font-light'>/Month</span></h1>
                                    <button className='bg-[#236AD4] p-[16px_60px] w-[290px] my-2 text-[white] hover:text-[#236AD4] hover:bg-[white] hover:border-[1px] hover:border-[#236AD4]'>Login to Buy</button>
                                </div>
                            </th>
                            <th className='p-[20px] border'>
                                <div >
                                    <h1 className='text-[24px]'>4310 <span className='text-[12px] text-[#999999]  font-light'>/Year</span></h1>
                                    <button className='bg-[#236AD4] p-[16px_60px] w-[290px] my-2 text-[white] hover:text-[#236AD4] hover:bg-[white] hover:border-[1px] hover:border-[#236AD4]'>Login to Buy</button>
                                </div>
                            </th>
                            
                           
                        </tr>
                        <tr>
                           <td className='border p-[20px]'>
                            <div className=' flex start'><p>Number of Users</p></div>
                           </td>
                           <td className='border p-[20px_32px]'>
                            <div className=' '><p>1</p></div>
                           </td>
                           <td className='border p-[20px_32px]'>
                            <div className=' '><p>3</p></div>
                           </td>
                           <td className='border p-[20px_32px]'>
                            <div className=' '><p>1</p></div>
                           </td>
                        </tr>
                        <tr>
                           <td className='border p-[20px]'>
                            <div className=' flex start'><p>Users per page</p></div>
                           </td>
                           <td className='border p-[20px_32px]'>
                            <div className=' '><p>5</p></div>
                           </td>
                           <td className='border p-[20px_32px]'>
                            <div className=' '><p>50</p></div>
                           </td>
                           <td className='border p-[20px_32px]'>
                            <div className='flex flex-col '><p>Unlimited</p>
                            <span className='text-[12px] text-[#999999]  font-light'>Pages Add-ons on Demands</span></div>
                           </td>
                        </tr>
                        <tr>
                           <td className='border p-[20px]'>
                            <div className=' flex text-start start'><p>Includes essential features to get started</p></div>
                           </td>
                           <td className='border p-[20px_32px]'>
                            <div className='flex justify-center '>
                                <Image src={right}/>
                            </div>
                           </td>
                           <td className='border p-[20px_32px]'>
                           <div className='flex justify-center '>
                                <Image src={right}/>
                            </div>
                           </td>
                           <td className='border p-[20px_32px]'>
                           <div className='flex justify-center '>
                                <Image src={right}/>
                            </div>
                           </td>
                        </tr>
                        <tr>
                           <td className='border p-[20px]'>
                            <div className=' flex start text-start'><p>More advanced features for increased productivity</p></div>
                           </td>
                           <td className='border p-[20px_32px]'>
                            <div className='flex justify-center '>
                                <Image src={wrong}/>
                            </div>
                           </td>
                           <td className='border p-[20px_32px]'>
                           <div className='flex justify-center '>
                                <Image src={right}/>
                            </div>
                           </td>
                           <td className='border p-[20px_32px]'>
                           <div className='flex justify-center '>
                                <Image src={right}/>
                            </div>
                           </td>
                        </tr>
                        <tr>
                           <td className='border p-[20px]'>
                            <div className=' flex start'><p>Designing & Development</p></div>
                           </td>
                           <td className='border p-[20px_32px]'>
                            <div className='flex justify-center '>
                                <Image src={wrong}/>
                            </div>
                           </td>
                           <td className='border p-[20px_32px]'>
                           <div className='flex justify-center '>
                                <Image src={right}/>
                            </div>
                           </td>
                           <td className='border p-[20px_32px]'>
                           <div className='flex justify-center '>
                                <Image src={right}/>
                            </div>
                           </td>
                        </tr>
                        <tr>
                           <td className='border p-[20px]'>
                            <div className=' flex text-start start'><p>Customizable options to meet your specific needs</p></div>
                           </td>
                           <td className='border p-[20px_32px]'>
                            <div className='flex justify-center '>
                                <Image src={wrong}/>
                            </div>
                           </td>
                           <td className='border p-[20px_32px]'>
                           <div className='flex justify-center '>
                                <Image src={right}/>
                            </div>
                           </td>
                           <td className='border p-[20px_32px]'>
                           <div className='flex justify-center '>
                                <Image src={right}/>
                            </div>
                           </td>
                        </tr>
                        <tr>
                           <td className='border p-[20px]'>
                            <div className=' flex text-start start'><p>Secure data storage</p></div>
                           </td>
                           <td className='border p-[20px_32px]'>
                            <div className='flex justify-center '>
                                <Image src={wrong}/>
                            </div>
                           </td>
                           <td className='border p-[20px_32px]'>
                           <div className='flex justify-center '>
                                <Image src={right}/>
                            </div>
                           </td>
                           <td className='border p-[20px_32px]'>
                           <div className='flex justify-center '>
                                <Image src={right}/>
                            </div>
                           </td>
                        </tr>
                        <tr>
                           <td className='border p-[20px]'>
                            <div className=' flex text-start start'><p>Email Support</p></div>
                           </td>
                           <td className='border p-[20px_32px]'>
                            <div className='flex justify-center '>
                                <Image src={wrong}/>
                            </div>
                           </td>
                           <td className='border p-[20px_32px]'>
                           <div className='flex justify-center '>
                                <Image src={right}/>
                            </div>
                           </td>
                           <td className='border p-[20px_32px]'>
                           <div className='flex justify-center '>
                                <Image src={right}/>
                            </div>
                           </td>
                        </tr>
                        <tr>
                           <td className='border p-[20px]'>
                            <div className=' flex text-start start'><p>24/7 customer support</p></div>
                           </td>
                           <td className='border p-[20px_32px]'>
                            <div className='flex justify-center '>
                                <Image src={wrong}/>
                            </div>
                           </td>
                           <td className='border p-[20px_32px]'>
                           <div className='flex justify-center '>
                                <Image src={right}/>
                            </div>
                           </td>
                           <td className='border p-[20px_32px]'>
                           <div className='flex justify-center '>
                                <Image src={right}/>
                            </div>
                           </td>
                        </tr>
                        <tr>
                           <td className='border p-[20px]'>
                            <div className=' flex text-start start'><p>Analytics and reporting</p></div>
                           </td>
                           <td className='border p-[20px_32px]'>
                            <div className='flex justify-center '>
                                <Image src={wrong}/>
                            </div>
                           </td>
                           <td className='border p-[20px_32px]'>
                           <div className='flex justify-center '>
                                <Image src={right}/>
                            </div>
                           </td>
                           <td className='border p-[20px_32px]'>
                           <div className='flex justify-center '>
                                <Image src={right}/>
                            </div>
                           </td>
                        </tr>
                        <tr>
                           <td className='border p-[20px]'>
                            <div className=' flex text-start start'><p>Account Management</p></div>
                           </td>
                           <td className='border p-[20px_32px]'>
                            <div className='flex justify-center '>
                                <Image src={right}/>
                            </div>
                           </td>
                           <td className='border p-[20px_32px]'>
                           <div className='flex justify-center '>
                                <Image src={right}/>
                            </div>
                           </td>
                           <td className='border p-[20px_32px]'>
                           <div className='flex justify-center '>
                                <Image src={right}/>
                            </div>
                           </td>
                        </tr>
                        
                    </table>
                </div>

            </div>
        </>
    )
}

export default Sec6