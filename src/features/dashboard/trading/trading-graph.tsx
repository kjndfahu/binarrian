"use client"

import { useState } from 'react';
import { ComposedChart, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Bar, Line, ReferenceArea } from 'recharts';

// Генерация тестовых данных для candlestick графика
const generateCandlestickData = () => {
    const data = [];
    let basePrice = 18432.320;
    let currentTime = new Date();
    currentTime.setMinutes(currentTime.getMinutes() - 3); // 3 минуты назад

    for (let i = 0; i < 4; i++) {
        const open = basePrice + (Math.random() - 0.5) * 50;
        const high = open + Math.random() * 30;
        const low = open - Math.random() * 30;
        const close = open + (Math.random() - 0.5) * 20;
        
        const time = new Date(currentTime.getTime() + i * 60000);
        
        data.push({
            time: time.toLocaleTimeString('en-US', { 
                hour12: false, 
                hour: '2-digit', 
                minute: '2-digit' 
            }),
            open: open,
            high: high,
            low: low,
            close: close,
            volume: Math.random() * 1000 + 500,
            ma1: close + (Math.random() - 0.5) * 10,
            ma2: close + (Math.random() - 0.5) * 15,
            ma3: close + (Math.random() - 0.5) * 20,
        });
        
        basePrice = close;
    }
    
    return data;
};

const data = generateCandlestickData();

// Кастомный компонент для candlestick свечи
const Candlestick = (props: any) => {
    const { x, y, width, height, open, close, high, low, index } = props;
    
    const isBullish = close >= open;
    const color = isBullish ? '#11CABE' : '#FF6B6B';
    
    // Высота тела свечи
    const bodyHeight = Math.abs(close - open);
    const maxPrice = Math.max(...data.map(d => d.high));
    const minPrice = Math.min(...data.map(d => d.low));
    const priceRange = maxPrice - minPrice;
    
    // Позиция тела свечи
    const bodyY = y + (maxPrice - Math.max(open, close)) / priceRange * height;
    const bodyHeightPx = (bodyHeight / priceRange) * height;
    
    // Позиция фитилей
    const wickY = y + (maxPrice - high) / priceRange * height;
    const wickHeight = (high - low) / priceRange * height;
    
    return (
        <g key={index}>
            {/* Фитиль */}
            <line
                x1={x + width / 2}
                y1={wickY}
                x2={x + width / 2}
                y2={wickY + wickHeight}
                stroke={color}
                strokeWidth={2}
            />
            {/* Тело свечи */}
            <rect
                x={x + width * 0.15}
                y={bodyY}
                width={width * 0.7}
                height={Math.max(bodyHeightPx, 2)}
                fill={color}
                stroke={color}
                strokeWidth={1}
            />
        </g>
    );
};

// Кастомный tooltip для candlestick
const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
        const data = payload[0].payload;
        return (
            <div className="bg-white rounded-lg p-3 shadow-lg border border-gray-200">
                <p className="text-[#14B8A6] font-medium mb-2">Time: {label}</p>
                <p className="text-black text-sm">Open: <span className="text-[#11CABE]">{data.open?.toFixed(3)}</span></p>
                <p className="text-black text-sm">High: <span className="text-[#11CABE]">{data.high?.toFixed(3)}</span></p>
                <p className="text-black text-sm">Low: <span className="text-[#11CABE]">{data.low?.toFixed(3)}</span></p>
                <p className="text-black text-sm">Close: <span className="text-[#11CABE]">{data.close?.toFixed(3)}</span></p>
                <p className="text-black text-sm">Volume: <span className="text-[#11CABE]">{data.volume?.toFixed(0)}</span></p>
            </div>
        );
    }
    return null;
};

