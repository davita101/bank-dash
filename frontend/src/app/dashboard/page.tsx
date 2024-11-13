
import { Balance } from "@/components/Dashboard/balance";
import { Chart } from "@/components/Dashboard/chart";
import CreditCard from "@/components/Dashboard/creditcard";
import Creditcard_white from "@/components/Dashboard/creditcard_white";
import { Ovali } from "@/components/Dashboard/ovali";

import { Circle,  PieChart } from "lucide-react";
import {  Pie } from "recharts";

export default function Page() {
    return (
        <>
            <div className="flex flex-1 flex-col gap-4 py-4">
                <div className="grid auto-rows-min gap-4 grid-cols-1 md:grid-cols-3">
                    <div className="aspect-video rounded-xl w-[350px] h-[235px]" >
                        <CreditCard />
                    </div>
                    <div className="aspect-video rounded-xl w-[350px] h-[235px] " >
                        <Creditcard_white />
                    </div>
                    <div className="aspect-video rounded-xl bg-red-500/50" />
                    <div className=" rounded-xl md:col-span-2" >

                        <Chart />
                    </div>
                    <div className="  rounded-xl " >
                        <Ovali />
                    </div>
                </div>
                <div className="grid auto-rows-min gap-[1rem] grid-cols-1 md:grid-cols-3">
                    <div className="w-full h-[244px] rounded-xl bg-red-500/50" />
                    <div className="w-full md:col-span-2 rounded-xl " >
                        <Balance />
                    </div>
                </div>
            </div>
        </>
    )
}