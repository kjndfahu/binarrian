import { useState, useRef } from "react";
import {MarketBlock} from "@/features/dashboard/market/market-block.tsx";
import {MarketTable} from "@/features/dashboard/market/market-table.tsx";

export function MarketPage() {
    const scrollContainerRef = useRef<HTMLDivElement>(null);
    const marketBlocks = [
        { title: "Top gainer (24h)", value: "USD 567.34", name: "Binance Coin", symbol: "BNB", data: 110.34, logo: "img/bnb-icon.svg" },
        { title: "New listing", value: "USD 34.02", name: "Ethereum", symbol: "ETH", data: 0.34, logo: "img/eth-icon.svg" },
        { title: "Highest volume (24h)", value: "USD 236,213.22", name: "Bitcoin", symbol: "BTC", data: 0.53, logo: "img/btc-icon.svg" },
        { title: "Most Visited", value: "USD 123.34", name: "Tether", symbol: "USDT", data: 2.23, logo: "img/usdt-icon.svg" }
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
        <div className="flex flex-col gap-6 overflow-hidden">
            <div className="flex flex-col gap-6 lg:pr-8 md:pr-5 lg:pl-8 md:pl-5 pl-4">
                <div className="hidden md:grid xl:grid-cols-4 grid-cols-2 gap-6">
                    {marketBlocks.map((block, index) => (
                        <MarketBlock
                            key={index}
                            title={block.title}
                            value={block.value}
                            name={block.name}
                            symbol={block.symbol}
                            data={block.data}
                            logo={block.logo}
                        />
                    ))}
                </div>

                <div className="md:hidden flex flex-col gap-6">
                    <div
                        ref={scrollContainerRef}
                        className="flex gap-6 overflow-x-auto overflow-y-hidden scrollbar-hide"
                    >
                        {marketBlocks.map((block, index) => (
                            <MarketBlock
                                key={index}
                                title={block.title}
                                value={block.value}
                                name={block.name}
                                symbol={block.symbol}
                                data={block.data}
                                logo={block.logo}
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
                                aria-label={`Go to slide ${index + 1}`}
                            />
                        ))}
                    </div>
                </div>
            </div>

            <div className="lg:px-8 md:px-5 px-4 overflow-hidden">
                <div style={{ height: 'calc(100vh - 305px)', overflowY: 'auto' }}>
                    <MarketTable />
                </div>
            </div>
        </div>
    )
}

export default MarketPage;