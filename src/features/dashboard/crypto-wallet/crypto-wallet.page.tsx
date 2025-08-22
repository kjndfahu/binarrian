import { useState, useRef } from "react";
import {CryptoWalletBlock} from "@/features/dashboard/crypto-wallet/crypto-wallet-block.tsx";
import {WalletSection} from "@/features/dashboard/crypto-wallet/wallet-section.tsx";
import {CryptoWalletTable} from "@/features/dashboard/crypto-wallet/crypto-wallet-table.tsx";

export function CryptoWalletPage() {
    const scrollContainerRef = useRef<HTMLDivElement>(null);
    const cryptoBlocks = [
        { img: "/img/btc-graph-2.svg", number: 0.2133214214, value: "3,230.98 USD", logo: "/img/btc-icon.svg", isPositive: false, data: 0.12, symbol: "BTC" },
        { img: "/img/eth-graph-2.svg", number: 0.2133214214, value: "3,230.98 USD", logo: "/img/eth-icon.svg", isPositive: true, data: 0.25, symbol: "ETH" },
        { img: "/img/usdt-graph-2.svg", number: 0.3454364, value: "2,345.21 USD", logo: "/img/usdt-icon.svg", isPositive: true, data: 0.12, symbol: "USDT" },
        { img: "/img/bnb-graph-2.svg", number: 0.3476544, value: "5,545.89 USD", logo: "/img/bnb-icon.svg", isPositive: true, data: 0.32, symbol: "BNB" },
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
        <div className="flex overflow-y-hidden flex-col h-full 2xl:gap-6 gap-2 lg:px-8 md:px-5 px-4">
            <div className="flex flex-col gap-6">
                <div className="hidden md:grid grid-cols-4 2xl:gap-6 gap-2">
                    {cryptoBlocks.map((block, index) => (
                        <CryptoWalletBlock 
                            key={index}
                            img={block.img} 
                            number={block.number} 
                            value={block.value} 
                            logo={block.logo} 
                            isPositive={block.isPositive} 
                            data={block.data} 
                            symbol={block.symbol}
                        />
                    ))}
                </div>

                <div className="md:hidden flex flex-col gap-6">
                    <div 
                        ref={scrollContainerRef}
                        className="flex gap-6 overflow-x-auto overflow-y-hidden scrollbar-hide"
                    >
                        {cryptoBlocks.map((block, index) => (
                            <CryptoWalletBlock 
                                key={index}
                                img={block.img} 
                                number={block.number} 
                                value={block.value} 
                                logo={block.logo} 
                                isPositive={block.isPositive} 
                                data={block.data} 
                                symbol={block.symbol}
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
            
            <div className="flex w-full 2xl:gap-6 gap-2">
                <WalletSection/>
                <CryptoWalletTable/>
            </div>
        </div>
    )
}

export default CryptoWalletPage;