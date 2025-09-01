export function LoginInputs (){
    return (
        <div className="flex flex-col gap-5">
            <div className="flex flex-col gap-[10px]">
                <label className="text-[16px] font-medium leading-[20px] text-white" htmlFor="">Email address</label>
                <div className="flex gap-2.5 items-center border-l border-[#d0dcff] border-opacity-50 p-[15px]">
                    <img src="/img/mail.svg" alt="mail" />
                    <input placeholder="Enter your email" className="text-[14px] outline-0 ring-0 placeholder:auth-text text-white" type="text" />
                </div>
            </div>

            <div className="flex flex-col gap-[10px]">
                <label className="text-[16px] font-medium leading-[20px] text-white" htmlFor="">Password</label>
                <div className="flex gap-2.5 items-center border-l border-[#d0dcff] border-opacity-50 p-[15px]">
                    <img src="/img/pass.svg" alt="pass" />
                    <input placeholder="Password" className="text-[14px] outline-0 ring-0 placeholder:auth-text text-white" type="text" />
                </div>
            </div>
        </div>
    )
}