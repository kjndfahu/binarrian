"use client"

import React from 'react';
import ReactApexChart from 'react-apexcharts';

const generateCandlestickData = () => {
    const data = [];
    let basePrice = 18432.320;
    let currentTime = new Date();
    currentTime.setSeconds(currentTime.getSeconds() - 180); // 3 minutes ago (180 seconds)

    for (let i = 0; i < 60; i++) { // 60 data points for 3 seconds each
        const open = basePrice + (Math.random() - 0.5) * 50;
        const high = open + Math.random() * 30;
        const low = open - Math.random() * 30;
        const close = open + (Math.random() - 0.5) * 20;

        const time = new Date(currentTime.getTime() + i * 3000); // 3 seconds interval

        data.push({
            x: time,
            y: [open, high, low, close],
            volume: Math.random() * 1000 + 500,
        });

        basePrice = close;
    }

    return data;
};

const data = generateCandlestickData();

const options = {
    chart: {
        type: 'candlestick',
        height: '100%',
        width: '100%',
        toolbar: {
            show: false,
        },
    },
    xaxis: {
        type: 'datetime',
        labels: {
            style: {
                colors: '#9CA3AF',
                fontSize: '12px',
            },
            datetimeFormatter: {
                minute: 'HH:mm:ss',
            },
        },
        tickAmount: 6, // Approximately one tick per 30 seconds
    },
    yaxis: {
        labels: {
            style: {
                colors: '#9CA3AF',
                fontSize: '12px',
            },
            formatter: (value) => value.toFixed(0),
        },
        min: Math.min(...data.map(d => d.y[2])) - 100, // Increased buffer for taller candles
        max: Math.max(...data.map(d => d.y[1])) + 100, // Increased buffer for taller candles
    },
    grid: {
        show: true,
        borderColor: '#374151',
        strokeDashArray: 3,
        xaxis: {
            lines: { show: true },
        },
        yaxis: {
            lines: { show: true },
        },
    },
    plotOptions: {
        candlestick: {
            colors: {
                upward: '#11CABE',
                downward: '#FA2256',
            },
            wick: {
                useFillColor: true,
            },
            barWidth: 2, // Reduced bar width to make candles appear taller and less wide
        },
    },
    tooltip: {
        custom: ({ series, seriesIndex, dataPointIndex, w }) => {
            const ohlc = series[seriesIndex][dataPointIndex];
            const time = new Date(w.globals.seriesX[seriesIndex][dataPointIndex]).toLocaleTimeString('en-US', {
                hour12: false,
                hour: '2-digit',
                minute: '2-digit',
                second: '2-digit',
            });
            return `
                <div class="bg-white rounded-lg p-3 shadow-lg border border-gray-200">
                    <p class="text-[#14B8A6] font-medium mb-2">Time: ${time}</p>
                    <p class="text-black text-sm">Open: <span class="text-[#11CABE]">${ohlc[0].toFixed(3)}</span></p>
                    <p class="text-black text-sm">High: <span class="text-[#11CABE]">${ohlc[1].toFixed(3)}</span></p>
                    <p class="text-black text-sm">Low: <span class="text-[#11CABE]">${ohlc[2].toFixed(3)}</span></p>
                    <p class="text-black text-sm">Close: <span class="text-[#11CABE]">${ohlc[3].toFixed(3)}</span></p>
                </div>
            `;
        },
    },
    annotations: {
        yaxis: [{
            y: 18432.320, // Base price line
            borderColor: '#11CABE',
            label: {
                borderColor: '#11CABE',
                style: {
                    color: '#fff',
                    background: '#11CABE',
                },
                text: '18432.320',
            },
        }],
    },
};

const series = [{
    name: 'BTC/USD',
    data: data,
}];

export function TradingGraph() {
    return (
        <div className="flex p-6 rounded-[12px] buy-crypto-bg border-[1px] border-[#D0DCFF8F] w-full gap-1 flex-col flex-1 h-[548px] overflow-hidden">
            <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-[22px]">
                    <h3 className="text-[25px] font-bold text-white leading-[30px]">BTC/USD</h3>
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
                        3 sec
                        <img src="/img/arrow-right.svg" className="w-[14px] h-[14px] rotate-90"/>
                    </div>
                </div>
            </div>

            <div className="w-full h-full min-h-0">
                <ReactApexChart options={options} series={series} type="candlestick" height="100%" width="100%" />
            </div>
        </div>
    );
}