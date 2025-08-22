export function IdCardSection() {
    return (
        <div className="flex flex-col gap-6">
            <h2 className="md:text-[30px] text-[40px] text-white md:leading-[35px] leading-[48px] font-medium">ID Card</h2>

            <div className="flex md:flex-row flex-col items-center w-full md:gap-9 gap-8">
                <div className="flex w-full h-[56px] px-6 py-3 faq-bg rounded-full">
                    <input placeholder="Card Name"
                           className="text-[14px] leading-6 text-[#808191] w-full outline-0 ring-0 placeholder:text-[#808191]"
                           type="text"/>
                </div>

                <div className="flex w-full h-[56px] px-6 py-3 faq-bg rounded-full">
                    <input placeholder="ID Number"
                           className="text-[14px] leading-6 text-[#808191] w-full outline-0 ring-0 placeholder:text-[#808191]"
                           type="text"/>
                </div>

            </div>

        </div>
    )
}