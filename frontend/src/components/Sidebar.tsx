import IconRender from '@/app/hooks/IconRender'
import Image from 'next/image'
import React, { useState } from 'react'
import { FaCreditCard, FaLightbulb } from 'react-icons/fa'
import { FaCircleDollarToSlot, FaHandHoldingDollar } from 'react-icons/fa6'
import { GrTransaction } from 'react-icons/gr'
import { HiMiniHome } from 'react-icons/hi2'
import { MdAccountCircle, MdDesignServices } from 'react-icons/md'
import { RiSettings5Fill } from 'react-icons/ri'

const Sidebar = () => {
    const [move, setMove] = useState(true)

    const setActive = (index) => {
        setMove(index)
    }

    const icons = [
        {
            name: "Dashboard",
            icon: HiMiniHome
        },
        {
            name: "transactions",
            icon: GrTransaction
        },
        {
            name: "Accounts",
            icon: MdAccountCircle
        },
        {
            name: "Investments",
            icon: FaCircleDollarToSlot
        },
        {
            name: "Creditcard",
            icon: FaCreditCard
        },
        {
            name: "Loans",
            icon: FaHandHoldingDollar
        },
        {
            name: "Services",
            icon: MdDesignServices
        },
        {
            name: "Privileges",
            icon: FaLightbulb
        },
        {
            name: "Settings",
            icon: RiSettings5Fill
        }
    ]
    console.log(typeof icons[0].icon)
    return (
        <div className=' text-primary400 bg-white   w-[221px] h-[554px] '>
            {icons.map((item, index) => (

                <div onClick={() => setActive(index)} className={`flex gap-3 ${move == index && "text-primary300"} justify-between font-medium w-[189px] cursor-pointer  h-[60px] `}>
                    
                    <div className={`w-[6px] ${move == index && " bg-blue-800"} rounded-r-3xl h-full`} />
                    <div className='flex gap-5 font-medium w-[189px] cursor-pointer  h-[60px] items-center  text-start'>
                        <IconRender  src={item.icon} />
                        <p>{item.name}</p>

                    </div>
                </div>


            ))}
        </div>
    )
}

export default Sidebar