import {ReferralInfo} from "@/features/dashboard/referral-system/referral-info.tsx";
import {ReferralTotal} from "@/features/dashboard/referral-system/referral-total.tsx";
import {ReferralBlock} from "@/features/dashboard/referral-system/referral-block.tsx";
import {ReferralForm} from "@/features/dashboard/referral-system/referral-form.tsx";

export function ReferralSection() {
    return (
        <div className="flex flex-col w-full gap-6">
            <h4 className="text-[16px] text-white leading-[20px] py-[14px] font-medium">Referral</h4>
            <ReferralBlock title="Invite people to Binarrian and earn 20% of trading fees" form={ <ReferralForm/> }/>
            <ReferralTotal title="Total Rewards" info="123,234543.00 USD"/>
            <ReferralInfo title="Inviter Rewards" text="You’re earning 20% of the trading fees your referrals pay." amount="123,234543.00 USD"/>
            <div className="flex items-center justify-between">
                <h5 className="text-[14px] leading-[17px] text-white font-semibold">Total Invited</h5>
                <h5 className="text-[14px] text-white leading-[17px] font-semibold">1231</h5>
            </div>
        </div>
    )
}