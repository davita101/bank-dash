import Image from 'next/image'
import React from 'react'
import { FaCreditCard, FaLightbulb } from 'react-icons/fa'
import { FaHandHoldingDollar } from 'react-icons/fa6'
import { GrTransaction } from 'react-icons/gr'
import { HiMiniHome } from 'react-icons/hi2'
import { MdAccountCircle, MdDesignServices } from 'react-icons/md'
import { RiSettings5Fill } from 'react-icons/ri'

const Sidebar = () => {
    const bot = [
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
        }
        {
            name: "Settings",
            icon: RiSettings5Fill       
        }
    ]
    // classwork install icons
  return (
    <div>
    </div>
  )
}

export default Sidebar
