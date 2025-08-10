import {ReferralSection} from "@/features/dashboard/referral-system/referral-section.tsx";
import {PromocodeSection} from "@/features/dashboard/referral-system/promocode-section.tsx";

export function ReferralSystemPage() {
    return (
        <div className="flex w-full px-10 gap-16">
            <ReferralSection/>
            <PromocodeSection/>
        </div>
    )
}

export default ReferralSystemPage;