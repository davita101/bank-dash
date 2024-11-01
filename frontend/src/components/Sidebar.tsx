import Image from 'next/image'
import React, { useState } from 'react'
import { FaCreditCard, FaLightbulb } from 'react-icons/fa'
import { FaCircleDollarToSlot, FaHandHoldingDollar } from 'react-icons/fa6'
import { GrTransaction } from 'react-icons/gr'
import { HiMiniHome } from 'react-icons/hi2'
import { MdAccountCircle, MdDesignServices } from 'react-icons/md'
import { RiSettings5Fill } from 'react-icons/ri'

import IconRender from './hooks/icon-render'
import Link from 'next/link'

const Sidebar = () => {
    const [move, setMove] = useState<number>(0)

    const setActive = (index: number) => {
        setMove(index)
    }

    const icons = [
        {
            link: "/dashboard",
            name: "Dashboard",
            icon: HiMiniHome
        },
        {
            link: "/transactions",
            name: "Transactions",
            icon: GrTransaction
        },
        {
            link: "/accounts",
            name: "Accounts",
            icon: MdAccountCircle
        },
        {
            link: "/investments",
            name: "Investments",
            icon: FaCircleDollarToSlot
        },
        {
            link: "/creditcard",
            name: "Creditcard",
            icon: FaCreditCard
        },
        {
            link: "/loans",
            name: "Loans",
            icon: FaHandHoldingDollar
        },
        {

            link: "/services",
            name: "Services",
            icon: MdDesignServices
        },
        {
            link: "/privileges",
            name: "Privileges",
            icon: FaLightbulb
        },
        {
            link: "Settings",
            name: "Settings",
            icon: RiSettings5Fill
        }
    ]
    console.log(typeof icons[0].icon)
    return (
        // clasworck
        <div className=' text-primary400 bg-white max-sm:hidden'>
            {icons.map((item, index) => (
                <div key={`_sidebar--${index}`} onClick={() => setActive(index)} className={`flex lg:gap-[38px] sm:gap-[25px] ${move == index && "text-primary--300"} font-medium cursor-pointer`}>
                    <div className={`w-[6px] ${(move === index) && "bg-primary--300"} rounded-r-[10px] h-[60px]`} />
                    <div className='flex w-full gap-[26px] font-medium cursor-pointer h-[60px] items-center'>
                        <IconRender src={item.icon} className={"text-[30px]"} />
                        <Link href={""}><h3 className='capitalize text-heading--400'>{item.name}</h3></Link>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Sidebar