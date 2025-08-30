"use client"

import { useState, useEffect, useRef } from "react";
import Chart from 'chart.js/auto';
import { OvverralGrowthAdaptive } from "./overral-growth-adaptive";

export function OverallGrowth() {
    const chartRef = useRef<HTMLCanvasElement>(null);
    const chartInstanceRef = useRef<Chart | null>(null);
    const [tab, setTab] = useState("1hour");

    const getDataForTab = (tab: string) => {
        switch (tab) {
            case '1hour':
                return {
                    labels: ['01', '02', '03', '04', '05', '06', '07', '08'],
                    datasets: [
                        {
                            label: 'Orange',
                            data: [3.5, 1.8, 2.8, 2.4, 1.2, 1.4, 2.0, 3.9],
                            symbol: 'BTC',
                            name: 'Bitcoin',
                            change: '2.36%',
                            backgroundColor: (context: any) => {
                                const chart = context.chart;
                                const { ctx, chartArea } = chart;
                                if (!chartArea) return null;
                                const gradient = ctx.createLinearGradient(0, chartArea.top, 0, chartArea.bottom);
                                gradient.addColorStop(0, '#F7931A');
                                gradient.addColorStop(0.8646, 'rgba(247, 147, 26, 0.3)');
                                return gradient;
                            },
                            hoverBackgroundColor: (context: any) => {
                                const chart = context.chart;
                                const { ctx, chartArea } = chart;
                                if (!chartArea) return null;
                                const gradient = ctx.createLinearGradient(359.96, chartArea.top, 359.96, chartArea.bottom);
                                gradient.addColorStop(0.5378, 'rgba(66, 82, 163, 0.4)');
                                gradient.addColorStop(1.022, 'rgba(0, 0, 0, 0)');
                                return gradient;
                            },
                            borderWidth: 0,
                            borderRadius: 4,
                        },
                        {
                            label: 'Purple',
                            data: [1.2, 2.3, 3.3, 1.6, 2.4, 0.5, 1.4, 1.9],
                            symbol: 'ETH',
                            name: 'Ethereum',
                            change: '1.80%',
                            backgroundColor: (context: any) => {
                                const chart = context.chart;
                                const { ctx, chartArea } = chart;
                                if (!chartArea) return null;
                                const gradient = ctx.createLinearGradient(0, chartArea.top, 0, chartArea.bottom);
                                gradient.addColorStop(0, '#BD47FB');
                                gradient.addColorStop(0.8333, 'rgba(189, 71, 251, 0.3)');
                                return gradient;
                            },
                            hoverBackgroundColor: (context: any) => {
                                const chart = context.chart;
                                const { ctx, chartArea } = chart;
                                if (!chartArea) return null;
                                const gradient = ctx.createLinearGradient(359.96, chartArea.top, 359.96, chartArea.bottom);
                                gradient.addColorStop(0.5378, 'rgba(66, 82, 163, 0.4)');
                                gradient.addColorStop(1.022, 'rgba(0, 0, 0, 0)');
                                return gradient;
                            },
                            borderWidth: 0,
                            borderRadius: 4,
                        },
                        {
                            label: 'Teal',
                            data: [2.4, 1.0, 2.0, 3.0, 2.4, 1.0, 2.8, 2.8],
                            symbol: 'USDT',
                            name: 'Tether',
                            change: '1.64%',
                            backgroundColor: (context: any) => {
                                const chart = context.chart;
                                const { ctx, chartArea } = chart;
                                if (!chartArea) return null;
                                const gradient = ctx.createLinearGradient(0, chartArea.top, 0, chartArea.bottom);
                                gradient.addColorStop(0, '#30E0A1');
                                gradient.addColorStop(0.8073, 'rgba(48, 224, 161, 0.3)');
                                return gradient;
                            },
                            hoverBackgroundColor: (context: any) => {
                                const chart = context.chart;
                                const { ctx, chartArea } = chart;
                                if (!chartArea) return null;
                                const gradient = ctx.createLinearGradient(359.96, chartArea.top, 359.96, chartArea.bottom);
                                gradient.addColorStop(0.5378, 'rgba(66, 82, 163, 0.4)');
                                gradient.addColorStop(1.022, 'rgba(0, 0, 0, 0)');
                                return gradient;
                            },
                            borderWidth: 0,
                            borderRadius: 4,
                        },
                    ],
                };
            case '24hour':
                return {
                    labels: ['01', '02', '03', '04', '05', '06', '07', '08'],
                    datasets: [
                        {
                            label: 'Orange',
                            data: [4.0, 2.0, 3.0, 2.5, 1.5, 1.8, 2.2, 4.1],
                            symbol: 'BTC',
                            name: 'Bitcoin',
                            change: '2.50%',
                            backgroundColor: (context: any) => {
                                const chart = context.chart;
                                const { ctx, chartArea } = chart;
                                if (!chartArea) return null;
                                const gradient = ctx.createLinearGradient(0, chartArea.top, 0, chartArea.bottom);
                                gradient.addColorStop(0, '#F7931A');
                                gradient.addColorStop(0.8646, 'rgba(247, 147, 26, 0.3)');
                                return gradient;
                            },
                            hoverBackgroundColor: (context: any) => {
                                const chart = context.chart;
                                const { ctx, chartArea } = chart;
                                if (!chartArea) return null;
                                const gradient = ctx.createLinearGradient(359.96, chartArea.top, 359.96, chartArea.bottom);
                                gradient.addColorStop(0.5378, 'rgba(66, 82, 163, 0.4)');
                                gradient.addColorStop(1.022, 'rgba(0, 0, 0, 0)');
                                return gradient;
                            },
                            borderWidth: 0,
                            borderRadius: 4,
                        },
                        {
                            label: 'Purple',
                            data: [1.5, 2.5, 3.5, 1.8, 2.6, 0.7, 1.6, 2.1],
                            symbol: 'ETH',
                            name: 'Ethereum',
                            change: '1.95%',
                            backgroundColor: (context: any) => {
                                const chart = context.chart;
                                const { ctx, chartArea } = chart;
                                if (!chartArea) return null;
                                const gradient = ctx.createLinearGradient(0, chartArea.top, 0, chartArea.bottom);
                                gradient.addColorStop(0, '#BD47FB');
                                gradient.addColorStop(0.8333, 'rgba(189, 71, 251, 0.3)');
                                return gradient;
                            },
                            hoverBackgroundColor: (context: any) => {
                                const chart = context.chart;
                                const { ctx, chartArea } = chart;
                                if (!chartArea) return null;
                                const gradient = ctx.createLinearGradient(359.96, chartArea.top, 359.96, chartArea.bottom);
                                gradient.addColorStop(0.5378, 'rgba(66, 82, 163, 0.4)');
                                gradient.addColorStop(1.022, 'rgba(0, 0, 0, 0)');
                                return gradient;
                            },
                            borderWidth: 0,
                            borderRadius: 4,
                        },
                        {
                            label: 'Teal',
                            data: [2.6, 1.2, 2.2, 3.2, 2.6, 1.2, 3.0, 3.0],
                            symbol: 'USDT',
                            name: 'Tether',
                            change: '1.70%',
                            backgroundColor: (context: any) => {
                                const chart = context.chart;
                                const { ctx, chartArea } = chart;
                                if (!chartArea) return null;
                                const gradient = ctx.createLinearGradient(0, chartArea.top, 0, chartArea.bottom);
                                gradient.addColorStop(0, '#30E0A1');
                                gradient.addColorStop(0.8073, 'rgba(48, 224, 161, 0.3)');
                                return gradient;
                            },
                            hoverBackgroundColor: (context: any) => {
                                const chart = context.chart;
                                const { ctx, chartArea } = chart;
                                if (!chartArea) return null;
                                const gradient = ctx.createLinearGradient(359.96, chartArea.top, 359.96, chartArea.bottom);
                                gradient.addColorStop(0.5378, 'rgba(66, 82, 163, 0.4)');
                                gradient.addColorStop(1.022, 'rgba(0, 0, 0, 0)');
                                return gradient;
                            },
                            borderWidth: 0,
                            borderRadius: 4,
                        },
                    ],
                };
            case '1day':
                return {
                    labels: ['01', '02', '03', '04', '05', '06', '07', '08'],
                    datasets: [
                        {
                            label: 'Orange',
                            data: [4.2, 2.2, 3.2, 2.7, 1.7, 2.0, 2.4, 4.3],
                            symbol: 'BTC',
                            name: 'Bitcoin',
                            change: '2.60%',
                            backgroundColor: (context: any) => {
                                const chart = context.chart;
                                const { ctx, chartArea } = chart;
                                if (!chartArea) return null;
                                const gradient = ctx.createLinearGradient(0, chartArea.top, 0, chartArea.bottom);
                                gradient.addColorStop(0, '#F7931A');
                                gradient.addColorStop(0.8646, 'rgba(247, 147, 26, 0.3)');
                                return gradient;
                            },
                            hoverBackgroundColor: (context: any) => {
                                const chart = context.chart;
                                const { ctx, chartArea } = chart;
                                if (!chartArea) return null;
                                const gradient = ctx.createLinearGradient(359.96, chartArea.top, 359.96, chartArea.bottom);
                                gradient.addColorStop(0.5378, 'rgba(66, 82, 163, 0.4)');
                                gradient.addColorStop(1.022, 'rgba(0, 0, 0, 0)');
                                return gradient;
                            },
                            borderWidth: 0,
                            borderRadius: 4,
                        },
                        {
                            label: 'Purple',
                            data: [1.7, 2.7, 3.7, 2.0, 2.8, 0.9, 1.8, 2.3],
                            symbol: 'ETH',
                            name: 'Ethereum',
                            change: '2.00%',
                            backgroundColor: (context: any) => {
                                const chart = context.chart;
                                const { ctx, chartArea } = chart;
                                if (!chartArea) return null;
                                const gradient = ctx.createLinearGradient(0, chartArea.top, 0, chartArea.bottom);
                                gradient.addColorStop(0, '#BD47FB');
                                gradient.addColorStop(0.8333, 'rgba(189, 71, 251, 0.3)');
                                return gradient;
                            },
                            hoverBackgroundColor: (context: any) => {
                                const chart = context.chart;
                                const { ctx, chartArea } = chart;
                                if (!chartArea) return null;
                                const gradient = ctx.createLinearGradient(359.96, chartArea.top, 359.96, chartArea.bottom);
                                gradient.addColorStop(0.5378, 'rgba(66, 82, 163, 0.4)');
                                gradient.addColorStop(1.022, 'rgba(0, 0, 0, 0)');
                                return gradient;
                            },
                            borderWidth: 0,
                            borderRadius: 4,
                        },
                        {
                            label: 'Teal',
                            data: [2.8, 1.4, 2.4, 3.4, 2.8, 1.4, 3.2, 3.2],
                            symbol: 'USDT',
                            name: 'Tether',
                            change: '1.75%',
                            backgroundColor: (context: any) => {
                                const chart = context.chart;
                                const { ctx, chartArea } = chart;
                                if (!chartArea) return null;
                                const gradient = ctx.createLinearGradient(0, chartArea.top, 0, chartArea.bottom);
                                gradient.addColorStop(0, '#30E0A1');
                                gradient.addColorStop(0.8073, 'rgba(48, 224, 161, 0.3)');
                                return gradient;
                            },
                            hoverBackgroundColor: (context: any) => {
                                const chart = context.chart;
                                const { ctx, chartArea } = chart;
                                if (!chartArea) return null;
                                const gradient = ctx.createLinearGradient(359.96, chartArea.top, 359.96, chartArea.bottom);
                                gradient.addColorStop(0.5378, 'rgba(66, 82, 163, 0.4)');
                                gradient.addColorStop(1.022, 'rgba(0, 0, 0, 0)');
                                return gradient;
                            },
                            borderWidth: 0,
                            borderRadius: 4,
                        },
                    ],
                };
            case '1week':
                return {
                    labels: ['01', '02', '03', '04', '05', '06', '07', '08'],
                    datasets: [
                        {
                            label: 'Orange',
                            data: [4.5, 2.5, 3.5, 3.0, 2.0, 2.3, 2.7, 4.6],
                            symbol: 'BTC',
                            name: 'Bitcoin',
                            change: '2.80%',
                            backgroundColor: (context: any) => {
                                const chart = context.chart;
                                const { ctx, chartArea } = chart;
                                if (!chartArea) return null;
                                const gradient = ctx.createLinearGradient(0, chartArea.top, 0, chartArea.bottom);
                                gradient.addColorStop(0, '#F7931A');
                                gradient.addColorStop(0.8646, 'rgba(247, 147, 26, 0.3)');
                                return gradient;
                            },
                            hoverBackgroundColor: (context: any) => {
                                const chart = context.chart;
                                const { ctx, chartArea } = chart;
                                if (!chartArea) return null;
                                const gradient = ctx.createLinearGradient(359.96, chartArea.top, 359.96, chartArea.bottom);
                                gradient.addColorStop(0.5378, 'rgba(66, 82, 163, 0.4)');
                                gradient.addColorStop(1.022, 'rgba(0, 0, 0, 0)');
                                return gradient;
                            },
                            borderWidth: 0,
                            borderRadius: 4,
                        },
                        {
                            label: 'Purple',
                            data: [2.0, 3.0, 4.0, 2.3, 3.1, 1.2, 2.1, 2.6],
                            symbol: 'ETH',
                            name: 'Ethereum',
                            change: '2.20%',
                            backgroundColor: (context: any) => {
                                const chart = context.chart;
                                const { ctx, chartArea } = chart;
                                if (!chartArea) return null;
                                const gradient = ctx.createLinearGradient(0, chartArea.top, 0, chartArea.bottom);
                                gradient.addColorStop(0, '#BD47FB');
                                gradient.addColorStop(0.8333, 'rgba(189, 71, 251, 0.3)');
                                return gradient;
                            },
                            hoverBackgroundColor: (context: any) => {
                                const chart = context.chart;
                                const { ctx, chartArea } = chart;
                                if (!chartArea) return null;
                                const gradient = ctx.createLinearGradient(359.96, chartArea.top, 359.96, chartArea.bottom);
                                gradient.addColorStop(0.5378, 'rgba(66, 82, 163, 0.4)');
                                gradient.addColorStop(1.022, 'rgba(0, 0, 0, 0)');
                                return gradient;
                            },
                            borderWidth: 0,
                            borderRadius: 4,
                        },
                        {
                            label: 'Teal',
                            data: [3.0, 1.7, 2.7, 3.7, 3.0, 1.7, 3.5, 3.5],
                            symbol: 'USDT',
                            name: 'Tether',
                            change: '1.90%',
                            backgroundColor: (context: any) => {
                                const chart = context.chart;
                                const { ctx, chartArea } = chart;
                                if (!chartArea) return null;
                                const gradient = ctx.createLinearGradient(0, chartArea.top, 0, chartArea.bottom);
                                gradient.addColorStop(0, '#30E0A1');
                                gradient.addColorStop(0.8073, 'rgba(48, 224, 161, 0.3)');
                                return gradient;
                            },
                            hoverBackgroundColor: (context: any) => {
                                const chart = context.chart;
                                const { ctx, chartArea } = chart;
                                if (!chartArea) return null;
                                const gradient = ctx.createLinearGradient(359.96, chartArea.top, 359.96, chartArea.bottom);
                                gradient.addColorStop(0.5378, 'rgba(66, 82, 163, 0.4)');
                                gradient.addColorStop(1.022, 'rgba(0, 0, 0, 0)');
                                return gradient;
                            },
                            borderWidth: 0,
                            borderRadius: 4,
                        },
                    ],
                };
            default:
                return { labels: [], datasets: [] };
        }
    };

    useEffect(() => {
        const ctx = chartRef.current?.getContext('2d');
        if (ctx) {
            if (chartInstanceRef.current) {
                chartInstanceRef.current.destroy();
            }
            chartInstanceRef.current = new Chart(ctx, {
                type: 'bar',
                data: getDataForTab(tab),
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    scales: {
                        x: {
                            grid: {
                                display: false,
                            },
                            ticks: {
                                color: '#9CA3AF',
                                font: {
                                    size: 12,
                                },
                            },
                        },
                        y: {
                            beginAtZero: true,
                            max: 5,
                            grid: {
                                color: '#374151',
                                borderDash: [3, 3],
                                borderWidth: 0.2,
                            },
                            ticks: {
                                color: '#9CA3AF',
                                font: {
                                    size: 12,
                                },
                                callback: (value: any) => `${value}%`,
                            },
                        },
                    },
                    plugins: {
                        legend: {
                            display: false,
                        },
                        tooltip: {
                            enabled: false,
                        },
                    },
                    barThickness: 20,
                },
            });

            // Custom tooltip logic
            const customTooltip = document.createElement('div');
            customTooltip.className = 'custom-tooltip';
            customTooltip.style.background = 'rgba(0, 0, 0, 0.8)';
            customTooltip.style.borderRadius = '12px';
            customTooltip.style.padding = '10px';
            customTooltip.style.color = '#fff';
            customTooltip.style.position = 'absolute';
            customTooltip.style.pointerEvents = 'none';
            customTooltip.style.zIndex = '1000';
            customTooltip.style.opacity = '0';
            chartRef.current?.parentNode?.appendChild(customTooltip);

            chartInstanceRef.current.canvas.addEventListener('mousemove', (event) => {
                const rect = chartInstanceRef.current!.canvas.getBoundingClientRect();
                const x = event.clientX - rect.left;
                const y = event.clientY - rect.top;

                const elements = chartInstanceRef.current!.getElementsAtEventForMode(
                    new MouseEvent('mousemove', { clientX: event.clientX, clientY: event.clientY }),
                    'nearest',
                    { intersect: true },
                    true
                );

                if (elements.length > 0) {
                    const index = elements[0].index;
                    const hoveredDatasets = getDataForTab(tab).datasets.filter((_, i) =>
                        chartInstanceRef.current!.getElementsAtEventForMode(
                            new MouseEvent('mousemove', { clientX: event.clientX, clientY: event.clientY }),
                            'nearest',
                            { intersect: true },
                            true
                        ).some(e => e.datasetIndex === i)
                    );

                    let content = `
                        <div style="display: flex; flex-direction: column; gap: 8px;">
                    `;
                    hoveredDatasets.forEach(dataset => {
                        content += `
                            <div style="display: flex; align-items: center; gap: 8px;">
                                <span style="background: ${dataset.backgroundColor({ chart: chartInstanceRef.current })}; width: 16px; height: 16px; border-radius: 50%; display: inline-block;"></span>
                                <span style="font-weight: bold;">${dataset.symbol}</span>
                                <span style="color: #14B8A6;">⬆ ${dataset.change}</span>
                            </div>
                            <div style="margin-top: 4px;">${dataset.name}</div>
                        `;
                    });
                    content += '</div>';

                    customTooltip.innerHTML = content;
                    customTooltip.style.left = `${event.pageX + 10}px`;
                    customTooltip.style.top = `${event.pageY - 10}px`;
                    customTooltip.style.opacity = '1';
                } else {
                    customTooltip.style.opacity = '0';
                }
            });

            chartInstanceRef.current.canvas.addEventListener('mouseout', () => {
                customTooltip.style.opacity = '0';
            });
        }
        return () => {
            if (chartInstanceRef.current) {
                chartInstanceRef.current.destroy();
                chartInstanceRef.current = null;
            }
        };
    }, [tab]);

    return (
        <div
            className="relative rounded-[14px] border border-transparent bg-gradient-to-br from-[rgba(208,220,255,0.28)] to-[rgba(208,220,255,0.025)] p-[1px]"
        >
            <div
                className="flex flex-col gap-[22px] bg-[#070322] h-full p-6 rounded-[12px]"
            >
                <div className="flex items-center justify-between">
                    <h3 className="text-[20px] text-white leading-[24px] font-bold">Overall Growth</h3>
                    <div className="xl:flex hidden gap-4 items-center">
                        <div
                            onClick={() => setTab('1hour')}
                            className={`text-[16px] ${tab === '1hour' ? 'faq-bg text-white' : 'bg-transparent text-[#CACACA]'} cursor-pointer rounded-full leading-[25px] font-semibold px-4 py-2`}
                        >
                            1 hour
                        </div>
                        <div
                            onClick={() => setTab('24hour')}
                            className={`text-[16px] ${tab === '24hour' ? 'faq-bg text-white' : 'bg-transparent text-[#CACACA]'} cursor-pointer rounded-full leading-[25px] font-semibold px-4 py-2`}
                        >
                            24 hour
                        </div>
                        <div
                            onClick={() => setTab('1day')}
                            className={`text-[16px] ${tab === '1day' ? 'faq-bg text-white' : 'bg-transparent text-[#CACACA]'} cursor-pointer rounded-full leading-[25px] font-semibold px-4 py-2`}
                        >
                            1 day
                        </div>
                        <div
                            onClick={() => setTab('1week')}
                            className={`text-[16px] ${tab === '1week' ? 'faq-bg text-white' : 'bg-transparent text-[#CACACA]'} cursor-pointer rounded-full leading-[25px] font-semibold px-4 py-2`}
                        >
                            1 week
                        </div>
                    </div>
                    <OvverralGrowthAdaptive />
                </div>
                <div
                    className="w-full h-[300px] mt-4 select-none"
                    style={{
                        outline: 'none',
                        WebkitUserSelect: 'none',
                        MozUserSelect: 'none',
                        msUserSelect: 'none',
                        userSelect: 'none',
                    }}
                    tabIndex={-1}
                >
                    <canvas ref={chartRef} />
                </div>
            </div>
        </div>
    );
}