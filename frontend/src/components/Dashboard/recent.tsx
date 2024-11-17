import Image from 'next/image'
import React from 'react'
import Pey from "../../app/assets//recent/pey.png"
import Money from "../../app/assets//recent/Money.png"
import Finder from "../../app/assets//recent/Finder.png"


function Recent() {
    return (
        <div className=' overflow-hidden  '>
            <h2 className="text-heading--200 font-semibold text-primary--200">Recent Transaction</h2>
            <div className='rounded-3xl  overflow-hidden '>
                <div className='flex flex-col  bg-primary--003 gap-[10px] text-start   pb-[25px] pt-[26px]' >

                    <div className='flex w-full justify-between text-start pl-[25px]'>
                        <div className='w-[55px] h-[55px]  flex justify-center items-center rounded-full bg-primary--006'>
                            <Image className=' w-[28px] h-[28px]' src={Money} alt="" />
                        </div>
                        <div className=''>
                            <h4 className='text-body--100 text-primary--007 font-medium'>Deposit from my Card</h4>
                            <p className='text-body--200 font-normal text-primary--700'>28 Jamuary 2021</p>
                        </div>
                        <div className='pr-[30px]  flex justify-center items-center '>
                            <h4 className='font-medium text-primary--009'>-$850</h4>
                        </div>

                    </div>
                    <div className='flex w-full justify-between text-start  pl-[25px] '>
                        <div className='w-[55px] h-[55px] flex justify-center items-center rounded-full bg-primary--005'>
                            <Image className=' w-[28px] h-[28px]' src={Pey} alt="" />
                        </div>
                        <div className=' flex text-start flex-col'>
                            <h4 className='text-body--100 text-primary--007 font-medium'>Deposit Paypal</h4>
                            <p className='text-body--200 font-normal text-primary--700'>25 January 2021</p>
                        </div>
                        <div className='pr-[30px] flex justify-center items-center'>
                            <h4 className='font-medium text-primary--008'>+$2,500</h4>
                        </div>

                    </div>
                    <div className=' flex justify-between pl-[25px] '>

                        <div className='w-[55px] h-[55px] flex justify-center items-center rounded-full bg-primary--004'>
                            <Image className=' w-[28px] h-[28px]' src={Finder} alt="" />
                        </div>
                        <div className='flex text-start flex-col'>
                            <h4 className='text-body--100 text-primary--007 font-medium'>Jemi Wilson</h4>
                            <p className='text-body--200 font-normal text-primary--700'>21 January 2021</p>
                        </div>
                        <div className='pr-[30px]  flex justify-center items-center'>
                            <h4 className='font-medium text-primary--008'>+$5,400</h4>
                        </div>

                    </div>


                </div>


            </div>
        </div>



    )
}

export default Recent