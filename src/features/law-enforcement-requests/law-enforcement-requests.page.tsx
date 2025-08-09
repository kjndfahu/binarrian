import {HomeHero} from "@/features/home/home-hero.tsx";
import {IndiceSection} from "@/features/indices/indice-section.tsx";
import {lawText} from "@/shared/model/texts.ts";

export function LawEnforcementRequests() {
    return (
        <div className="flex flex-col px-[80px] relative overflow-y-hidden overflow-x-hidden gap-[100px]">
            <HomeHero title="Law Enforcement Requests" padding="pt-[100px]"/>
            <img className="self-center pt-[160px]" src="/img/laq.svg" alt="law"/>

            <IndiceSection text={lawText} className="whitespace-pre-line"/>

            <img className="absolute top-[850px] left-0" src="/img/elipse-light-about.png" alt="light"/>
            <img style={{transform: "scaleX(-1)"}} className="absolute top-[850px] right-0"
                 src="/img/elipse-light-about.png" alt="light"/>
            <img className="absolute top-[850px] right-[0px]" src="/img/round-light-about.png" alt="light"/>
        </div>
    )
}

export default LawEnforcementRequests;