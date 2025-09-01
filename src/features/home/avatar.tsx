export function Avatar({styles}:{styles:string}){
    return (
        <div className={`absolute ${styles} flex flex-col items-center md:gap-1 sm:gap-[2px] gap-[1px]`}>
            <div className="2xl:w-[45px] xl:w-[38px] lg:w-[28px] md:w-[19px] sm:w-[14px] w-[11px] visit-btn rounded-full 2xl:h-[45px] xl:h-[38px] lg:h-[28px] md:h-[19px] sm:h-[14px] h-[11px]"></div>
            <div className="2xl:w-[10px] xl:w-2 lg:w-[6px] md:w-1 sm:w-[3px] w-[2px] aspect-square 2xl:h-[10px] xl:h-2 lg:h-[6px] md:h-1 sm:h-[3px] h-[2px] rounded-full bg-white"></div>
        </div>
    )
}