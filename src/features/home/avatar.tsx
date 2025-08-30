export function Avatar({styles}:{styles:string}){
    return (
        <div className={`absolute ${styles} flex flex-col items-center gap-1`}>
            <div className="w-[45px] visit-btn rounded-full h-[45px]"></div>
            <div className="w-[10px] aspect-square h-[10px] rounded-full bg-white"></div>
        </div>
    )
}