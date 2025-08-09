import { useState } from "react";
import { PlatformSection } from "@/features/home/platform-section.tsx";

const platformSlides = [
    {
        title: "Dashboard",
        text: "Buy and sell cryptocurrencies all in one place with ease. The intuitive dashboard puts you in full control of your transactions. Track your portfolio and market trends without switching platforms.",
        img: "/img/protection-img.svg",
        imgStyle: "self-center"
    },
    {
        title: "Trading Tools",
        text: "Advanced trading tools and real-time market data to help you make informed decisions. Access professional charts, indicators, and analysis tools designed for both beginners and experienced traders.",
        img: "/img/trading-tools.svg",
        imgStyle: "self-center"
    },
    {
        title: "Security",
        text: "Enterprise-grade security with multi-layer protection. Your assets are secured with cold storage, two-factor authentication, and advanced encryption protocols to ensure maximum safety.",
        img: "/img/security-img.svg",
        imgStyle: "self-center"
    }
];

export function PlatformInfo(){
    const [currentSlide, setCurrentSlide] = useState(1); // Начинаем с центрального слайда

    const goToSlide = (slideIndex: number) => {
        setCurrentSlide(slideIndex);
    };

    // Получаем индексы для левого, центрального и правого слайдов
    const getSlideIndices = () => {
        const leftIndex = currentSlide === 0 ? 2 : currentSlide - 1;
        const centerIndex = currentSlide;
        const rightIndex = currentSlide === 2 ? 0 : currentSlide + 1;
        
        return { leftIndex, centerIndex, rightIndex };
    };

    const { leftIndex, centerIndex, rightIndex } = getSlideIndices();

    return (
        <div className="flex flex-col gap-10 items-center">
            <h2 className="text-[60px] about-text">The most trusted cryptocurrency platform</h2>
            <p className="text-[24px] leading-[36px] text-[#E5E6ED]">We have a features that make our platform the best place to trading.</p>
            
            {/* Platform Slider */}
            <div className="flex relative flex-col items-center w-full pt-20">
                <div className="flex items-center gap-2 relative w-full justify-start pl-[200px]">
                    {/* Left Slide (Partial) */}
                    <div className="w-[500px] opacity-60 transform scale-95 transition-all duration-700 ease-in-out -translate-x-16">
                        <PlatformSection
                            title={platformSlides[leftIndex].title}
                            text={platformSlides[leftIndex].text}
                            img={platformSlides[leftIndex].img}
                            imgStyle={platformSlides[leftIndex].imgStyle}
                        />
                    </div>
                    
                    {/* Center Slide (Full) */}
                    <div className="w-[700px] opacity-100 transform scale-100 transition-all duration-700 ease-in-out">
                        <PlatformSection
                            title={platformSlides[centerIndex].title}
                            text={platformSlides[centerIndex].text}
                            img={platformSlides[centerIndex].img}
                            imgStyle={platformSlides[centerIndex].imgStyle}
                        />
                    </div>
                    
                    {/* Right Slide (Partial) */}
                    <div className="w-[500px] opacity-60 transform scale-95 transition-all duration-700 ease-in-out translate-x-16">
                        <PlatformSection
                            title={platformSlides[rightIndex].title}
                            text={platformSlides[rightIndex].text}
                            img={platformSlides[rightIndex].img}
                            imgStyle={platformSlides[rightIndex].imgStyle}
                        />
                    </div>
                </div>
                
                {/* Navigation Dots */}
                <div className="flex items-center gap-3 mt-[100px]">
                    {platformSlides.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => goToSlide(index)}
                            className={`h-[5px] rounded-full transition-all duration-500 ease-in-out ${
                                index === currentSlide 
                                    ? 'bg-white w-[188px]' 
                                    : 'bg-gray-600 w-10 hover:bg-gray-400'
                            }`}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}