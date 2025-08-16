import {HomeHero} from "@/features/home/home-hero.tsx";
import {MarketTable} from "@/features/market/market-table.tsx";

export function MarketPage(){
    return (
        <div className="flex flex-col 2xl:px-20 xl:px-16 lg:px-12 md:px-10 sm:px-8 px-6 relative overflow-y-hidden overflow-x-hidden gap-[100px]">
            <HomeHero title="Markets" padding="lg:pt-[100px]"/>
            <MarketTable/>
        </div>
    )
}


export default MarketPage;