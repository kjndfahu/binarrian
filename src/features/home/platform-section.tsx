export function PlatformSection({title, text, img, imgStyle}:{title: string, text: string, img: string, imgStyle: string}){
    return (
        <div className="flex flex-col z-[2] justify-between lg:gap-0 gap-5 p-8 h-full lg:h-[498px] w-full lg:w-[700px] rounded-[24px] border-[1px] border-[#B189FF54] platform-section-bg">
            <div className="flex flex-col z-[2] gap-3">
                <h2 className="lg:text-[32px] sm:text-[28px] text-[24px] z-[2] text-white leading-[40px] font-semibold ">{title}</h2>
                <p className="lg:text-[16px] text-[12px] lg:leading-[24px] z-[2] leading-[16px] text-[#A5ADCF] break-words whitespace-normal">{text}</p>
            </div>
            <img className={imgStyle} src={img} alt="img"/>
        </div>
    )
}

