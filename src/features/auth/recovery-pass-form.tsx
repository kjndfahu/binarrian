import {RecoveryPassInput} from "@/features/auth/recovery-pass-input.tsx";

export function RecoveryPassForm(){
    return (
        <>
            <h2 className="text-[48px] text-left about-text leading-11">Password<br/> Recovery</h2>
            <p className="text-[14px] text-[#9CA3AF] leading-[20px]">Type your e-mail address you used for
                registration<br/> on our platform below.</p>
            <RecoveryPassInput/>
            <button
                className="flex items-center justify-center gap-2 font-bold text-[16px] cursor-pointer text-white leading-[20px] visit-btn rounded-full h-[51px] w-[335px]">
                Continue
                <img src="/img/arrow-right.svg" alt="arrow"/>
            </button>
        </>
    )
}