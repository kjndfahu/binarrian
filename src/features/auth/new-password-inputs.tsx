export function NewPasswordInputs(){
    return (
        <div className="flex flex-col gap-5">
            <div className="flex flex-col gap-[10px]">
                <label className="text-[16px] font-medium leading-[20px] text-white" htmlFor="">New Password</label>
                <div className="flex gap-2.5 items-center border-l border-[#d0dcff] border-opacity-50 p-[15px]">
                    <input placeholder="Password"
                           className="text-[14px] outline-0 ring-0 placeholder:auth-text auth-text" type="password"/>
                </div>
            </div>

            <div className="flex flex-col gap-[10px]">
                <label className="text-[16px] font-medium leading-[20px] text-white" htmlFor="">Confirm Password</label>
                <div className="flex gap-2.5 items-center border-l border-[#d0dcff] border-opacity-50 p-[15px]">
                    <input placeholder="Password"
                           className="text-[14px] outline-0 ring-0 placeholder:auth-text auth-text" type="password"/>
                </div>
            </div>
        </div>
    )
}