export function TwoFacDisabled(){
    return (
        <div className="flex flex-col gap-7 p-7 w-[538px] two-fac-bg two-fac-shadow rounded-[12px]">
            <div className="flex flex-col gap-3">
                <h3 className="text-[28px] leading-[35px] text-[#FCFCFD] font-bold">2FA <span
                    className="text-[#FA2256]">Disabled</span></h3>
                <p className="text-[8px] text-[#808191] leading-[14px]">If you want to turn on 2FA, input your account
                    password and the six-digit code provided by the Google Authenticator app below, then click "<span
                        className="font-medium text-[#FCFCFD]">Enable 2FA</span>".</p>
            </div>

            <div className="flex flex-col gap-[18px]">
                <div className="flex flex-col gap-[5px]">
                    <h5 className="text-[17px] text-[#FCFCFD] leading-[23px] font-semibold">Enable 2FA</h5>
                    <p className="text-[10px] text-[#808191] leading-[17px]">Enter your password and scan SQ code by the
                        Google Authenticator app to Enable the 2FA verification</p>
                </div>
                <div className="flex flex-col gap-[8px]">
                    <label className="text-[#B1B5C3] font-bold text-[8px] leading-[8px] uppercase"
                           htmlFor="">password</label>
                    <div
                        className="flex items-center justify-center w-full rounded-full border-[#D0DCFF8F] border-[1px] px-[11px] py-2">
                        <input placeholder="Password"
                               className="w-full ring-0 outline-0 text-[10px] leading-[17px] text-[#808191] placeholder:text-[#808191] font-medium"
                               type="password"/>
                    </div>
                </div>
                <div className="flex items-center py-[34px] justify-center w-full two-fac-bg rounded-[12px]">
                    <img src="/img/qr.svg" alt="qr"/>
                </div>
            </div>
            <button
                className="text-[14px] w-full h-[47px] mt-[4px] font-semibold cursor-pointer rounded-full text-white py-3 px-[18px] visit-btn">
                Enable 2FA
            </button>
        </div>
    )
}