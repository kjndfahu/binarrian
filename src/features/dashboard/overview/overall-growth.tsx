"use client"

import { useState, useEffect, useRef } from "react";
import Chart from 'chart.js/auto';

export function OverallGrowth() {
    const chartRef = useRef<HTMLCanvasElement>(null);
    const chartInstanceRef = useRef<Chart | null>(null);
    const [tab, setTab] = useState("1hour");

    const data = {
        labels: ['01', '02', '03', '04', '05', '06', '07', '08'],
        datasets: [
            {
                label: 'Orange',
                data: [3.5, 1.8, 2.8, 2.4, 1.2, 1.4, 2.0, 3.9],
                backgroundColor: (context) => {
                    const chart = context.chart;
                    const { ctx, chartArea } = chart;
                    if (!chartArea) return null;
                    const gradient = ctx.createLinearGradient(0, chartArea.top, 0, chartArea.bottom);
                    gradient.addColorStop(0, '#F7931A');
                    gradient.addColorStop(0.8646, 'rgba(247, 147, 26, 0.3)');
                    return gradient;
                },
                hoverBackgroundColor: (context) => {
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
                backgroundColor: (context) => {
                    const chart = context.chart;
                    const { ctx, chartArea } = chart;
                    if (!chartArea) return null;
                    const gradient = ctx.createLinearGradient(0, chartArea.top, 0, chartArea.bottom);
                    gradient.addColorStop(0, '#BD47FB');
                    gradient.addColorStop(0.8333, 'rgba(189, 71, 251, 0.3)');
                    return gradient;
                },
                hoverBackgroundColor: (context) => {
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
                backgroundColor: (context) => {
                    const chart = context.chart;
                    const { ctx, chartArea } = chart;
                    if (!chartArea) return null;
                    const gradient = ctx.createLinearGradient(0, chartArea.top, 0, chartArea.bottom);
                    gradient.addColorStop(0, '#30E0A1');
                    gradient.addColorStop(0.8073, 'rgba(48, 224, 161, 0.3)');
                    return gradient;
                },
                hoverBackgroundColor: (context) => {
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

    useEffect(() => {
        const ctx = chartRef.current?.getContext('2d');
        if (ctx && !chartInstanceRef.current) {
            chartInstanceRef.current = new Chart(ctx, {
                type: 'bar',
                data: data,
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
                                callback: (value) => `${value}%`,
                            },
                        },
                    },
                    plugins: {
                        legend: {
                            display: false,
                        },
                        tooltip: {
                            enabled: true,
                            external: (context) => {
                                const { chart, tooltip } = context;
                                let tooltipEl = chart.canvas.parentNode.querySelector('div.custom-tooltip');

                                if (!tooltipEl) {
                                    tooltipEl = document.createElement('div');
                                    tooltipEl.className = 'custom-tooltip';
                                    tooltipEl.style.background = 'rgba(0, 0, 0, 0.8)';
                                    tooltipEl.style.borderRadius = '12px';
                                    tooltipEl.style.padding = '10px';
                                    tooltipEl.style.color = '#fff';
                                    tooltipEl.style.position = 'absolute';
                                    tooltipEl.style.pointerEvents = 'none';
                                    tooltipEl.style.zIndex = '1000';
                                    chart.canvas.parentNode.appendChild(tooltipEl);
                                }

                                if (tooltip.opacity === 0) {
                                    tooltipEl.style.opacity = '0';
                                    return;
                                }

                                if (tooltip.body) {
                                    const title = tooltip.title[0] || '';
                                    const dataPoint = tooltip.dataPoints[0];
                                    let content = '';

                                    // Map dataset labels to cryptocurrency-style data
                                    const tooltipData = {
                                        'Orange': { symbol: 'BTC', name: 'Bitcoin', change: '2.36%' },
                                        'Purple': { symbol: 'ETH', name: 'Ethereum', change: '1.80%' },
                                        'Teal': { symbol: 'USDT', name: 'Tether', change: '1.64%' },
                                    };

                                    const dataset = tooltipData[dataPoint.dataset.label] || { symbol: '', name: '', change: '0%' };
                                    content += `
                    <div style="display: flex; align-items: center; gap: 8px;">
                      <span style="background: ${dataPoint.dataset.backgroundColor}; width: 16px; height: 16px; border-radius: 50%; display: inline-block;"></span>
                      <span style="font-weight: bold;">${dataset.symbol}</span>
                      <span style="color: #14B8A6;">⬆ ${dataset.change}</span>
                    </div>
                    <div style="margin-top: 4px;">${dataset.name}</div>
                  `;

                                    tooltipEl.innerHTML = content;
                                }

                                const position = chart.canvas.getBoundingClientRect();
                                tooltipEl.style.left = position.left + tooltip.caretX + 'px';
                                tooltipEl.style.top = position.top + tooltip.caretY + 'px';
                                tooltipEl.style.opacity = '1';
                            },
                        },
                    },
                    barThickness: 20,
                },
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
                    <div className="flex gap-4 items-center">
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