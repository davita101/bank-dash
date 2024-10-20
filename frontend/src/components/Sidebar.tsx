import IconRender from '@/app/hooks/IconRender'
import Image from 'next/image'
import React from 'react'
import { FaCreditCard, FaLightbulb } from 'react-icons/fa'
import { FaCircleDollarToSlot, FaHandHoldingDollar } from 'react-icons/fa6'
import { GrTransaction } from 'react-icons/gr'
import { HiMiniHome } from 'react-icons/hi2'
import { MdAccountCircle, MdDesignServices } from 'react-icons/md'
import { RiSettings5Fill } from 'react-icons/ri'

const Sidebar = () => {
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
        <div className='bg-white text-primary400  w-[221px] h-[554px] '>
            {icons.map((item, index) => (

                    <div className='flex gap-3 w-[189px] h-[60px] pl-[41px] justify-start items-center text-start '>
                        
                        <IconRender src={item.icon}  />
                        <p>{item.name}</p>
                    </div>


            ))}
        </div>
    )
}

export default Sidebar