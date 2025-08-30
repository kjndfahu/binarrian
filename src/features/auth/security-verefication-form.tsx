import {NewPasswordInputs} from "@/features/auth/new-password-inputs.tsx";
import {SecurityVereficationInputs} from "@/features/auth/security-verefication-inputs.tsx";

export function SecurityVereficationForm(){
    return (
        <>
            <h2 className="text-[48px] text-left about-text leading-11">Security<br/> verification</h2>
            <p className="text-[16px] text-[#9CA3AF] py-4 leading-[20px]">Enter the 4 digit code received.</p>
            <SecurityVereficationInputs/>
            <div className="flex items-center gap-2">
                <button
                    className="flex items-center justify-center gap-2 font-bold text-[16px] border-[1px] border-[#D0DCFF8F] cursor-pointer text-white leading-[20px] faq-bg rounded-full h-[51px] sm:w-[163px] w-full">
                    Resend code
                </button>

                <button
                    className="flex items-center justify-center gap-2 font-bold text-[16px] cursor-pointer text-white leading-[20px] visit-btn rounded-full h-[51px] sm:w-[163px] w-full">
                    Continue
                    <img src="/img/arrow-right.svg" alt="arrow"/>
                </button>
            </div>
        </>
    )
}