import {HomeHero} from "@/features/home/home-hero.tsx";
import {
    closure, disclaimer, disputes,
    exchange, fees,
    identityVerefication, indemnity, limutation, premiumAccount, prohibited,
    registrationObligations, restriction,
    riskWarning, security, serviceAvailability, specialCondition,
    termsOfUse, transactions, transCryptoCurrency, unclaimedProperty
} from "@/shared/model/texts.ts";
import {Text} from "@/features/about-us/text.tsx";

export function TermsPage() {
    return (
        <div className="flex flex-col sm:mb-0 mb-[100px] 2xl:px-20 xl:px-16 lg:px-12 md:px-10 sm:px-8 px-6 relative overflow-y-hidden overflow-x-hidden gap-[100px]">
            <HomeHero title="Cookies Policy" padding="lg:pt-[100px] md:pt-[40px] pt-[25px]"/>
            <img className="self-center xl:pt-[200px] sm:pt-[100px] pt-[50px]" src="/img/terms.svg" alt="cookies"/>

            <div className="flex flex-col lg:gap-9 md:gap-16 sm:gap-20 gap-24">
                <Text title="1. TERMS OF USE" text={termsOfUse}/>
                <Text title="2. RISK WARNING" text={riskWarning}/>
                <Text title="3. REGISTRATION AND ACCOUNT OBLIGATIONS" text={registrationObligations}/>
                <Text title="4. IDENTITY VERIFICATION" text={identityVerefication}/>
                <Text title="5. EXCHANGE" text={exchange}/>
                <Text title="6. TRANSACTIONS" text={transactions}/>
                <Text title="7. FEES" text={fees}/>
                <Text title="8. SECURITY" text={security}/>
                <Text title="9. SERVICE AVAILABILITY" text={serviceAvailability}/>
                <Text title="10. TRANSACTIONS ON CRYPTOCURRENCY NETWORKS" text={transCryptoCurrency}/>
                <Text title="11. SPECIAL CONDITION" text={specialCondition}/>
                <Text title="12. PREMIUM ACCOUNT" text={premiumAccount}/>
                <Text title="13. CLOSURE OF YOUR ACCOUNT" text={closure}/>
                <Text title="14. RESTRICTION, SUSPENSION AND TERMINATION" text={restriction}/>
                <Text title="15. PROHIBITED ACTIVITIES" text={prohibited}/>
                <Text title="16. DISCLAIMER OF WARRANTIES" text={disclaimer}/>
                <Text title="17. LIMUTATION OF LIABILITY" text={limutation}/>
                <Text title="18. DISPUTES" text={disputes}/>
                <Text title="19. UNCLAIMED PROPERTY" text={unclaimedProperty}/>
                <Text title="20. INDEMNITY" text={indemnity}/>
            </div>
        </div>
    )
}

export default TermsPage;