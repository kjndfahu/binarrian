import {NewPasswordInputs} from "@/features/auth/new-password-inputs.tsx";

export function NewPasswordForm(){
    return (
        <>
            <h2 className="text-[48px] text-left about-text leading-11">New<br/> password</h2>
            <NewPasswordInputs/>
            <button
                className="flex items-center justify-center gap-2 font-bold text-[16px] cursor-pointer text-white leading-[20px] visit-btn rounded-full h-[51px] w-[335px]">
                Continue
                <img src="/img/arrow-right.svg" alt="arrow"/>
            </button>
        </>
    )
}