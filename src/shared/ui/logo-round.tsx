export function LogoRound({size, icon}:{size: string, icon:string}){
    return (
        <div className={`relative flex items-center justify-center ${size}`}>
            {/* Концентрические кольца (позади) */}
            <div className="absolute w-full h-full rounded-full border-[0.48px] border-white/40 -z-10"></div>
            <div className="absolute w-[110%] h-[110%] rounded-full border-[0.48px] border-white/30 -z-10 -top-[5%] -left-[5%]"></div>
            <div className="absolute w-[120%] h-[120%] rounded-full border-[0.48px] border-white/20 -z-10 -top-[10%] -left-[10%]"></div>
            <div className="absolute w-[130%] h-[130%] rounded-full border-[0.48px] border-white/15 -z-10 -top-[15%] -left-[15%]"></div>
            <div className="absolute w-[140%] h-[140%] rounded-full border-[0.48px] border-white/10 -z-10 -top-[20%] -left-[20%]"></div>
            
            {/* Центральный фиолетовый круг (спереди) */}
            <div className={`flex items-center justify-center rounded-full logo-round ${size} z-10`}>
                <img src={icon} alt="icon" />
            </div>
        </div>
    )
}