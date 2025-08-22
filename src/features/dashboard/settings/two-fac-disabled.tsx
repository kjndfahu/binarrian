export function TwoFacDisabled(){
    return (
        <div className="flex flex-col gap-7 p-7 md:w-[538px] w-full two-fac-bg two-fac-shadow rounded-[12px]">
            <div className="flex flex-col gap-3">
                <h3 className="md:text-[28px] text-[32px] md:leading-[35px] leading-[40px] text-[#FCFCFD] font-bold">2FA <span
                    className="text-[#FA2256]">Disabled</span></h3>
                <p className="md:text-[8px] text-[12px] text-[#808191] md:leading-[14px] leading-5">If you want to turn on 2FA, input your account
                    password and the six-digit code provided by the Google Authenticator app below, then click "<span
                        className="font-medium text-[#FCFCFD]">Enable 2FA</span>".</p>
            </div>

            <div className="flex flex-col gap-[18px]">
                <div className="flex flex-col gap-[5px]">
                    <h5 className="md:text-[17px] text-[24px] text-[#FCFCFD] md:leading-[23px] leading-8 font-semibold">Enable 2FA</h5>
                    <p className="md:text-[10px] text-[14px] text-[#808191] md:leading-[17px] leading-6">Enter your password and scan SQ code by the
                        Google Authenticator app to Enable the 2FA verification</p>
                </div>
                <div className="flex flex-col md:gap-2 gap-3">
                    <label className="text-[#B1B5C3] font-bold md:text-[8px] text-[12px] md:leading-[8px] leading-3 uppercase"
                           htmlFor="">password</label>
                    <div
                        className="flex items-center justify-center w-full rounded-full border-[#D0DCFF8F] border-[1px] px-[11px] py-2">
                        <input placeholder="Password"
                               className="w-full ring-0 outline-0 md:text-[10px] text-[14px] md:leading-[17px] leading-6 text-[#808191] placeholder:text-[#808191] font-medium"
                               type="password"/>
                    </div>
                </div>
                <div className="flex items-center md:py-[34px] py-8 justify-center w-full two-fac-bg rounded-[12px]">
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