import Recent from '@/components/Dashboard/recent'
import { Expense } from '@/components/Transactions/expense'
import Tabletrans from '@/components/Transactions/Tabletrans'
import { Description } from '@radix-ui/react-dialog'
import { Table } from 'lucide-react'
import React from 'react'

function page() {
    return (

        <div className="flex flex-1 flex-col gap-[25px] py-4 container">
            <div className="grid auto-rows-min gap-[25px] grid-cols-1 md:grid-cols-3">
                <div className="flex flex-col w-full col-span-2">
                </div>
                <div className="h-full overflow-hidden " >
                    <h2 className="text-heading--200 font-semibold text-primary--200">My Expense</h2>
                    <Expense />
                </div>
                <div className=" rounded-xl md:col-span-2 col-span-2" >
                    <h2 className="text-heading--200 font-semibold text-primary--200">Recent Transactions</h2>

                    <Tabletrans />
                </div>
            </div>
            <div className="grid  gap-[1rem] grid-cols-1 md:grid-cols-5">
                <div className="w-full h-full pb-[49px] md:col-span-2  rounded-xl" >
                </div>
                <div className="w-full md:col-span-3 rounded-xl " >
                </div>
            </div>
        </div>
    )
}

export default page