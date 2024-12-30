import React from 'react'
import Mask1 from "../../app/assets/transfer/Mask1.png"
import Mask2 from "../../app/assets/transfer/Mask2.png"
import Mask3 from "../../app/assets/transfer/Maks3.png"
import Send from "../../app/assets/transfer/Send.png"
import Image from 'next/image'
import { Card } from '../ui/card'

const Transfer = () => {
    return (
        <div className="h-full  ">
            <h2 className="text-heading--200 font-semibold text-primary--200 mb-[16px] ">Expense Statistics</h2>
            <Card className='bg-primary--003 p-[1rem]  h-full flex flex-col gap-[30px]  rounded-[20px]  '>
                <div className='flex  justify-start  pt-[35px] gap-[25px]'>

                    <div className='flex flex-col items-center'>
                        <Image className=' lg:w-[70px] w-[50px] lg:h-[70px] h-[50px]' src={Mask1} alt="Card logo" />
                        <h4 className='lg:text-body--100 text-heading--800'>Livia Bator</h4>
                        <p className='lg:text-body--200 text-heading--800'>CEO</p>
                    </div>
                    <div className='flex flex-col items-center'>
                        <Image className=' lg:w-[70px] w-[50px] lg:h-[70px] h-[50px]' src={Mask2} alt="Card logo" />
                        <h4 className='lg:text-body--100 text-heading--800'>Randy Press</h4>
                        <p className='lg:text-body--200 text-heading--800'>Director</p>
                    </div>
                    <div className='flex flex-col items-center'>
                        <Image className=' lg:w-[70px] w-[50px] lg:h-[70px] h-[50px]' src={Mask3} alt="Card logo" />
                        <h4 className='lg:text-body--100 text-heading--800'>Workman</h4>
                        <p className='lg:text-body--200 text-heading--800'>Designer</p>
                    </div>
                </div>

                <div className='flex justify-between items-center gap-[27px] '>
                    <h3 className='lg:text-body--200  text-heading--800 text-primary--700'>Write Amount </h3>
                    <div className=' rounded-[50px] w-full flex   bg-primary--012 '>
                        <div className='flex w-full  justify-between items-center '>
                            <p className='pl-[15px] lg:text-body--100 text-heading--800  text-primary--700'>535.50</p>
                            <div className='flex rounded-[50px]  gap-[11px] justify-center items-center bg-primary--013 w-[125px] h-[50px]'>
                                <p className='text-primary--003'>Send</p>
                                <Image className=' lg:w-[26px] w-[16px] lg:h-[22px] h-[14px]' src={Send} alt="Card logo" />
                            </div>
                        </div>

                    </div>
                </div>
            </Card>
        </div>
    )
}

export default Transfer
