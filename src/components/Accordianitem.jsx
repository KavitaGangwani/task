import React,{ useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { faChevronUp } from '@fortawesome/free-solid-svg-icons';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

function Accordianitem({v}) {
    const [isClicked, setIsClicked] = useState(false)
  return (
    <>
    <div className=' border-b-[black] border-b-[1px] mt-2 ' key={v.id} >
                    <div className=' flex justify-between p-[15px_12px]  ' onClick={()=>{
                            setIsClicked(!isClicked)
                        }}>
                        <p className='text-start' >{v.ques}
                        </p>
                        <button >{isClicked? <FontAwesomeIcon icon={faChevronUp}/>:<FontAwesomeIcon icon={faChevronDown} />}</button>
                        
                        
                        
                    </div>
                    {isClicked &&  <div className=' p-[24px_12px]'>
                        {v.ans}
                    </div> }
                   
                </div>
    </>
  )
}

export default Accordianitem