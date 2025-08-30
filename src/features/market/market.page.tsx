import {HomeHero} from "@/features/home/home-hero.tsx";
import {MarketTable} from "@/features/market/market-table.tsx";

export function MarketPage(){
    return (
        <div
            className="flex flex-col relative 2xl:px-20 xl:px-16 lg:px-12 md:px-10 sm:px-8 px-6 md:pb-[118px] relative overflow-y-hidden overflow-x-hidden gap-[100px]">
            <HomeHero title="Markets" padding="lg:pt-[100px]"/>
            <MarketTable/>

            <img className="absolute top-[1350px] left-0" src="/img/elipse-light-about.png" alt="light"/>
            <img className="absolute top-[1350px] scale-x-[-1] right-0" src="/img/elipse-light-about.png" alt="light"/>
            <img className="absolute top-[1000px] z-[2] right-[-100px]" src="/img/round-light-about.png"
                 alt="light"/>
        </div>
    )
}


export default MarketPage;