"use client"
import React from 'react'
import { FiSettings } from "react-icons/fi";
import { PiBellRinging } from "react-icons/pi";
import Mask from "../../app/assets/mainLogo/headeer/Mask.svg"
import { CiSearch } from "react-icons/ci";
import Image from 'next/image';
import { SidebarTrigger } from '../ui/sidebar';
import { UserButton } from '@clerk/nextjs';
import { SignIn, SignInButton } from '@clerk/clerk-react';


const Header = () => {
	return (

		<div className='flex h-[100px] max-sm:flex-col w-full justify-between items-center'>
			<div className='sm:hidden flex ' />
			<div className='flex gap-[5rem] max-sm:w-full max-sm:justify-between  items-center relative'>
				<div className='flex items-center w-full justify-between '>
					<SidebarTrigger className=' pt-1' />
					<h2 className='font-semibold mx-auto text-primary--200 lg:text-heading--700 max-sm:text-heading--600 sm:text-heading--600'>Overview</h2>
				</div>
				<SignInButton></SignInButton>

				<Image className='lg:w-[60px] sm:hidden sm:w-[45px] lg:h-[60px] sm:h-[45px] w-[35px] max-sm:absolute right-0 rounded-full' src={Mask} alt="" />
			</div>
			<div className='flex justify-center items-center gap-[30px] rounded-3xl'>
				<div className='flex max-sm:hidden  w-[255px] lg:h-[50px] sm:h-[40px] rounded-3xl bg-primary--400 gap-5 justify-center items-center '>
					<CiSearch className='lg:w-[20px] sm:w-[16px] lg:h-[20px] sm:h-[20px] bg-primary--400' />
					<input type="text" placeholder='Search for something' className=' outline-none placeholder:text-slate-400 bg-primary--400   border-primary--400  ' />
				</div>
				<div className=' lg:w-[50px] sm:w-[40px] lg:h-[50px] sm:h-[40px] max-sm:hidden flex justify-center items-center text-primary--700 bg-primary--400 rounded-full'>
					<FiSettings className='lg:w-[25px] sm:w-[18px] lg:h-[25px] sm:h-[18px]' />
				</div>
				<div className=' lg:w-[50px] sm:w-[40px] lg:h-[50px] sm:h-[40px] max-sm:hidden flex justify-center items-center  text-primary--600 bg-primary--400 rounded-full'>
					<PiBellRinging className='lg:w-[25px] sm:w-[18px] lg:h-[25px] sm:h-[18px]' />
				</div>
				<div className='lg:w-[60px] flex items-center justify-center text-[50px] max-sm:hidden sm:w-[45px] lg:h-[60px] sm:h-[45px] rounded-full'>
					<UserButton   />
				
				</div>

			</div>
			<div className='flex sm:hidden py-[12px]  sm:w-[325px] w-full max-sm: max-sm:justify-start max-sm:pl-[19px]   rounded-3xl bg-primary--400 gap-5 justify-center items-center '>
				<CiSearch className='lg:w-[20px] sm:w-[16px] lg:h-[20px] sm:h-[20px] bg-primary--400' />
				<input type="text" placeholder='Search for something' className=' outline-none placeholder:text-slate-400 bg-primary--400    border-primary--400  ' />
			</div>


		</div>
	)
}

export default Header