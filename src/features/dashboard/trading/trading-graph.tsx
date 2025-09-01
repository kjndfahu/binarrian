"use client"

import React, { useState, useMemo } from 'react';
import ReactApexChart from 'react-apexcharts';
import { Popup } from '../../../shared/ui/popup';
import { ApexOptions } from 'apexcharts';

const generateCandlestickData = () => {
    const data = [];
    let basePrice = 18432.320;
    const currentTime = new Date();
    currentTime.setSeconds(currentTime.getSeconds() - 180); // 3 minutes ago (180 seconds)

    for (let i = 0; i < 60; i++) {
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

const generateDepthData = () => {
    const basePrice = 42000000; // Center around 42M
    const bids = [];
    const asks = [];

    for (let i = 0; i <= 40; i++) {
        const price = basePrice - (i * 1000000); // 1M steps down
        const volume = Math.max(1000, 6000 - (i * 100) + Math.random() * 200);
        bids.push({
            x: price,
            y: volume
        });
    }

    for (let i = 0; i <= 50; i++) {
        const price = basePrice + (i * 1000000); // 1M steps up
        const volume = Math.max(1000, 1000 + (i * 80) + Math.random() * 200);
        asks.push({
            x: price,
            y: volume
        });
    }

    bids.sort((a, b) => b.x - a.x);
    asks.sort((a, b) => a.x - b.x);

    return [
        { name: 'Bids', data: bids },
        { name: 'Asks', data: asks }
    ];
};

const candlestickOptions: ApexOptions = {
    chart: {
        type: 'candlestick',
        width: '100%',
        toolbar: { show: false },
    },
    xaxis: {
        type: 'datetime',
        labels: {
            style: { colors: '#9CA3AF', fontSize: '12px' },
            rotate: 0, // Horizontal labels
            datetimeFormatter: {
                hour: 'HH:mm', // Format as HH:mm (e.g., 5:44)
            },
        },
        tickAmount: 6,
    },
    yaxis: {
        labels: {
            show: false, // Hide y-axis labels
            style: { colors: '#9CA3AF', fontSize: '12px' },
            formatter: (value: number) => value.toFixed(0),
        },
    },
    grid: {
        show: true,
        borderColor: '#374151',
        strokeDashArray: 3,
        xaxis: { lines: { show: true } },
        yaxis: { lines: { show: true } },
    },
    plotOptions: {
        candlestick: {
            colors: { upward: '#11CABE', downward: '#FA2256' },
            wick: { useFillColor: true },
        },
    },
    tooltip: {
        custom: ({ series, seriesIndex, dataPointIndex, w }: any) => {
            const ohlc = series[seriesIndex][dataPointIndex];
            const time = new Date(w.globals.seriesX[seriesIndex][dataPointIndex]).toLocaleTimeString('en-US', {
                hour12: false,
                hour: '2-digit',
                minute: '2-digit',
                second: '2-digit',
            });
            return `
                <div class="bg-white rounded-lg p-3 shadow-lg border border-gray-200">
                    <p className="text-[#14B8A6] font-medium mb-2">Time: ${time}</p>
                    <p className="text-black text-sm">Open: <span className="text-[#11CABE]">${ohlc[0].toFixed(3)}</span></p>
                    <p className="text-black text-sm">High: <span className="text-[#11CABE]">${ohlc[1].toFixed(3)}</span></p>
                    <p className="text-black text-sm">Low: <span className="text-[#11CABE]">${ohlc[2].toFixed(3)}</span></p>
                    <p className="text-black text-sm">Close: <span className="text-[#11CABE]">${ohlc[3].toFixed(3)}</span></p>
                </div>
            `;
        },
    },
    annotations: {
        yaxis: [{
            y: 18432.320,
            borderColor: '#11CABE',
            label: {
                borderColor: '#11CABE',
                style: { color: '#fff', background: '#11CABE' },
                text: '18432.320',
            },
        }],
    },
};

const depthOptions: ApexOptions = {
    chart: {
        type: 'area',
        width: '100%',
        toolbar: { show: false },
        stacked: false,
    },
    xaxis: {
        type: 'numeric',
        labels: {
            style: { colors: '#9CA3AF', fontSize: '12px' },
            formatter: (value: string) => Number(value).toLocaleString(),
        },
        tickAmount: 8,
        min: 1000000,
        max: 92000000,
        axisBorder: { show: false },
        axisTicks: { show: false },
    },
    yaxis: {
        labels: {
            style: { colors: '#9CA3AF', fontSize: '12px' },
            formatter: (value: number) => `${(value / 1000).toFixed(0)}K`,
        },
        min: 0,
        max: 7000,
        axisBorder: { show: false },
        axisTicks: { show: false },
    },
    grid: {
        show: true,
        borderColor: '#374151',
        strokeDashArray: 3,
    },
    plotOptions: {
        area: {
            fillTo: 'origin',
        },
    },
    fill: {
        type: 'solid',
        opacity: [0.3, 0.3],
        colors: ['#11CABE', '#FA2256'],
    },
    stroke: {
        curve: 'stepline',
        width: 2,
        colors: ['#11CABE', '#FA2256'],
    },
    tooltip: {
        custom: ({ series, seriesIndex, dataPointIndex }: any) => {
            const dataPoint = series[seriesIndex][dataPointIndex];
            const price = dataPoint.x;
            const volume = dataPoint.y;
            const type = seriesIndex === 0 ? 'Bids' : 'Asks';
            return `
                <div class="bg-white rounded-lg p-3 shadow-lg border border-gray-200">
                    <p className="text-[#14B8A6] font-medium mb-2">${type}</p>
                    <p className="text-black text-sm">Price: <span className="text-[#11CABE]">${price.toLocaleString()}</span></p>
                    <p className="text-black text-sm">Volume: <span className="text-[#11CABE]">${(volume / 1000).toFixed(2)}K</span></p>
                </div>
            `;
        },
    },
    dataLabels: { enabled: false },
    legend: { show: false },
};

export function TradingGraph() {
    const [showPopup, setShowPopup] = useState(false);
    const [chartType, setChartType] = useState<'candlestick' | 'depth'>('candlestick');

    const candlestickData = useMemo(() => generateCandlestickData(), []);
    const depthData = useMemo(() => generateDepthData(), []);

    const dynamicCandlestickOptions = useMemo(() => {
        if (!candlestickData.length) {
            return candlestickOptions;
        }
        return {
            ...candlestickOptions,
            xaxis: {
                ...candlestickOptions.xaxis,
                type: 'datetime',
            },
            yaxis: {
                ...candlestickOptions.yaxis,
                min: Math.min(...candlestickData.map(d => d.y[2])) - 100,
                max: Math.max(...candlestickData.map(d => d.y[1])) + 100,
            },
        };
    }, [candlestickData]);

    const series = chartType === 'candlestick' ? [{
        name: 'BTC/USD',
        data: candlestickData,
    }] : depthData;

    const options = chartType === 'candlestick' ? dynamicCandlestickOptions : depthOptions;

    const handlePriceClick = () => {
        setShowPopup(!showPopup);
    };

    const handleSelectChart = (item: string) => {
        const type = item.toLowerCase() === 'price' ? 'candlestick' : 'depth';
        setChartType(type);
        setShowPopup(false);
    };

    const latestCandle = candlestickData[candlestickData.length - 1] || {
        y: [18432.320, 18432.320, 18432.320, 18432.320]
    };

    return (
        <div
            className=" relative w-full rounded-[14px] flex-1 h-full border border-transparent bg-gradient-to-br from-[rgba(208,220,255,0.28)] to-[rgba(208,220,255,0.025)] p-[1px]">
            <div
                className="flex w-full rounded-[12px] gap-1 flex-col bg-[#070322] flex-1 h-full overflow-hidden relative">
                <div className="flex flex-col gap-6">
                    <div className="flex items-center px-6 pt-6 justify-between md:mb-4">
                        <div className="flex items-center gap-[22px]">
                            <h3 className="text-[25px] font-bold text-white leading-[30px]">BTC/USD</h3>
                            <div className="md:flex hidden items-center xl:gap-6 lg:gap-3 gap-2">
                                <p className="text-[14px] text-[#CACACA] leading-[22px]">
                                    Open: <span className="text-[#11CABE]">{latestCandle.y[0].toFixed(3)}</span>
                                </p>
                                <p className="text-[14px] text-[#CACACA] leading-[22px]">
                                    High: <span className="text-[#11CABE]">{latestCandle.y[1].toFixed(3)}</span>
                                </p>
                                <p className="text-[14px] text-[#CACACA] leading-[22px]">
                                    Low: <span className="text-[#11CABE]">{latestCandle.y[2].toFixed(3)}</span>
                                </p>
                                <p className="text-[14px] text-[#CACACA] leading-[22px]">
                                    Close: <span className="text-[#11CABE]">{latestCandle.y[3].toFixed(3)}</span>
                                </p>
                            </div>
                        </div>
                        <div className="flex items-center gap-[15px]">
                            <div
                                className="relative md:flex hidden items-center justify-center cursor-pointer text-[16px] leading-[24px] text-white font-semibold border-[1px] border-white rounded-full px-4 py-2 h-[42px] gap-2"
                                onClick={handlePriceClick}
                            >
                                {chartType === 'candlestick' ? 'Price' : 'Depth'}
                                <img src="/img/arrow-right.svg" className="w-[14px] h-[14px] rotate-90"/>
                                {showPopup && (
                                    <Popup
                                        styles="top-[50px] right-0"
                                        items={['Price', 'Depth']}
                                        onClick={handleSelectChart}
                                    />
                                )}
                            </div>
                            <div
                                className="flex items-center justify-center cursor-pointer text-[16px] leading-[24px] text-white font-semibold border-[1px] border-white rounded-full px-4 py-2 h-[42px] gap-2">
                                3 sec
                                <img src="/img/arrow-right.svg" className="w-[14px] h-[14px] rotate-90"/>
                            </div>
                        </div>
                    </div>
                    <div className="md:hidden flex flex-col px-6 gap-4">
                        <div className="flex items-center gap-4">
                            <div
                                className={`flex items-center justify-center w-full cursor-pointer text-[16px] leading-[21px] h-[42px] text-white font-semibold rounded-full ${
                                    chartType === 'candlestick' ? 'trade-bg' : ''
                                }`}
                                onClick={() => handleSelectChart('Price')}
                            >
                                Price
                            </div>
                            <div
                                className={`flex items-center justify-center w-full cursor-pointer text-[16px] leading-[21px] h-[42px] text-white font-semibold rounded-full ${
                                    chartType === 'depth' ? 'trade-bg' : ''
                                }`}
                                onClick={() => handleSelectChart('Depth')}
                            >
                                Depth
                            </div>
                        </div>
                        <div className="grid grid-cols-2">
                            <p className="text-[14px] text-[#CACACA] leading-[22px]">
                                Open: <span className="text-[#11CABE]">{latestCandle.y[0].toFixed(3)}</span>
                            </p>
                            <p className="text-[14px] self-end text-[#CACACA] leading-[22px]">
                                Low: <span className="text-[#11CABE]">{latestCandle.y[2].toFixed(3)}</span>
                            </p>
                            <p className="text-[14px] text-[#CACACA] leading-[22px]">
                                High: <span className="text-[#11CABE]">{latestCandle.y[1].toFixed(3)}</span>
                            </p>
                            <p className="text-[14px] self-end text-[#CACACA] leading-[22px]">
                                Close: <span className="text-[#11CABE]">{latestCandle.y[3].toFixed(3)}</span>
                            </p>
                        </div>
                    </div>
                </div>

                <div className="w-full h-full min-h-0 flex-1">
                    {candlestickData.length > 0 && depthData.length > 0 ? (
                        <>
                            <div className="md:hidden w-[150%] overflow-x-hidden">
                                <ReactApexChart
                                    key={`mobile-${chartType}`}
                                    options={options}
                                    series={series}
                                    type={chartType === 'candlestick' ? 'candlestick' : 'area'}
                                    height={480}
                                    width="100%"
                                />
                            </div>
                            <div className="md:block hidden w-full h-full">
                                <ReactApexChart
                                    key={`desktop-${chartType}`}
                                    options={options}
                                    series={series}
                                    type={chartType === 'candlestick' ? 'candlestick' : 'area'}
                                    height="100%"
                                    width="100%"
                                />
                            </div>
                        </>
                    ) : (
                        <div className="text-white text-center">No data available for the chart</div>
                    )}
                </div>
            </div>
        </div>
    );
}