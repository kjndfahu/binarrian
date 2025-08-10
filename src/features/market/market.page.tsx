import {HomeHero} from "@/features/home/home-hero.tsx";
import {MarketTable} from "@/features/market/market-table.tsx";

export function MarketPage(){
    return (
        <div className="flex flex-col px-[80px] relative overflow-y-hidden overflow-x-hidden gap-[100px]">
            <HomeHero title="Markets" padding="pt-[100px]"/>
            <MarketTable/>
        </div>
    )
}


export default MarketPage;