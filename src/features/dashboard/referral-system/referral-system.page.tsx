import {ReferralSection} from "@/features/dashboard/referral-system/referral-section.tsx";
import {PromocodeSection} from "@/features/dashboard/referral-system/promocode-section.tsx";

export function ReferralSystemPage() {
    return (
        <div className="flex xl:flex-row flex-col w-full xl:px-10 px-6 xl:gap-16 lg:gap-10 gap-5">
            <ReferralSection/>
            <PromocodeSection/>
        </div>
    )
}

export default ReferralSystemPage;