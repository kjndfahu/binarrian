import {ReactNode} from "react";

export function ReferralBlock({title, form}:{title:string, form:ReactNode}) {
    return (
        <div
            className="flex flex-col md:gap-0 gap-[35px] justify-between border-[1px] border-[#D0DCFF8F] rounded-[14px] p-7 faq-bg">
            <h3 className="md:text-[16px] text-[22px] lg:w-[370px] w-[210px] text-white md:leading-[20px] leading-[29px] font-medium">{title}</h3>
            {form}
        </div>
    )
}