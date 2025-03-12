/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"

// import { useState } from "react"
import { LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer, type TooltipProps } from "recharts"
// import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

// Sample data that matches the chart in the image
const data = [
  { day: "Sat", supplier: 100, buyer: 200, tooltip: { label: "Sat/May 20", value: 100 } },
  { day: "Sun", supplier: 400, buyer: 500, tooltip: { label: "Sun/May 21", value: 400 } },
  { day: "Mon", supplier: 800, buyer: 750, tooltip: { label: "Mon/May 22", value: 800 } },
  { day: "Tue", supplier: 650, buyer: 600, tooltip: { label: "Tue/May 23", value: 650 } },
  { day: "Wed", supplier: 950, buyer: 1200, tooltip: { label: "Wed/May 24", value: 950 } },
  { day: "Thu", supplier: 900, buyer: 1000, tooltip: { label: "Thu/May 25", value: 900 } },
  { day: "Fri", supplier: 1500, buyer: 1800, tooltip: { label: "Fri/May 26", value: 1500 } },
]


// Y-axis tick values to match the image
const yAxisTicks = [0, 100, 400, 600, 800, 1000, 1500, 2000]

// Custom tooltip component to match the design in the image
const CustomTooltip = ({ active, payload, label }: TooltipProps<number, string>) => {
  if (active && payload && payload.length) {
    const dataPoint = data.find((item) => item.day === label)
    const tooltipInfo = dataPoint?.tooltip

    if (tooltipInfo) {
      return (
        <div className="bg-gray-100 px-3 py-2 rounded-md shadow-sm text-xs">
          <p className="font-medium">{tooltipInfo.label}</p>
          <p className="font-bold">{tooltipInfo.value}</p>
        </div>
      )
    }
  }
  return null
}

// Custom dot component to show tooltips only at specific points
const CustomDot = (props: any) => {
  const { cx, cy, payload, dataKey } = props
  const dataPoint = data.find((item) => item.day === payload.day)

  if (
    dataPoint?.tooltip &&
    ((dataKey === "supplier" && dataPoint.tooltip.value === dataPoint.supplier) ||
      (dataKey === "buyer" && dataPoint.tooltip.value === dataPoint.buyer))
  ) {
    return (
      <circle
        cx={cx}
        cy={cy}
        r={6}
        fill="white"
        stroke={dataKey === "supplier" ? "#22C55E" : "#0EA5E9"}
        strokeWidth={2}
      />
    )
  }

  return (
    <circle
      cx={cx}
      cy={cy}
      r={4}
      fill={dataKey === "supplier" ? "#22C55E" : "#0EA5E9"}
      stroke="white"
      strokeWidth={1}
    />
  )
}

export default function Overview() {
  // const [timeframe, setTimeframe] = useState("Weekly")

  return (
    <div className="p-6 bg-white rounded-xl shadow-sm">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold">Overview</h2>

        <div className="flex items-center gap-6 mb-4">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-[#22C55E]"></div>
          <span className="text-sm">Supplier</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-[#0EA5E9]"></div>
          <span className="text-sm">Buyer</span>
        </div>
      </div>
        {/* <Select defaultValue={timeframe} onValueChange={setTimeframe}>
          <SelectTrigger className="w-[120px]">
            <SelectValue placeholder="Weekly" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="Daily">Daily</SelectItem>
            <SelectItem value="Weekly">Weekly</SelectItem>
            <SelectItem value="Monthly">Monthly</SelectItem>
            <SelectItem value="Yearly">Yearly</SelectItem>
          </SelectContent>
        </Select> */}
      </div>

      <div className="h-[400px]">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 10 }}>
            <defs>
              <linearGradient id="supplierGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#22C55E" stopOpacity={0.1} />
                <stop offset="95%" stopColor="#22C55E" stopOpacity={0} />
              </linearGradient>
              <linearGradient id="buyerGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#0EA5E9" stopOpacity={0.1} />
                <stop offset="95%" stopColor="#0EA5E9" stopOpacity={0} />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f0f0f0" />
            <XAxis dataKey="day" axisLine={false} tickLine={false} tick={{ fontSize: 12 }} dy={10} />
            <YAxis
              axisLine={false}
              tickLine={false}
              tick={{ fontSize: 12 }}
              ticks={yAxisTicks}
              domain={[0, 2000]}
              tickFormatter={(value) => {
                if (value === 0) return "00"
                if (value === 1000) return "1k"
                if (value === 1500) return "1.5k"
                if (value === 2000) return "2k"
                return value.toString()
              }}
            />
            <Tooltip content={<CustomTooltip />} />
            <Line
              type="monotone"
              dataKey="supplier"
              stroke="#22C55E"
              strokeWidth={2}
              dot={<CustomDot />}
              activeDot={{ r: 6, stroke: "#22C55E", strokeWidth: 2, fill: "white" }}
            />
            <Line
              type="monotone"
              dataKey="buyer"
              stroke="#0EA5E9"
              strokeWidth={2}
              dot={<CustomDot />}
              activeDot={{ r: 6, stroke: "#0EA5E9", strokeWidth: 2, fill: "white" }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}

