import { useState } from "react";
import { BenefitBlock } from "./benefit-block";

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
    const totalSlides = Math.ceil(benefitInfo.length / 2);
    const centerSlide = Math.floor(totalSlides / 2);
    const [currentSlide, setCurrentSlide] = useState(centerSlide);
    const startIndex = currentSlide * 2;
    const visibleBlocks = benefitInfo.slice(startIndex, startIndex + 2);

    const goToSlide = (slideIndex: number) => {
        setCurrentSlide(slideIndex);
    };

    return (
        <div className="flex relative flex-col items-center w-full">

            <div className="flex mt-15 w-full z-[2] items-center gap-7 px-20 overflow-hidden">
                {visibleBlocks.map((item, index) => (
                    <BenefitBlock
                        key={startIndex + index}
                        title={item.title}
                        logo={item.logo}
                        text={item.text}
                    />
                ))}
            </div>

            <div className="flex items-center gap-3 mt-[100px]">
                {Array.from({ length: totalSlides }, (_, index) => (
                    <button
                        key={index}
                        onClick={() => goToSlide(index)}
                        className={`h-[5px] rounded-full cursor-pointer transition-all duration-300 ${
                            index === currentSlide 
                                ? 'bg-white w-[188px]' 
                                : 'bg-gray-600 w-10'
                        }`}
                    />
                ))}
            </div>
        </div>
    );
}