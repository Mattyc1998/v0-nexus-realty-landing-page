"use client"

import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, AreaChart, Area } from 'recharts'
import { motion } from 'framer-motion'

const data = [
  { year: '2020', value: 380 },
  { year: '2021', value: 410 },
  { year: '2022', value: 445 },
  { year: '2023', value: 435 },
  { year: '2024', value: 460 },
  { year: '2025', value: 495 },
  { year: '2026', value: 535 },
]

export function TrendChart() {
  return (
    <div className="w-full h-64 mt-6 glass-card p-4 rounded-xl">
      <h4 className="text-sm font-semibold mb-4 text-primary uppercase tracking-widest">Predictive Market Growth</h4>
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart data={data}>
          <defs>
            <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="hsl(var(--primary))" stopOpacity={0.3}/>
              <stop offset="95%" stopColor="hsl(var(--primary))" stopOpacity={0}/>
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="rgba(255,255,255,0.05)" />
          <XAxis 
            dataKey="year" 
            axisLine={false} 
            tickLine={false} 
            tick={{ fill: 'rgba(255,255,255,0.4)', fontSize: 10 }} 
          />
          <YAxis 
            hide 
            domain={['dataMin - 50', 'dataMax + 50']} 
          />
          <Tooltip 
            contentStyle={{ backgroundColor: 'rgba(26, 26, 27, 0.9)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '8px' }}
            itemStyle={{ color: 'hsl(var(--primary))' }}
          />
          <Area 
            type="monotone" 
            dataKey="value" 
            stroke="hsl(var(--primary))" 
            strokeWidth={2}
            fillOpacity={1} 
            fill="url(#colorValue)" 
            animationDuration={2000}
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  )
}
