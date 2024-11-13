import Image from 'next/image'
import React from 'react'
import WhiteCheap from "../../app/assets/card/WhiteChep.png"


function Creditcard_white() {
    return (
        <div>
            <h2 className="text-heading--200 font-semibold text-primary--200 flex justify-end ">See All</h2>
            <div className='h-full bg-primary--003   rounded-3xl'>

                <div className='flex justify-center pt-[26px] gap-[202px]'>
                    <div className='flex flex-col'>
                        <h4 className='text-heading--800 text-primary--700'>balance</h4>
                        <h3 className='text-heading--500 text-primary--200'>$5,756</h3>
                    </div>
                    <div className='pt-[4px]'>
                        <Image className=' w-[35px] h-[35px]' src={WhiteCheap} alt="" />

                    </div>

                </div>
                <div className='flex gap-[67px] pt-[33px]'>
                    <div className='flex flex-col pl-[25px]'>
                        <h4 className='text-heading--800 text-primary--700 card-h1'>CARD HOLDER</h4>
                        <h4 className='text-body--200 text-primary--200 card-h'>Eddy Cusuma</h4>
                    </div>
                    <div className='flex flex-col'>
                        <h4 className='text-heading--800 text-primary--700 card-h1'>VALID THRU</h4>
                        <h4 className='text-body--200 text-primary--200 card-h'>12/22</h4>
                    </div>
                </div>
                <div className='card_main2 flex w-full h-[70px] items-center justify-center  gap-[100px] '>
                    <h1 className='text-heading--200 text-primary--200 card-h '>377 **** **** 1234</h1>
                    <div className='w-[30px] h-[30px]  bg-primary--001 relative rounded-full'>
                        <div className=' bg-primary--001 right-[50%] absolute w-full h-full rounded-full  '></div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Creditcard_white