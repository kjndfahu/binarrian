import { HomeHero } from "../home/home-hero";
import { IndiceSection } from "./indice-section";

export function IndicesPage (){
    return (
        <div className="flex flex-col relative pb-[160px] overflow-x-hidden overflow-y-hidden 2xl:px-20 xl:px-16 lg:px-12 md:px-10 sm:px-8 px-6 gap-[100px]">
            <HomeHero title="Indices" padding="lg:pt-[100px] sm:pt-[70px] pt-[25px]"/>
            <img className="self-center pt-[50px]" src="/img/indices.svg" alt="indices" />
            <div className="flex flex-col pt-5 gap-[36px]">
                <IndiceSection title="Indices built on stable, dependable data sources" text="Kraken gives you access to up-to-the-second pricing data with cryptocurrency indices powered by CF Benchmarks. The indices process aggregated trade data from several of the top cryptocurrency exchanges, ensuring that settlement prices are reliable and represent a consensus value of your digital assets. The real time indices and spot rates from this selection of exchanges update every second to calculate a single, comprehensive price. This means you can take positions with the confidence that our price is a consistently accurate reflection of market value. CF Benchmarks is a leading provider of institutional grade indices that promote transparent price information across the cryptocurrency markets."/>
                <IndiceSection title="Ensuring Index and Market Integrity" text="We provide pricing indices for Bitcoin, Ether, Ripple-XRP, Bitcoin Cash and Litecoin through robust methodologies that ensure integrity and real-world replicability. Index methodologies and policies are publicly available, and index families are subject to independent oversight to ensure the utmost transparency and accountability for index users."/>
                <IndiceSection title="Two market views offer double the insight" text="Real-Time Indices and Spot Rates. Our real-time indices and spot rates are accurate down to the second, with second-by-second updates across all data sources. Our indices and spot rates are compiled from orderbook data from top cryptocurrency exchanges, giving a comprehensive and instantaneous price of aggregate demand for a cryptocurrency. They enable users to mark portfolios, manage risk with minimal chance of manipulation."/>
                <IndiceSection title="Reference Rates and Settlement Prices" text="Our Reference Rates and Settlement Prices are computed using transaction data from various cryptocurrency exchanges and are updated once a day every day of the year, powering all the Kraken Futures Contracts. The methodologies have been designed to minimize the possibility of manipulation and are the most trusted source of cryptocurrency benchmark pricing. The flagship CME CF Bitcoin Reference Rate powers the CME Bitcoin - U.S. Dollar futures contract, the most liquid regulated cryptocurrency derivative instrument, traded on the world’s largest derivatives exchange."/>
            </div>

            <img className="absolute top-[850px] left-0" src="/img/elipse-light-about.png" alt="light" />
            <img style={{ transform: "scaleX(-1)" }} className="absolute top-[850px] right-0" src="/img/elipse-light-about.png" alt="light" />
            <img className="absolute top-[850px] right-[0px]" src="/img/round-light-about.png" alt="light" />
            <img className="absolute z-[1] bottom-[-900px] right-[-50px]" src="/img/round-light-about.png" alt="light" />
        </div>
    )
}

export default IndicesPage; 