import { useEffect, useRef, useState } from "react";
import { PlatformSection } from "@/features/home/platform-section.tsx";

const platformSlides = [
    {
        title: "Protection",
        text: "Our platform offers industry-leading security to safeguard your assets. Advanced encryption and multi-layer authentication keep your data protected. We prioritize your safety, with every transaction.",
        img: "/img/protection-img.svg",
        imgStyle: "self-center md:h-auto h-[100px] z-[2]"
    },
    {
        title: "Dashboard",
        text: "Buy and sell cryptocurrencies all in one place with ease. The intuitive dashboard puts you in full control of your transactions. Track your portfolio and market trends without switching platforms.",
        img: "/img/dashboard-img.svg",
        imgStyle: "self-center z-[2]"
    },
    {
        title: "Device Support",
        text: "Access your account from any device—mobile, tablet, or desktop. The platform is optimized for a seamless experience across all screen sizes. Stay connected and in control of your crypto wherever you are.",
        img: "/img/device-support.svg",
        imgStyle: "self-center md:h-auto h-[106px] z-[2]"
    }
];

export function PlatformInfo(){
    const [currentSlide, setCurrentSlide] = useState(1); 
    const containerRef = useRef<HTMLDivElement | null>(null);
    const [sideWidth, setSideWidth] = useState(210);

    const CENTER_WIDTH = 700;
    const GAP_BETWEEN = 20;

    const goToSlide = (slideIndex: number) => {
        setCurrentSlide(slideIndex);
    };

    const recalcWidths = () => {
        const containerWidth = containerRef.current?.offsetWidth || window.innerWidth;
        const visibleWidth = Math.max(0, containerWidth - CENTER_WIDTH - GAP_BETWEEN * 2);
        const newSideWidth = Math.floor(visibleWidth / 2);
        setSideWidth(newSideWidth);
    };

    useEffect(() => {
        recalcWidths();
        const onResize = () => recalcWidths();
        window.addEventListener("resize", onResize);
        return () => window.removeEventListener("resize", onResize);
    }, []);

    
    const getSlideIndices = () => {
        const leftIndex = currentSlide === 0 ? 2 : currentSlide - 1;
        const centerIndex = currentSlide;
        const rightIndex = currentSlide === 2 ? 0 : currentSlide + 1;
        
        return { leftIndex, centerIndex, rightIndex };
    };

    const { leftIndex, centerIndex, rightIndex } = getSlideIndices();

    const leftTranslate = -(CENTER_WIDTH - sideWidth);

    return (
        <div className="flex flex-col relative overflow-hidden md:pb-0 pb-[150px] lg:px-0 md:px-10 sm:px-8 px-6 gap-10 items-center">
            <h2 className="xl:text-[60px] lg:text-[52px] md:text-[45px] sm:text-[38px] text-[32px] xl:leading-[60px] lg:leading-[56px] leading-[48px] text-center about-text">The
                most trusted cryptocurrency platform</h2>
            <p className="lg:text-[24px] lg:leading-6 md:text-[20px] text-[16px] md:leading-5 leading-8 text-center text-[#E5E6ED]">We
                have a features that make our platform the best place to trading.</p>


            <div ref={containerRef} className="flex relative flex-col items-center w-full md:pt-20 overflow-hidden">
                <div className="flex items-center gap-5 relative w-full justify-center overflow-hidden">

                    <div className="hidden lg:block overflow-hidden transition-all duration-700 ease-in-out"
                         style={{width: `${sideWidth}px`}}>
                        <div className="w-full" style={{transform: `translateX(${leftTranslate}px)`}}>
                            <PlatformSection
                                title={platformSlides[leftIndex].title}
                                text={platformSlides[leftIndex].text}
                                img={platformSlides[leftIndex].img}
                                imgStyle={platformSlides[leftIndex].imgStyle}
                            />
                        </div>
                    </div>


                    <div className="w-full lg:w-[700px] transition-all duration-700 ease-in-out">
                        <PlatformSection
                            title={platformSlides[centerIndex].title}
                            text={platformSlides[centerIndex].text}
                            img={platformSlides[centerIndex].img}
                            imgStyle={platformSlides[centerIndex].imgStyle}
                        />
                    </div>


                    <div className="hidden lg:block overflow-hidden transition-all duration-700 ease-in-out"
                         style={{width: `${sideWidth}px`}}>
                        <div className="w-full">
                            <PlatformSection
                                title={platformSlides[rightIndex].title}
                                text={platformSlides[rightIndex].text}
                                img={platformSlides[rightIndex].img}
                                imgStyle={platformSlides[rightIndex].imgStyle}
                            />
                        </div>
                    </div>
                </div>


                <div className="flex items-center gap-3  z-[3] lg:mt-[100px] z-[2] md:mt-[60px] mt-12">
                    {platformSlides.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => goToSlide(index)}
                            className={`h-[5px] rounded-full transition-all cursor-pointer duration-500 ease-in-out ${
                                index === currentSlide
                                    ? 'bg-white w-[188px]'
                                    : 'bg-gray-600 w-10 hover:bg-gray-400'
                            }`}
                        />
                    ))}
                </div>
            </div>


            <div className="sm:flex hidden absolute top-[180px] z-[1] w-screen left-1/2 transform -translate-x-1/2 overflow-hidden">
                <img className="w-[2416px] h-[600px] object-cover" src="/img/map.png" alt="map"/>
            </div>
        </div>
    )
}