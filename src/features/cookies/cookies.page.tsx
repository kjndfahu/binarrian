import { HomeHero } from "../home/home-hero";

export function CookiesPage(){
    return (
        <div className="flex flex-col relative overflow-y-hidden overflow-x-hidden gap-[100px]">
            <HomeHero title="Cookies Policy" padding="pt-[100px]"/>
            <img className="self-center pt-[100px]" src="/img/cookies.svg" alt="cookies" />

            <div className="rounded-[20px] border-[1px] indice-bg text-[20px] text-[#CACACA] leading-[40px] border-[#D0DCFF8F] p-10">
                
            </div>
                    
            <img className="absolute top-[850px] left-0" src="/img/elipse-light-about.png" alt="light" />
            <img style={{ transform: "scaleX(-1)" }} className="absolute top-[850px] right-0" src="/img/elipse-light-about.png" alt="light" />
            <img className="absolute top-[850px] right-[0px]" src="/img/round-light-about.png" alt="light" />
        </div>
    )
}


export default CookiesPage; 