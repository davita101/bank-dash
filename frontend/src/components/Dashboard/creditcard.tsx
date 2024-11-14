import Image from 'next/image'
import React from 'react'
import Chep from "../../app/assets/card/Chep.png"

export default function CreditCard() {
    return (
        <div className=' overflow-hidden'>
            <h2 className="text-heading--200 font-semibold text-primary--200">My Cards</h2>
            <div className='rounded-3xl overflow-hidden'>
                <div className='h-full main_card px-[25px] pb-[35px]'>
                    <div className='flex justify-between pt-[26px]'>
                        <div className='flex flex-col'>
                            <h4 className='text-heading--800 text-primary--003'>balance</h4>
                            <h3 className='text-heading--500 text-primary--003 card-h'>$5,756</h3>
                        </div>
                        <div className='pt-[4px]'>
                            <Image className=' w-[35px] h-[35px]' src={Chep} alt="" />
                        </div>
                    </div>
                    <div className='flex pt-[33px] items-center w-full justify-start gap-[67px]'>
                        <div className='flex flex-col'>
                            <h4 className='text-heading--800 text-primary--002 card-h1'>CARD HOLDER</h4>
                            <h4 className='text-body--200 text-primary--003 card-h'>Eddy Cusuma</h4>
                        </div>
                        <div className='flex flex-col'>
                            <h4 className='text-heading--800 text-primary--002 card-h1'>VALID THRU</h4>
                            <h4 className='text-body--200 text-primary--003 card-h'>12/22</h4>
                        </div>
                    </div>
                </div>
                <div className='px-[25px] main_card flex w-full h-[70px] items-center justify-between '>
                    <h1 className='text-heading--200 text-primary--003 card-h '>377 **** **** 1234</h1>
                    <div className='w-[30px] h-[30px]  bg-primary--001 relative rounded-full'>
                        <div className=' bg-primary--001 right-[50%] absolute w-full h-full rounded-full  '></div>
                    </div>
                </div>
            </div>
        </div>
    )
}
