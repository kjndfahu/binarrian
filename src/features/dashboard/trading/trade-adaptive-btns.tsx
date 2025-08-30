'use client'

import React, { useState } from 'react';

interface TradeAdaptiveBtnsProps {
    onChartTypeChange?: (type: 'price' | 'depth') => void;
    activeChartType?: 'price' | 'depth';
}

export function TradeAdaptiveBtns({ onChartTypeChange, activeChartType = 'price' }: TradeAdaptiveBtnsProps) {
    const [isPopupOpen, setIsPopupOpen] = useState(false);

    const handleChartTypeSelect = (type: 'price' | 'depth') => {
        onChartTypeChange?.(type);
        setIsPopupOpen(false);
    };

    return (
        <div className="relative">
            <div className="flex items-center gap-[8px] md:gap-[15px]">
                <div
                    onClick={() => setIsPopupOpen(!isPopupOpen)}
                    className="flex items-center justify-center cursor-pointer text-[14px] md:text-[16px] leading-[20px] md:leading-[24px] text-white font-semibold border-[1px] border-white rounded-full px-3 md:px-4 py-1.5 md:py-2 h-[36px] md:h-[42px] gap-2">
                    {activeChartType === 'price' ? 'Price' : 'Depth'}
                    <img src="/img/arrow-right.svg" className={`w-[12px] h-[12px] md:w-[14px] md:h-[14px] transition-transform duration-200 ${isPopupOpen ? 'rotate-180' : 'rotate-90'}`}/>
                </div>
                <div
                    className="flex items-center justify-center cursor-pointer text-[14px] md:text-[16px] leading-[20px] md:leading-[24px] text-white font-semibold border-[1px] border-white rounded-full px-3 md:px-4 py-1.5 md:py-2 h-[36px] md:h-[42px] gap-2">
                    1 min
                    <img src="/img/arrow-right.svg" className="w-[12px] h-[12px] md:w-[14px] md:h-[14px] rotate-90"/>
                </div>
            </div>

            {isPopupOpen && (
                <div className="absolute top-full left-0 mt-2 z-50">
                    <div className="bg-[#070322] border border-[#D0DCFF8F] rounded-lg p-2 min-w-[120px]">
                        <div
                            onClick={() => handleChartTypeSelect('price')}
                            className={`px-3 py-2 rounded cursor-pointer text-sm font-medium transition-colors ${
                                activeChartType === 'price' 
                                    ? 'bg-[#11CABE] text-white' 
                                    : 'text-[#CACACA] hover:bg-[#1a1a2e]'
                            }`}
                        >
                            Price
                        </div>
                        <div
                            onClick={() => handleChartTypeSelect('depth')}
                            className={`px-3 py-2 rounded cursor-pointer text-sm font-medium transition-colors ${
                                activeChartType === 'depth' 
                                    ? 'bg-[#11CABE] text-white' 
                                    : 'text-[#CACACA] hover:bg-[#1a1a2e]'
                            }`}
                        >
                            Depth
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}