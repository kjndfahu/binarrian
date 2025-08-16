import { useState } from "react";

export function TimeBlock() {
    const [timeValue, setTimeValue] = useState(3);
    const [timeUnit, setTimeUnit] = useState("Months");
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const timeUnits = ["Days", "Months", "Years"];

    const handleIncrement = () => {
        if (timeValue < 120) {
            setTimeValue(prev => prev + 1);
        }
    };

    const handleDecrement = () => {
        if (timeValue > 1) {
            setTimeValue(prev => prev - 1);
        }
    };

    const handleUnitChange = (unit: string) => {
        setTimeUnit(unit);
        setIsDropdownOpen(false);
    };

    return (
        <div className="flex flex-col w-full gap-5">
            <div className="flex items-center justify-between">
                <h4 className="text-[15px] leading-[20px] font-medium text-white">Time</h4>
                <div className="flex items-center justify-center buy-crypto-bg border-[1px] border-white w-[20px] h-[20px] rounded-full ">
                    <img src="/img/three-dots.svg" alt="dots"/>
                </div>
            </div>
            <div className="flex flex-col items-center justify-center h-[101px] w-full rounded-[12px] buy-crypto-bg">
                <div className="flex items-center gap-[9px] py-2">
                    <img 
                        src="/img/minus-time.svg" 
                        alt="minus"
                        onClick={handleDecrement}
                        className="cursor-pointer hover:opacity-80 transition-opacity"
                    />
                    <span className="text-[15px] leading-[25px] font-medium text-white text-center min-w-[20px]">
                        {timeValue}
                    </span>
                    <img 
                        src="/img/plus-time.svg" 
                        alt="plus"
                        onClick={handleIncrement}
                        className="cursor-pointer hover:opacity-80 transition-opacity"
                    />
                    <div className="relative">
                        <div
                            className="flex items-center gap-2 cursor-pointer"
                            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                        >
                            <span className="text-white text-[16px]">{timeUnit}</span>
                            <img className={`${isDropdownOpen ? 'rotate-180' : ''} cursor-pointer`}
                                 src="/img/arrow-down-time.svg" alt="arrow"/>
                        </div>

                        {isDropdownOpen && (
                            <div
                                className="absolute top-full left-0 mt-2 bg-[#1A1B2E] border border-[#D0DCFF8F] rounded-lg py-2 min-w-[100px] z-10">
                                {timeUnits.map((unit) => (
                                    <button
                                        key={unit}
                                        onClick={() => handleUnitChange(unit)}
                                        className={`w-full px-4 py-2 text-left text-[15px] leading-[25px] hover:bg-white/10 transition-colors ${
                                            timeUnit === unit ? 'text-white bg-white/5' : 'text-[#A5ADCF]'
                                        }`}
                                    >
                                        {unit}
                                    </button>
                                ))}
                            </div>
                        )}
                    </div>
                </div>
                <div className="flex items-center gap-[10px]">
                    <img className="w-[12px] h-[12px]" src="/img/info.svg" alt="info"/>
                    <p className="text-[8px] leading-[20px] text-[#5D6588]">You can stake from 30 to 120 days.</p>
                </div>
            </div>
        </div>
    )
}