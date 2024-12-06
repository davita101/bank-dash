"use client"

import { TrendingUp } from "lucide-react"
import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from "recharts"

import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import {
    ChartConfig,
    ChartContainer,
    ChartTooltip,
    ChartTooltipContent,
} from "@/components/ui/chart"

export const description = "A multiple bar chart"

const chartData = [
    { month: "January", desktop: 186, mobile: 80 },
    { month: "February", desktop: 480, mobile: 200 },
    { month: "March", desktop: 237, mobile: 120 },
    { month: "April", desktop: 73, mobile: 190 },
    { month: "May", desktop: 209, mobile: 130 },
    { month: "June", desktop: 214, mobile: 140 },
    { month: "June", desktop: 214, mobile: 140 },
]

const chartConfig = {
    desktop: {
        label: "Desktop",
        color: "#1814F3",
    },
    mobile: {
        label: "Mobile",
        color: "#16DBCC",
    },
} satisfies ChartConfig

export function Chart() {
    return (
        <div className="">
            <h2 className="text-heading--200 font-semibold text-primary--200 mb-[16px] ">Weekly Activity</h2>
            <Card className="rounded-[20px] lg:h-[322px] md:h-[261px] h-[254px] " >
                <div className=" flex justify-end lg:pr-[25px] md:pr-[25px] pr-[24px]  lg:h-[67px] md:h-[40px] h-[33px]">

                    <div className="flex gap-[30px]">
                        <div className="flex items-center gap-[10px]">
                            <div className="w-[15px] h-[15px] bg-primary--010 rounded-full"></div>
                            <p className="lg:text-body--100 md:text-heading--002 text-heading--800 text-primary--700">Diposit</p>
                        </div>
                        <div className="flex items-center gap-[10px]">
                            <div className="w-[15px] h-[15px]  bg-primary--011 rounded-full"></div>
                            <p className="lg:text-body--100 md:text-heading--002 text-heading--800 text-primary--700">Withdraw</p>
                        </div>
                    </div>
                </div>



                <CardContent >
                    <ChartContainer config={chartConfig} className="lg:h-[226px] md:h-[204px] h-[204px]  border  w-full">
                        <BarChart accessibilityLayer data={chartData}>
                            <CartesianGrid vertical={false} />

                            <YAxis
                                tickLine={false}
                                axisLine={false}
                                tickMargin={10}
                                domain={[0, 500]}
                                ticks={[0, 100, 200, 300, 400, 500]}
                            />

                            <XAxis
                                dataKey="month"
                                type="category"
                                tickLine={false}
                                tickMargin={10}
                                axisLine={false}
                                tickFormatter={(value) => value.slice(0, 3)
                                }
                            />
                            <ChartTooltip
                                cursor={false}
                                content={<ChartTooltipContent indicator="dashed" />}
                            />
                            <Bar dataKey="desktop" fill="var(--color-desktop)"  radius={4} barSize={10} />
                            <Bar dataKey="mobile" fill="var(--color-mobile)" radius={4} barSize={10} />
                        </BarChart>
                    </ChartContainer>
                </CardContent>

            </Card>
        </div>
    )
}
