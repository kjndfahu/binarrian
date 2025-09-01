import {HomeHero} from "@/features/home/home-hero.tsx";
import {IndiceSection} from "@/features/indices/indice-section.tsx";
import {rewardText, rulesText, vulnerabilitiesText} from "@/shared/model/texts.ts";
import {TextBlock} from "@/features/bug-bounty/text-block.tsx";

export function BugBountyPage(){

    return (
        <div
            className="flex flex-col relative pb-[160px] overflow-x-hidden overflow-y-hidden 2xl:px-20 xl:px-16 lg:px-12 md:px-10 sm:px-8 px-6 gap-[100px]">
            <HomeHero title="Bug Bounty Program" padding="2xl:pt-[100px] lg:pt-[90px] md:pt-0"/>
            <img className="self-center lg:pt-[70px] md:pt-16" src="/img/bug-bounty.svg" alt="bug"/>

            <div className="flex flex-col lg:gap-9 md:gap-16 sm:gap-20 gap-24">
                <IndiceSection
                    text="The safety of our users’ funds and personal data is our main priority, therefore, the security of our platform and services is the field we work on daily and implement a number of advanced security technologies. Nevertheless, the contribution of the security researchers, who assist us in keeping our products and users safe, is extremely important for us, that is why we launched a vulnerability detection bounty program. The terms and conditions of our bug bounty program are described in this Bug Bounty Policy."/>
                <TextBlock title="Ineligibility"
                           text="Vulnerabilities found in out of scope resources are unlikely to be rewarded unless they present a serious business risk (at our sole discretion). In general, the following vulnerabilities do not correspond to the severity threshold:"/>
                <IndiceSection title="WEB" text={vulnerabilitiesText} className="whitespace-pre-line"/>
                <IndiceSection title="Reward" text={rewardText} className="whitespace-pre-line"/>
                <TextBlock title="Rules and Guidelines to Report the Vulnerabilities and Get the Reward"
                           text="Taking into account the illegal nature of unauthorized access to the computer systems, we agree not to take legal action against the researchers nor ask law enforcement bodies to investigate the cases of the security breach by the researchers in case they comply with the industry standards and responsible disclosure guidelines described in this section."/>
                <IndiceSection text={rulesText} className="whitespace-pre-line"/>
                <TextBlock
                    text="Do not violate any law and stay in the defined scope, and do not participate in any illegal actions (activities). After sending a report, you cannot tell anyone or anywhere about the vulnerability. Public disclosure of a vulnerability makes it ineligible for a reward. Furthermore, you shall not store screenshots and/or executable codes and scripts related to the vulnerability not to make the information available to third parties."/>
            </div>

            <img className="absolute top-[850px] left-0" src="/img/elipse-light-about.png" alt="light"/>
            <img style={{transform: "scaleX(-1)"}} className="absolute top-[850px] right-0"
                 src="/img/elipse-light-about.png" alt="light"/>
            <img className="absolute top-[850px] right-[0px]" src="/img/round-light-about.png" alt="light"/>

            <img className="absolute top-[3850px] right-[0px]" src="/img/round-light-about.png" alt="light"/>
        </div>
    )
}

export default BugBountyPage;