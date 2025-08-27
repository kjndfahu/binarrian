import { useState, useRef } from "react";
import {StackingBlock} from "@/features/dashboard/stacking/stacking-block.tsx";
import {StakeBlock} from "@/features/dashboard/stacking/stake-block.tsx";
import {StakingTable} from "@/features/dashboard/stacking/stacking-table.tsx";

export function StackingPage() {
    const scrollContainerRef = useRef<HTMLDivElement>(null);
    const stackingBlocks = [
        { logo: "/img/btc-icon.svg", title: "BTC", number: 0.3454364, exchRate: "2,345.21 USD" },
        { logo: "/img/eth-icon.svg", title: "ETH", number: 0.2133214214, exchRate: "3,230.98 USD" },
        { logo: "/img/usdt-icon.svg", title: "USDT", number: 0.3454364, exchRate: "2,345.21 USD" },
        { logo: "/img/bnb-icon.svg", title: "BNB", number: 0.3476544, exchRate: "5,545.89 USD" },
    ];
    
    const totalSlides = 3;
    const [currentSlide, setCurrentSlide] = useState(0);

    const goToSlide = (slideIndex: number) => {
        setCurrentSlide(slideIndex);
        if (scrollContainerRef.current) {
            const slideWidth = scrollContainerRef.current.scrollWidth / totalSlides;
            scrollContainerRef.current.scrollTo({
                left: slideIndex * slideWidth,
                behavior: 'smooth'
            });
        }
    };

    return (
        <div className="flex flex-col overflow-y-hidden gap-8 w-full">
            <div className="flex flex-col gap-6">
                <div className="hidden md:grid xl:grid-cols-4 grid-cols-2 lg:px-8 md:px-5 px-4 gap-6">
                    {stackingBlocks.map((block, index) => (
                        <StackingBlock 
                            key={index}
                            logo={block.logo} 
                            title={block.title} 
                            number={block.number} 
                            exchRate={block.exchRate}
                        />
                    ))}
                </div>

                <div className="md:hidden flex flex-col lg:pl-8 md:pl-5 pl-4 gap-6">
                    <div 
                        ref={scrollContainerRef}
                        className="flex gap-6 overflow-x-auto overflow-y-hidden scrollbar-hide"
                    >
                        {stackingBlocks.map((block, index) => (
                            <StackingBlock 
                                key={index}
                                logo={block.logo} 
                                title={block.title} 
                                number={block.number} 
                                exchRate={block.exchRate}
                            />
                        ))}
                    </div>
                    <div className="flex items-center justify-center gap-3">
                        {Array.from({ length: totalSlides }, (_, index) => (
                            <button
                                key={index}
                                onClick={() => goToSlide(index)}
                                className={`h-[5px] rounded-full transition-all duration-300 cursor-pointer ${
                                    index === currentSlide 
                                        ? 'bg-white w-[188px]' 
                                        : 'bg-gray-600 w-10 hover:bg-gray-500'
                                }`}
                                aria-label={`Перейти к слайду ${index + 1}`}
                            />
                        ))}
                    </div>
                </div>
            </div>
            
            <div style={{ height: 'calc(100vh - 318px)'}} className="flex lg:pb-0 pb-6 lg:flex-row flex-col items-start lg:px-8 md:px-5 px-4 h-full gap-6">
                <StakeBlock/>
                <StakingTable/>
            </div>
        </div>
    )
}

export default StackingPage;