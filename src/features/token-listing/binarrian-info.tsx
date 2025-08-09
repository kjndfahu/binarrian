import {InfoBlock} from "@/features/token-listing/info-block.tsx";

export function BinarrianInfo() {
    return (
        <div className="flex flex-col px-[80px] pt-[170px] items-center justify-center relative gap-16">
            <div className="flex flex-col items-center justify-center gap-6">
                <h2 className="text-[60px] leading-[60px] text-white">Why will your Binarrian?</h2>
                <p className="text-[20px] leading-6 how-it-works-text">You will get the most complete solution in the market, which will help you to grow.</p>
            </div>
            <div className="flex items-center justify-between pt-[38px] gap-[18px] w-full">
                <InfoBlock logo="/img/browser.svg" title="3 million users" text="At the moment, our exchange has more than 3 million registered users from more than 150 countries & we continue to grow."/>
                <InfoBlock logo="/img/tick.svg" title="Simple ID Check" text="Users can trade and make unlimited deposits and withdrawals in any digital asset."/>
                <InfoBlock logo="/img/person.svg" title="Personal manager" text="Your Binarrian Relations manager will make sure to answer all your questions and solve any issues 24/7."/>
                <InfoBlock logo="/img/coin.svg" title="Buy Crypto" text="Our users can get cryptocurrencies using the services on our platform with maximum convenience through Visa / Mastercard"/>
            </div>
        </div>
    )
}