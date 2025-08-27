import {HomeHero} from "@/features/home/home-hero.tsx";
import {IndiceSection} from "@/features/indices/indice-section.tsx";
import {regulatoryLicense} from "@/shared/model/texts.ts";

export function RegulatoryLicensePage() {
    return (
        <div className="flex flex-col sm:mb-0 mb-[100px] 2xl:px-20 xl:px-16 lg:px-12 md:px-10 sm:px-8 px-6 relative overflow-y-hidden overflow-x-hidden gap-[100px]">
            <HomeHero title="Regulatory License" padding="2xl:pt-[100px] lg:pt-[90px] md:pt-0"/>
            <img className="self-center lg:pt-[100px]" src="/img/refulatory.svg" alt="cookies"/>

            <IndiceSection text={regulatoryLicense} className="whitespace-pre-line"/>

            <img className="absolute top-[850px] left-0" src="/img/elipse-light-about.png" alt="light"/>
            <img style={{transform: "scaleX(-1)"}} className="absolute top-[850px] right-0"
                 src="/img/elipse-light-about.png" alt="light"/>
            <img className="absolute top-[850px] right-[0px]" src="/img/round-light-about.png" alt="light"/>
        </div>
    )
}

export default RegulatoryLicensePage;