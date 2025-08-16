"use client"

import { useState } from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, ResponsiveContainer, Tooltip } from 'recharts';

// Данные для диаграммы
const data = [
    { period: '01', orange: 3.5, purple: 1.2, teal: 2.4 },
    { period: '02', orange: 1.8, purple: 2.3, teal: 1.0 },
    { period: '03', orange: 2.8, purple: 3.3, teal: 2.0 },
    { period: '04', orange: 2.4, purple: 1.6, teal: 3.0 },
    { period: '05', orange: 1.2, purple: 2.4, teal: 2.4 },
    { period: '06', orange: 1.4, purple: 0.5, teal: 1.0 },
    { period: '07', orange: 2.0, purple: 1.4, teal: 2.8 },
    { period: '08', orange: 3.9, purple: 1.9, teal: 2.8 },
];

// Кастомный tooltip компонент
const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
        return (
            <div className="tooltip-bg rounded-[12px] p-4 backdrop-blur-2xl shadow-lg">
                {payload.map((entry: any, index: number) => (
                    <p key={index} className="text-black text-sm">
                        {entry.name} : {entry.value}%
                    </p>
                ))}
            </div>
        );
    }
    return null;
};

export function OverallGrowth(){
    const [tab, setTab] = useState("1hour");
    
    return (
        <div className="flex flex-col gap-[22px] buy-crypto-bg h-full p-6 border-[1px] border-[#D0DCFF8F] rounded-[12px]">
            <div className="flex items-center justify-between">
                <h3 className="text-[20px] text-white leading-[24px] font-bold">Overall Growth</h3>
                <div className="flex gap-4 items-center">
                    <div onClick={() => setTab('1hour')}
                         className={`text-[16px] ${tab === '1hour' ? 'faq-bg text-white' : 'bg-transparent text-[#CACACA]'} cursor-pointer rounded-full leading-[25px] font-semibold px-4 py-2`}>1 hour
                    </div>
                    <div onClick={() => setTab('24hour')}
                         className={`text-[16px] ${tab === '24hour' ? 'faq-bg text-white' : 'bg-transparent text-[#CACACA]'} cursor-pointer rounded-full leading-[25px] font-semibold px-4 py-2`}>24 hour
                    </div>
                    <div onClick={() => setTab('1day')}
                         className={`text-[16px] ${tab === '1day' ? 'faq-bg text-white' : 'bg-transparent text-[#CACACA]'}  cursor-pointer rounded-full leading-[25px] font-semibold px-4 py-2`}>1 day
                    </div>
                    <div onClick={() => setTab('1week')}
                         className={`text-[16px] ${tab === '1week' ? 'faq-bg text-white' : 'bg-transparent text-[#CACACA]'}  cursor-pointer rounded-full leading-[25px] font-semibold px-4 py-2`}>1 week
                    </div>
                </div>
            </div>
            
            {/* Групповая столбчатая диаграмма */}
            <div 
                className="w-full h-[300px] mt-4 select-none" 
                style={{ 
                    outline: 'none',
                    WebkitUserSelect: 'none',
                    MozUserSelect: 'none',
                    msUserSelect: 'none',
                    userSelect: 'none'
                }}
                tabIndex={-1}
            >
                <ResponsiveContainer 
                    width="100%" 
                    height="100%"
                    style={{ outline: 'none' }}
                >
                    <BarChart 
                        data={data} 
                        margin={{ top: 20, right: 0, left: 0, bottom: 5 }}
                        style={{ outline: 'none' }}
                    >
                        <defs>
                            <linearGradient id="orangeGradient" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="0%" stopColor="#FF6B35" stopOpacity={1}/>
                                <stop offset="100%" stopColor="#FF6B35" stopOpacity={0.6}/>
                            </linearGradient>
                            <linearGradient id="purpleGradient" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="0%" stopColor="#8B5CF6" stopOpacity={1}/>
                                <stop offset="100%" stopColor="#8B5CF6" stopOpacity={0.6}/>
                            </linearGradient>
                            <linearGradient id="tealGradient" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="0%" stopColor="#14B8A6" stopOpacity={1}/>
                                <stop offset="100%" stopColor="#14B8A6" stopOpacity={0.6}/>
                            </linearGradient>
                            
                            {/* Фильтры для свечения */}
                            <filter id="orangeGlow">
                                <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
                                <feFlood floodColor="#FF6B35" floodOpacity="0.6" result="glowColor"/>
                                <feComposite in="glowColor" in2="coloredBlur" operator="in" result="softGlow"/>
                                <feMerge> 
                                    <feMergeNode in="softGlow"/>
                                    <feMergeNode in="SourceGraphic"/>
                                </feMerge>
                            </filter>
                            <filter id="purpleGlow">
                                <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
                                <feFlood floodColor="#8B5CF6" floodOpacity="0.6" result="glowColor"/>
                                <feComposite in="glowColor" in2="coloredBlur" operator="in" result="softGlow"/>
                                <feMerge> 
                                    <feMergeNode in="softGlow"/>
                                    <feMergeNode in="SourceGraphic"/>
                                </feMerge>
                            </filter>
                            <filter id="tealGlow">
                                <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
                                <feFlood floodColor="#14B8A6" floodOpacity="0.6" result="glowColor"/>
                                <feComposite in="glowColor" in2="coloredBlur" operator="in" result="softGlow"/>
                                <feMerge> 
                                    <feMergeNode in="softGlow"/>
                                    <feMergeNode in="SourceGraphic"/>
                                </feMerge>
                            </filter>
                        </defs>
                        <CartesianGrid strokeDasharray="3 3" stroke="#374151" strokeWidth={0.2} />
                        <XAxis 
                            dataKey="period" 
                            axisLine={false}
                            tickLine={false}
                            tick={{ fill: '#9CA3AF', fontSize: 12 }}
                        />
                        <YAxis 
                            axisLine={false}
                            tickLine={false}
                            tick={{ fill: '#9CA3AF', fontSize: 12 }}
                            tickFormatter={(value) => `${value}%`}
                            width={30}
                        />
                        <Tooltip content={<CustomTooltip />} />
                        <Bar 
                            dataKey="orange" 
                            fill="url(#orangeGradient)" 
                            radius={[4, 4, 0, 0]} 
                            filter="url(#orangeGlow)"
                        />
                        <Bar 
                            dataKey="purple" 
                            fill="url(#purpleGradient)" 
                            radius={[4, 4, 0, 0]} 
                            filter="url(#purpleGlow)"
                        />
                        <Bar 
                            dataKey="teal" 
                            fill="url(#tealGradient)" 
                            radius={[4, 4, 0, 0]} 
                            filter="url(#tealGlow)"
                        />
                    </BarChart>
                </ResponsiveContainer>
            </div>
        </div>
    )
}