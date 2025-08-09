export function PlatformSection({title, text, img, imgStyle}:{title: string, text: string, img: string, imgStyle: string}){
    return (
        <div className="flex flex-col justify-between p-8 w-[700px] h-[500px] rounded-[24px] border-[1px] border-[#B189FF54] platform-section-bg">
            <div className="flex flex-col gap-3">
                <h2 className="text-[32px] text-white leading-[40px] font-semibold ">{title}</h2>
                <p className="text-[16px] w-[568px] leading-[24px] text-[#A5ADCF]">{text}</p>
            </div>
            <img className={imgStyle} src={img} alt="img"/>
        </div>
    )
}

