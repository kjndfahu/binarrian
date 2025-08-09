export function RecoveryPassInput(){
    return (
        <div className="flex flex-col gap-[10px]">
            <div className="flex gap-2.5 items-center border-l border-[#d0dcff] border-opacity-50 p-[15px]">
                <img src="/img/mail.svg" alt="mail" />
                <input placeholder="Enter your email" className="text-[14px] outline-0 ring-0 placeholder:auth-text auth-text" type="text" />   
            </div>
        </div>
    )
}