import {ReferralBlock} from "@/features/dashboard/referral-system/referral-block.tsx";
import {ReferralTotal} from "@/features/dashboard/referral-system/referral-total.tsx";
import {ReferralInfo} from "@/features/dashboard/referral-system/referral-info.tsx";
import {PromocodeForm} from "@/features/dashboard/referral-system/promocode-form.tsx";

export function PromocodeSection(){
    return (
        <div className="flex flex-col w-full gap-6">
            <h4 className="text-[16px] text-white leading-[20px] py-[14px] font-medium">Promocode</h4>
            <ReferralBlock title="You'll encrease your deposit and incomes" form={ <PromocodeForm/> }/>
            <ReferralTotal title="Total Earning" info="123,234543.00 USD"/>
            <ReferralInfo title="Bonus Reward" text="You’re earning 10% of the deposit on Binnarian." amount="123,234543.00 USD"/>
        </div>
    )
}