import {InfoBlock} from "@/features/token-listing/info-block.tsx";

export function BinarrianInfo() {
    return (
        <div className="flex flex-col 2xl:px-20 xl:px-16 lg:px-12 md:px-10 sm:px-8 px-6 md:pt-[170px] pt-20 items-center justify-center relative md:gap-16 gap-12">
            <div className="flex flex-col items-center justify-center gap-6">
                <h2 className="xl:text-[60px] lg:text-[48px] md:text-[42px] sm:text-[36px] text-[32px] text-center leading-[60px] lg:leading-[55px] leading-12 text-white">Why will your Binarrian?</h2>
                <p className="lg:text-[20px] text-[16px] text-center lg:leading-6 leading-4 how-it-works-text">You will get the most complete solution in the market, which will help you to grow.</p>
            </div>
            <div className="grid 2xl:grid-cols-4 md:grid-cols-2 grid-cols-1 pt-[38px] 2xl:gap-[18px] gap-10 w-full">
                <InfoBlock logo="/img/browser.svg" title="3 million users"
                           text="At the moment, our exchange has more than 3 million registered users from more than 150 countries & we continue to grow."/>
                <InfoBlock logo="/img/tick.svg" title="Simple ID Check"
                           text="Users can trade and make unlimited deposits and withdrawals in any digital asset."/>
                <InfoBlock logo="/img/person.svg" title="Personal manager"
                           text="Your Binarrian Relations manager will make sure to answer all your questions and solve any issues 24/7."/>
                <InfoBlock logo="/img/coin.svg" title="Buy Crypto"
                           text="Our users can get cryptocurrencies using the services on our platform with maximum convenience through Visa / Mastercard"/>
                <img className="absolute md:rotate-0 rotate-90 pointer-events-none select-none z-[1] h-full top-[5px] md:w-[90vw]" src="/img/board.png" alt="board"/>
            </div>
        </div>
    )
}