import { useState } from "react";
import { BenefitBlock } from "./benefit-block";
import React from "react";

const benefitInfo = [
    {
        title: 'Real-time monitoring',
        logo: '/img/real-time.svg',
        text: 'Risk management system actively monitors and analyzes user behavior in real time. If suspicious activity is detected, stricter withdrawal rules are set for security purposes.'
    },
    {
        title: 'Safety above all',
        logo: '/img/safety.svg',
        text: 'Our system is built primarily onsecurity technologies - they are implemented inevery development cycle. We are continuously test it for strength and even offer awards for detecting errors in software provision.'
    },
    {
        title: 'Reliable asset protection',
        logo: '/img/reliable.svg',
        text: 'User funds are stored securely offline on cold wallets. We provide triple protection. User assets are safe.'
    },
    {
        title: 'Privacy defense',
        logo: '/img/privacy.svg',
        text: 'In all our products and services we care about privacy most of all. We openly communicate what data from you we receive.'
    },
    {
        title: 'Authorization',
        logo: '/img/authorization.svg',
        text: 'This information is encrypted during storage and transfers. We have implemented strict rules authorization, access to your personal information.'
    },
    {
        title: 'Adaptive Fee Structure',
        logo: '/img/adaptive.svg',
        text: 'Trading fees adjust in real time based on user activity and market conditions, rewarding loyal and high-volume traders.'
    },
];

export function BenefitsSlider() {
    const getBlocksPerSlide = () => {
        return window.innerWidth < 768 ? 1 : 2;
    };

    const [blocksPerSlide, setBlocksPerSlide] = useState(getBlocksPerSlide());
    const totalSlides = Math.ceil(benefitInfo.length / blocksPerSlide);
    const centerSlide = Math.floor(totalSlides / 2);
    const [currentSlide, setCurrentSlide] = useState(centerSlide);
    const startIndex = currentSlide * blocksPerSlide;
    const visibleBlocks = benefitInfo.slice(startIndex, startIndex + blocksPerSlide);

    const updateBlocksPerSlide = () => {
        const newBlocksPerSlide = getBlocksPerSlide();
        if (newBlocksPerSlide !== blocksPerSlide) {
            setBlocksPerSlide(newBlocksPerSlide);
            const newTotalSlides = Math.ceil(benefitInfo.length / newBlocksPerSlide);
            setCurrentSlide(Math.min(currentSlide, newTotalSlides - 1));
        }
    };

    React.useEffect(() => {
        window.addEventListener('resize', updateBlocksPerSlide);
        return () => window.removeEventListener('resize', updateBlocksPerSlide);
    }, [blocksPerSlide]);

    const goToSlide = (slideIndex: number) => {
        setCurrentSlide(slideIndex);
    };

    return (
        <div className="flex relative flex-col items-center w-full">

            <div className="flex md:mt-15 mt-6 w-full z-[2] items-center gap-7 2xl:px-20 xl:px-16 lg:px-12 md:px-10 sm:px-8 px-6 overflow-hidden">
                {visibleBlocks.map((item, index) => (
                    <BenefitBlock
                        key={startIndex + index}
                        title={item.title}
                        logo={item.logo}
                        text={item.text}
                    />
                ))}
            </div>

            <div className="flex items-center sm:gap-3 gap-1 md:mt-[100px] mt-12">
                {Array.from({ length: totalSlides }, (_, index) => (
                    <button
                        key={index}
                        onClick={() => goToSlide(index)}
                        className={`h-[5px] rounded-full cursor-pointer transition-all duration-300 ${
                            index === currentSlide 
                                ? 'bg-white sm:w-[188px] w-[100px]' 
                                : 'bg-gray-600 w-10'
                        }`}
                    />
                ))}
            </div>
        </div>
    );
}