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
    <div>
      <h2 className="text-heading--200 font-semibold text-primary--200 ">Weekly Activity</h2>
      <Card >

        <CardHeader>
        </CardHeader>
        <CardContent>
          <ChartContainer config={chartConfig} className="h-[322px] w-full">
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
              <Bar dataKey="desktop"  fill="var(--color-desktop)" radius={4} barSize={10} />
              <Bar dataKey="mobile" fill="var(--color-mobile)" radius={4} barSize={10} />
            </BarChart>
          </ChartContainer>
        </CardContent>

      </Card>
    </div>
  )
}
