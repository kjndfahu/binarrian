import {ReactNode} from "react";

export function ReferralBlock({title, form}:{title:string, form:ReactNode}) {
    return (
        <div
            className="flex flex-col justify-between border-[1px] border-[#D0DCFF8F] rounded-[14px] p-7 h-[195px] faq-bg">
            <h3 className="text-[16px] w-[370px] text-white leading-[20px] font-medium">{title}</h3>
            {form}
        </div>
    )
}