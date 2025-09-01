export function ProfileInputs(){
    return (
        <div className="flex flex-col gap-5 pb-6 w-full">
            <div className="flex md:flex-row flex-col items-center w-full md:gap-9 gap-6">

                <div className="flex flex-col w-full gap-4">
                    <label className="text-[12px] font-medium text-white leading-[16px]" htmlFor="">First Name</label>
                    <div className="flex w-full h-[56px] px-6 py-3 faq-bg rounded-full">
                        <input placeholder="Your First Name"
                               className="text-[14px] leading-6 text-[#808191] w-full outline-0 ring-0 placeholder:text-[#808191]"
                               type="text"/>
                    </div>
                </div>

                <div className="flex flex-col w-full gap-4">
                    <label className="text-[12px] font-medium text-white leading-[16px]" htmlFor="">Second Name </label>
                    <div className="flex w-full h-[56px] px-6 py-3 faq-bg rounded-full">
                        <input placeholder="Your Second Name"
                               className="text-[14px] leading-6 text-[#808191] w-full outline-0 ring-0 placeholder:text-[#808191]"
                               type="text"/>
                    </div>
                </div>

            </div>

            <div className="flex md:flex-row flex-col items-center w-full md:gap-9 gap-6">

                <div className="flex flex-col w-full gap-4">
                    <label className="text-[12px] font-medium text-white leading-[16px]" htmlFor="">Email</label>
                    <div className="flex w-full h-[56px] px-6 py-3 faq-bg rounded-full">
                        <input placeholder="Your e-mail"
                               className="text-[14px] leading-6 text-[#808191] w-full outline-0 ring-0 placeholder:text-[#808191]"
                               type="text"/>
                    </div>
                </div>

                <div className="flex flex-col w-full gap-4">
                    <label className="text-[12px] font-medium text-white leading-[16px]" htmlFor="">Location</label>
                    <div className="flex w-full h-[56px] px-6 py-3 faq-bg rounded-full">
                        <input placeholder="Belgrade, Serbia"
                               className="text-[14px] leading-6 text-[#808191] w-full outline-0 ring-0 placeholder:text-[#808191]"
                               type="text"/>
                    </div>
                </div>

            </div>

            <div className="flex md:flex-row flex-col items-center w-full md:gap-9 gap-6">

                <div className="flex flex-col w-full gap-4">
                    <label className="text-[12px] font-medium text-white leading-[16px]" htmlFor="">Deposit Assets</label>
                    <div className="flex w-full h-[56px] px-6 py-3 faq-bg rounded-full">
                        <input placeholder="Your e-mail"
                               className="text-[14px] leading-6 text-[#808191] w-full outline-0 ring-0 placeholder:text-[#808191]"
                               type="text"/>
                    </div>
                </div>

                <div className="flex flex-col w-full gap-4">
                    <label className="text-[12px] font-medium text-white leading-[16px]" htmlFor="">Withdraw Assets</label>
                    <div className="flex w-full h-[56px] px-6 py-3 faq-bg rounded-full">
                        <input placeholder="Belgrade, Serbia"
                               className="text-[14px] leading-6 text-[#808191] w-full outline-0 ring-0 placeholder:text-[#808191]"
                               type="text"/>
                    </div>
                </div>

            </div>

            <button
                className="text-[14px] md:w-[182px] w-full h-[47px] mt-[4px] font-semibold cursor-pointer rounded-full text-white py-3 px-[18px] visit-btn">
                Save Changes
            </button>
        </div>
    )
}