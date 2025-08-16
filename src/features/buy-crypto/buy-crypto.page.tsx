import { HomeHero } from "../home/home-hero";
import { BuyCryptoBlock } from "./buy-crypto-block";

export function BuyCryptoPage() {
    return (
        <div className="flex flex-col gap-[100px]">
            <HomeHero 
                padding="lg:pt-[80px] md:pt-[40px] pt-[25px]"
                title="New to cryptocurrency? Here's how to buy it!"
                text="Check out the list of our partners who provide our clients with a reduced percentage for the purchase of cryptocurrencies from the card!"/>
            <div className="flex flex-col 2xl:px-20 xl:px-16 lg:px-12 md:px-10 sm:px-8 px-6 mt-[180px] gap-[35px]">
                <BuyCryptoBlock image={`/img/buy-crypto/buy-crypto0.png`} text="MoonPay offers a fast and simple way to buy and sell cryptocurrencies. Buy crypto with credit card, bank transfers or Apple Pay today."/>
                <BuyCryptoBlock image={`/img/buy-crypto/buy-crypto1.png`} text="Its API-driven solutions enable web3 platforms to onboard users to 130+ crypto assets, abstracting away the complexity of user KYC, risk monitoring & compliance, payment methods and customer support."/>
                <BuyCryptoBlock image={`/img/buy-crypto/buy-crypto2.png`} text="Simplex by Nuvei is empowering the crypto industry with a full fiat infrastructure. We process crypto-to-credit card payments with a 100% guarantee – in case of a fraud chargeback, the merchant gets paid by us."/>
                <BuyCryptoBlock image={`/img/buy-crypto/buy-crypto3.png`} text="A custodial wallet with built-in crypto on-ramp functionality. Designed to manage your crypto just like you do with fiat: buy, sell, hold, and spend a wide range of coins."/>
                <BuyCryptoBlock image={`/img/buy-crypto/buy-crypto4.png`} text="CoinGate is a Lithuanian-based fintech company founded in 2014. The payment gateway offers cryptocurrency payment processing services for businesses of any sizes."/>
                <BuyCryptoBlock image={`/img/buy-crypto/buy-crypto5.png`} text="Banxa is the leading global Web3 on and off-ramp solution Crypto Buy. Our mission is to accelerate the world to Web3 and beyond."/>
                <BuyCryptoBlock image={`/img/buy-crypto/buy-crypto6.png`} text="Buy crypto with a credit card, debit card, Apple Pay or Google Pay. Delivered quickly to any wallet, no hidden fees or third-party custody. Buy online or in the BitPay app."/>
                <BuyCryptoBlock image={`/img/buy-crypto/buy-crypto7.png`} text="Changelly is an ecosystem of products that allows you to exchange, buy, trade, and sell cryptocurrencies and also earn free crypto with our affiliate program."/>
                <BuyCryptoBlock image={`/img/buy-crypto/buy-crypto8.png`} text="Phemex operates as a crypto derivatives trading platform. Phemex is a professional and trustworthy global cryptocurrency derivatives exchange."/>
                <BuyCryptoBlock image={`/img/buy-crypto/buy-crypto9.png`} text="Ramp is a global financial technology company building solutions that connect the crypto economy with today's financial infrastructure."/>
            </div>
        </div>
    );
}

export default BuyCryptoPage; 