import {HomeHero} from "@/features/home/home-hero.tsx";
import {BinarrianInfo} from "@/features/token-listing/binarrian-info.tsx";
import {ListingSection} from "@/features/token-listing/listing-section.tsx";
import {StartCooperation} from "@/features/token-listing/start-cooperation.tsx";

export function TokenListingPage() {
    return (
        <div className="flex flex-col relative overflow-y-hidden overflow-x-hidden gap-[100px]">
            <HomeHero
                title="To the moon with Binarrian"
                text="Get your trading volume to 1M+ USD with our Trading competition"
                padding="lg:pt-[100px] md:pt-[40px]"
                form={
                    <button
                        className="lg:text-[22px] md:text-[18px] text-[14px] cursor-pointer lg:h-[65px] md:h-[54px] h-[48px] text-white lg:font-bold md:font-medium font-normal rounded-full visit-btn lg:w-[248px] md:w-[220px] w-[168px] send-shadow">
                        Apply to list
                    </button>
                }/>
            <BinarrianInfo/>
            <ListingSection/>
            <StartCooperation/>
            {/*<IndiceSection text={cookiesText} className="whitespace-pre-line"/>*/}

            <img className="absolute top-[850px] left-0" src="/img/elipse-light-about.png" alt="light" />
            <img style={{ transform: "scaleX(-1)" }} className="absolute top-[850px] right-0" src="/img/elipse-light-about.png" alt="light" />
            <img className="absolute top-[850px] right-[0px]" src="/img/round-light-about.png" alt="light" />
        </div>
    )
}


export default TokenListingPage;