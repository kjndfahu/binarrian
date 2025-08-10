export function PasswordSection(){
    return (
        <div className="flex flex-col gap-6 w-full">
            <h2 className="text-[30px] text-white leading-[35px] font-medium">Change Password</h2>

            <div className="flex items-center w-full gap-9">
                <div className="flex flex-col w-full gap-4">
                    <label className="text-[12px] font-medium text-white leading-[16px]" htmlFor="">Current Password</label>
                    <div className="flex w-full h-[56px] px-6 py-3 faq-bg rounded-full">
                        <input placeholder="*************"
                               className="text-[14px] leading-6 text-[#808191] w-full outline-0 ring-0 placeholder:text-[#808191]"
                               type="password"/>
                    </div>
                </div>

                <div className="flex flex-col w-full gap-4">
                    <label className="text-[12px] font-medium text-white leading-[16px]" htmlFor="">New Password</label>
                    <div className="flex w-full h-[56px] px-6 py-3 faq-bg rounded-full">
                        <input placeholder="*************"
                               className="text-[14px] leading-6 text-[#808191] w-full outline-0 ring-0 placeholder:text-[#808191]"
                               type="password"/>
                    </div>
                </div>

            </div>


            <div className="flex flex-col w-1/2 gap-4">
                <label className="text-[12px] font-medium text-white leading-[16px]" htmlFor="">Confirm New Password</label>
                <div className="flex w-full h-[56px] px-6 py-3 faq-bg rounded-full">
                    <input placeholder="*************"
                           className="text-[14px] leading-6 text-[#808191] w-full outline-0 ring-0 placeholder:text-[#808191]"
                           type="password"/>
                </div>
            </div>


            <button
                className="text-[14px] w-[182px] h-[47px] mt-[4px] font-semibold cursor-pointer rounded-full text-white py-3 px-[18px] visit-btn">
                Save Changes
            </button>
        </div>
    )
}