export function TradingGraph(){
    return (
        <div className="flex p-6 rounded-[12px] buy-crypto-bg border-[1px] border-[#D0DCFF8F] w-full gap-1 flex-col">
            <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-[22px]">
                    <h3 className="text-[25px] font-bold text-white leading-[30px]">BTC/ USD</h3>
                    <div className="flex items-center gap-6">
                        <p className="text-[14px] text-[#CACACA] leading-[22px]">
                            Open: <span className="text-[#11CABE]">18432.320</span>
                        </p>
                        <p className="text-[14px] text-[#CACACA] leading-[22px]">
                            High: <span className="text-[#11CABE]">18432.320</span>
                        </p>
                        <p className="text-[14px] text-[#CACACA] leading-[22px]">
                            Low: <span className="text-[#11CABE]">18432.320</span>
                        </p>
                        <p className="text-[14px] text-[#CACACA] leading-[22px]">
                            Close: <span className="text-[#11CABE]">18432.320</span>
                        </p>
                    </div>
                </div>
                <div className="flex items-center gap-[15px]">
                    <div
                        className="flex items-center justify-center cursor-pointer text-[16px] leading-[24px] text-white font-semibold border-[1px] border-white rounded-full px-4 py-2 h-[42px] gap-2">
                        Price
                        <img src="/img/arrow-right.svg" className="w-[14px] h-[14px] rotate-90"/>
                    </div>
                    <div
                        className="flex items-center justify-center cursor-pointer text-[16px] leading-[24px] text-white font-semibold border-[1px] border-white rounded-full px-4 py-2 h-[42px] gap-2">
                        1 min
                        <img src="/img/arrow-right.svg" className="w-[14px] h-[14px] rotate-90"/>
                    </div>
                </div>
            </div>
            
            {/* График с использованием recharts */}
            <div className="w-full h-[400px] select-none" style={{ outline: 'none' }}>
                <ResponsiveContainer width="100%" height="100%">
                    <ComposedChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                        <defs>
                            <linearGradient id="volumeGradient" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="0%" stopColor="#11CABE" stopOpacity={0.8}/>
                                <stop offset="100%" stopColor="#11CABE" stopOpacity={0.2}/>
                            </linearGradient>
                        </defs>
                        <CartesianGrid strokeDasharray="3 3" stroke="#374151" strokeWidth={0.2} />
                        <XAxis 
                            dataKey="time" 
                            axisLine={false}
                            tickLine={false}
                            tick={{ fill: '#9CA3AF', fontSize: 12 }}
                            interval={0}
                        />
                        <YAxis 
                            axisLine={false}
                            tickLine={false}
                            tick={{ fill: '#9CA3AF', fontSize: 12 }}
                            tickFormatter={(value) => `${value.toFixed(0)}`}
                            domain={['dataMin - 50', 'dataMax + 50']}
                        />
                        <Tooltip content={<CustomTooltip />} />
                        
                        {/* Volume bars */}
                        <Bar 
                            dataKey="volume" 
                            fill="url(#volumeGradient)" 
                            opacity={0.3}
                            radius={[2, 2, 0, 0]}
                        />
                        
                        {/* Moving averages */}
                        <Line 
                            type="monotone" 
                            dataKey="ma1" 
                            stroke="#8B5CF6" 
                            strokeWidth={1}
                            dot={false}
                        />
                        <Line 
                            type="monotone" 
                            dataKey="ma2" 
                            stroke="#FF6B35" 
                            strokeWidth={1}
                            dot={false}
                        />
                        <Line 
                            type="monotone" 
                            dataKey="ma3" 
                            stroke="#11CABE" 
                            strokeWidth={1}
                            dot={false}
                        />
                        
                        {/* Кастомные candlestick свечи */}
                        {data.map((entry, index) => (
                            <Candlestick
                                key={index}
                                x={index * (400 / data.length)}
                                y={0}
                                width={400 / data.length * 0.8}
                                height={350}
                                open={entry.open}
                                close={entry.close}
                                high={entry.high}
                                low={entry.low}
                                index={index}
                            />
                        ))}
                    </ComposedChart>
                </ResponsiveContainer>
            </div>
        </div>
    )
}