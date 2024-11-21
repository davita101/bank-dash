import Image from 'next/image'
import React from 'react'
import Pey from "../../app/assets/recent/Pay.svg"
import Money from "../../app/assets/recent/Money.svg"
import User from "../../app/assets/recent/User.svg"


function Recent() {
    const resentTransaction = [
        {
            icon: Pey,
            updateTime: "28 Jamuary 2025",
            depositType: "Deposit from my Card",
            deposit: 850,
            isIncrease: false,
            isContact: false,
            isPaypal: false,
            isMyFromMyCard: true,
        },
        {
            icon: Money,
            updateTime: "25 Jamuary 2025",
            depositType: "Deposit Paypal",
            deposit: 2500,
            isIncrease: true,
            isContact: true,
            isPaypal: false,
            isMyFromMyCard: false,
        },
        {
            icon: User,
            updateTime: "21 Jamuary 2025",
            depositType: "Jemi Wilson",
            deposit: 5400,
            isIncrease: true,
            isContact: false,
            isPaypal: true,
            isMyFromMyCard: false,
        },
    ]

    return (
        <div className=' overflow-hidden  h-full rounded-3xl'>
            <div className=' overflow-hidden  h-full '>
                <div className='flex flex-col  bg-primary--003 gap-[10px] text-start h-full pt-[26px]' >
                    {resentTransaction.map((item, key) => (

                        <div className='flex w-full justify-between text-start pl-[25px]'>
                            <div className='flex gap-[17px]'>
                                <div className='w-[55px] h-[55px]  flex justify-center items-center '>
                                    <Image className=' w-[48px] h-[48px]' src={item.icon} alt={"deposit type"} />
                                </div>
                                <div className=''>
                                    <h4 className='text-body--100 text-primary--007 font-medium'>{item.depositType}</h4>
                                    <p className='text-body--200 font-normal text-primary--700'>{item.updateTime}</p>
                                </div>
                            </div>
                            <div className='pr-[30px]  flex justify-center items-center '>
                                <h4 className={`font-medium ${item.isIncrease ? "text-primary--008" : "text-primary--009"}`}>{item.isIncrease ? `+$${item.deposit}` : `-$${item.deposit}`}</h4>
                            </div>
                        </div>
                    ))}

                </div>
            </div>
        </div>



    )
}

export default Recent