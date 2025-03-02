"use client"

import { useState } from "react"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, TooltipProps } from "recharts"
import { BsGraphUp } from "react-icons/bs";

// Sample data - replace with your actual data
const data = [
  { name: "Jan 1", views: 1800, clicks: 1200 },
  { name: "Jan 2", views: 2000, clicks: 1400 },
  { name: "Jan 3", views: 2200, clicks: 1500 },
  { name: "Jan 4", views: 2800, clicks: 1600 },
  { name: "Jan 5", views: 3200, clicks: 1800 },
  { name: "Jan 6", views: 3800, clicks: 2000 },
  { name: "Jan 7", views: 3800, clicks: 2200 },
  { name: "Jan 8", views: 3800, clicks: 2400 },
  { name: "Jan 9", views: 4200, clicks: 2500 },
  { name: "Jan 10", views: 4200, clicks: 2600 },
  { name: "Jan 11", views: 4200, clicks: 2700 },
  { name: "Jan 12", views: 6464, clicks: 2985 },
]

interface DataPoint {
  name: string;
  views: number;
  clicks: number;
}

const CustomTooltip = ({ active, payload, label }: TooltipProps<number, string>) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-black/90 border border-gray-800 rounded-lg p-4 shadow-xl">
        <p className="text-gray-400 mb-2">{label}</p>
        {payload.map((entry, index) => (
          <p key={`item-${index}`} className="text-sm" style={{ color: entry.color }}>
                     {entry.name}: {entry.value ? entry.value.toLocaleString() : 'N/A'}

          </p>
        ))}
      </div>
    )
  }
  return null
}

export default function AnalyticsChart() {
  const [hoveredData, setHoveredData] = useState<DataPoint | null>(null)

  const lastEntry = data[data.length - 1]
  const previousEntry = data[data.length - 2]

  const calculatePercentageChange = (current: number, previous: number) => {
    const change = ((current - previous) / previous) * 100
    return change.toFixed(0)
  }

  const viewsChange = calculatePercentageChange(lastEntry.views, previousEntry.views)
  const clicksChange = calculatePercentageChange(lastEntry.clicks, previousEntry.clicks)

  return (
    <div className="w-full bg-black p-6 border-1 border-blackTransparent mt-4 px-8">
      <div className="mb-8">
        <div className="flex items-center gap-2 mb-2">
        <BsGraphUp className="text-secondary" />
          <span className="text-gray-400">Frontend Observability</span>
        </div>
        <h2 className="text-2xl font-bold text-white mb-2">Privacy-friendly, lightweight Analytics.</h2>
        <p className="text-gray-400">Upgrade your post-launch workflow with actionable, real-time insights.</p>
      </div>

      <div className="grid grid-cols-2 gap-4 mb-6">
        <div className="bg-black/50 border border-gray-800 rounded-lg p-4">
          <div className="text-sm text-gray-400 mb-1">Views</div>
          <div className="flex items-center gap-2">
            <span className="text-2xl font-bold text-white">{lastEntry.views.toLocaleString()}</span>
            <span className="text-sm text-emerald-400">+{viewsChange}%</span>
          </div>
        </div>
        <div className="bg-black/50 border border-gray-800 rounded-lg p-4">
          <div className="text-sm text-gray-400 mb-1">Clicks</div>
          <div className="flex items-center gap-2">
            <span className="text-2xl font-bold text-white">{lastEntry.clicks.toLocaleString()}</span>
            <span className="text-sm text-emerald-400">+{clicksChange}%</span>
          </div>
        </div>
      </div>

      <div className="h-[300px] w-full">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            data={data}
            onMouseMove={(e) => {
              if (e.activePayload) {
                setHoveredData(e.activePayload[0].payload)
              }
            }}
            onMouseLeave={() => setHoveredData(null)}
          >
            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="rgba(255,255,255,0.1)" />
            <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fill: "#666", fontSize: 12 }} dy={10} />
            <YAxis
              axisLine={false}
              tickLine={false}
              tick={{ fill: "#666", fontSize: 12 }}
              dx={-10}
              tickFormatter={(value) => `${(value / 1000).toFixed(0)}k`}
            />
            <Tooltip content={<CustomTooltip />} cursor={{ stroke: "rgba(255,255,255,0.2)" }} />
            <Line
              type="monotone"
              dataKey="views"
              stroke="#3B82F6"
              strokeWidth={2}
              dot={false}
              activeDot={{ r: 4, fill: "#3B82F6" }}
            />
            <Line
              type="monotone"
              dataKey="clicks"
              stroke="#10B981"
              strokeWidth={2}
              dot={false}
              activeDot={{ r: 4, fill: "#10B981" }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}