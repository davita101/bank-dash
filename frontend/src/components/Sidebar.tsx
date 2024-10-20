import IconRender from '@/app/hooks/IconRender'
import Image from 'next/image'
import React, { useState } from 'react'
import { FaCreditCard, FaLightbulb } from 'react-icons/fa'
import { FaCircleDollarToSlot, FaHandHoldingDollar } from 'react-icons/fa6'
import { GrTransaction } from 'react-icons/gr'
import { HiMiniHome } from 'react-icons/hi2'
import { MdAccountCircle, MdDesignServices } from 'react-icons/md'
import { RiSettings5Fill } from 'react-icons/ri'

import FullLogo from "../app/assets/mainLogo/FullLogo.svg"

const Sidebar = () => {
    const [move, setMove] = useState(0)

    const setActive = (index) => {
        setMove(index)
    }

    const icons = [
        {
            name: "Dashboard",
            icon: HiMiniHome
        },
        {
            name: "Transactions",
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
        // clasworck
        <div className=' text-primary400 bg-white max-sm:hidden'>
            <div className='ml-[44px] mb-[100px] mt-[31px] cursor-pointer'>
                <Image src={FullLogo} alt='' />
            </div>
            {icons.map((item, index) => (
                <div key={`_sidebar--${index}`} onClick={() => setActive(index)} className={`flex lg:gap-[38px] sm:gap-[25px] ${move == index && "text-primary--300"} font-medium cursor-pointer`}>
                    <div className={`w-[6px] ${(move === index) && "bg-primary--300"} rounded-r-[10px] h-[60px]`} />
                    <div className='flex w-full gap-[26px] font-medium cursor-pointer h-[60px] items-center'>
                        <IconRender src={item.icon} className={"text-[30px]"} />
                        <h3 className='capitalize text-heading--400'>{item.name}</h3>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Sidebar