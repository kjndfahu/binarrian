export function TwoFacEnabled(){
    return (
        <div className="flex flex-col gap-7 p-7 w-[538px] two-fac-bg two-fac-shadow rounded-[12px]">
            <div className="flex flex-col gap-3">
                <h3 className="text-[28px] leading-[35px] text-[#FCFCFD] font-bold">2FA <span
                    className="text-[#11CABE]">Enabled</span></h3>
                <p className="text-[8px] text-[#808191] leading-[14px]">If you want to turn off 2FA, input your account password and the six-digit code provided by the Google Authenticator app below, then click "<span
                        className="font-medium text-[#FCFCFD]">Disable 2FA</span>".</p>
            </div>

            <div className="flex flex-col gap-[18px]">
                <div className="flex flex-col gap-[5px]">
                    <h5 className="text-[17px] text-[#FCFCFD] leading-[23px] font-semibold">Disable 2FA</h5>
                    <p className="text-[10px] text-[#808191] leading-[17px]">Enter your password and the six-digit code provided by the Google Authenticator app to Disable the 2FA verification</p>
                </div>
                <div className="flex items-center w-full gap-3">
                    <div className="flex flex-col w-full gap-[8px]">
                        <label className="text-[#B1B5C3] font-bold text-[8px] leading-[8px] uppercase"
                               htmlFor="">password</label>
                        <div
                            className="flex items-center justify-center w-full rounded-full border-[#D0DCFF8F] border-[1px] px-[11px] py-2">
                            <input placeholder="Password"
                                   className="w-full ring-0 outline-0 text-[10px] leading-[17px] text-[#808191] placeholder:text-[#808191] font-medium"
                                   type="password"/>
                        </div>
                    </div>

                    <div className="flex flex-col w-full gap-[8px]">
                        <label className="text-[#B1B5C3] font-bold text-[8px] leading-[8px] uppercase"
                               htmlFor="">2FA code</label>
                        <div
                            className="flex items-center justify-center w-full rounded-full border-[#D0DCFF8F] border-[1px] px-[11px] py-2">
                            <input placeholder="Password"
                                   className="w-full ring-0 outline-0 text-[10px] leading-[17px] text-[#808191] placeholder:text-[#808191] font-medium"
                                   type="2FA code"/>
                        </div>
                    </div>
                </div>
            </div>
            <button
                className="text-[14px] w-full h-[47px] mt-[4px] font-semibold cursor-pointer rounded-full text-white py-3 px-[18px] bg-[#FA2256]">
                Disable 2FA
            </button>
        </div>
    )
}