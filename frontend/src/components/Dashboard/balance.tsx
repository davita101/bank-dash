"use client"

import { TrendingUp } from "lucide-react"
import { Area, AreaChart, CartesianGrid, XAxis, YAxis } from "recharts"

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
const chartData = [
  { month: "January", desktop: 406 },
  { month: "February", desktop: 305 },
  { month: "March", desktop: 237 },
  { month: "April", desktop: 173 },
  { month: "May", desktop: 209 },
  { month: "June", desktop: 214 },
]

const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "#718EBF",


  },
} satisfies ChartConfig

export function Balance() {
  return (
    <div>
      <h2 className="text-heading--200 font-semibold text-primary--200 ">Balance History</h2>
      
      <Card>
        <CardHeader>
        </CardHeader>
        <CardContent>
          <ChartContainer config={chartConfig} className="h-[276px] w-full">
            <AreaChart

              accessibilityLayer
              data={chartData}
              margin={{
                left: 12,
                right: 12,
              }}
            >
              <defs>
                <linearGradient id="gradient1" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="rgba(45,96,255,1)" stopOpacity={1} />
                  <stop offset="100%" stopColor="rgba(255,255,255,1)" stopOpacity={1} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray={"10 10"} />
              <XAxis

                dataKey="month"
                axisLine={false}
                tickMargin={8}
                tickFormatter={(value) => value.slice(0, 3)}
              />
              <YAxis
                tick={{ fill: "#718EBF" }}
                axisLine={false}
                tickMargin={10}
                domain={[0, 500]}
                ticks={[200, 400, 600, 800]}
              />
              <ChartTooltip
                cursor={false}
                content={<ChartTooltipContent indicator="line" />}
              />
              <Area

                dataKey="desktop"
                type="natural"
                fill="url(#gradient1)"
                fillOpacity={0.4}
                stroke="#1814F3"
                strokeWidth={5}

              />
            </AreaChart>
          </ChartContainer>
        </CardContent>

      </Card>
    </div>
  )
}
