export function TwoFacEnabled(){
    return (
        <div className="flex flex-col gap-7 p-7 md:w-[538px] w-full two-fac-bg two-fac-shadow rounded-[12px]">
            <div className="flex flex-col gap-3">
                <h3 className="md:text-[28px] text-[32px] md:leading-[35px] leading-[40px] text-[#FCFCFD] font-bold">2FA <span
                    className="text-[#11CABE]">Enabled</span></h3>
                <p className="md:text-[8px] text-[12px] text-[#808191] md:leading-[14px] leading-5">If you want to turn off 2FA, input your account password and the six-digit code provided by the Google Authenticator app below, then click "<span
                        className="font-medium text-[#FCFCFD]">Disable 2FA</span>".</p>
            </div>

            <div className="flex flex-col gap-[18px]">
                <div className="flex flex-col gap-[5px]">
                    <h5 className="md:text-[17px] text-[24px] text-[#FCFCFD] md:leading-[23px] leading-8 font-semibold">Disable 2FA</h5>
                    <p className="md:text-[10px] text-[14px] text-[#808191] md:leading-[17px] leading-6">Enter your password and the six-digit code provided by the Google Authenticator app to Disable the 2FA verification</p>
                </div>
                <div className="flex items-center w-full md:gap-3 gap-6">
                    <div className="flex flex-col w-full md:gap-2 gap-3">
                        <label className="text-[#B1B5C3] font-bold md:text-[8px] text-[12px] md:leading-[8px] leading-3 uppercase"
                               htmlFor="">password</label>
                        <div
                            className="flex items-center justify-center w-full rounded-full border-[#D0DCFF8F] border-[1px] px-[11px] py-2">
                            <input placeholder="Password"
                                   className="w-full ring-0 outline-0 md:text-[10px] text-[14px] md:leading-[17px] leading-6 text-[#808191] placeholder:text-[#808191] font-medium"
                                   type="password"/>
                        </div>
                    </div>

                    <div className="flex flex-col w-full md:gap-2 gap-3">
                        <label className="text-[#B1B5C3] font-bold md:text-[8px] text-[12px] md:leading-[8px] leading-3 uppercase"
                               htmlFor="">2FA code</label>
                        <div
                            className="flex items-center justify-center w-full rounded-full border-[#D0DCFF8F] border-[1px] px-[11px] py-2">
                            <input placeholder="Password"
                                   className="w-full ring-0 outline-0 md:text-[10px] text-[14px] md:leading-[17px] leading-6 text-[#808191] placeholder:text-[#808191] font-medium"
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