export function Form(){
    return (
        <div className="flex flex-col items-center justify-center  w-full md:pt-0 pt-6 md:gap-[30px] gap-[22px]">
            <div className="faq-bg sm:w-[432px] w-full rounded-full border-[1px] border-[#D0DCFF8F] md:py-[20px] py-[15px] md:px-[31px] px-[23px]">
                <input placeholder="Name" className="about-text w-full md:text-[16px] text-[12px] placeholder:about-text ring-0 outline-0"
                       type="text"/>
            </div>

            <div className="faq-bg sm:w-[432px] w-full rounded-full border-[1px] border-[#D0DCFF8F] md:py-[20px] py-[15px] md:px-[31px] px-[23px]">
                <input placeholder="Website" className="about-text w-full md:text-[16px] text-[12px] placeholder:about-text ring-0 outline-0"
                       type="text"/>
            </div>

            <div className="faq-bg sm:w-[432px] w-full rounded-full border-[1px] border-[#D0DCFF8F] md:py-[20px] py-[15px] md:px-[31px] px-[23px]">
                <input placeholder="Contact e-mail" className="about-text w-full md:text-[16px] text-[12px] placeholder:about-text ring-0 outline-0"
                       type="text"/>
            </div>

            <div className="faq-bg sm:w-[432px] w-full rounded-full border-[1px] border-[#D0DCFF8F] md:py-[20px] py-[15px] md:px-[31px] px-[23px]">
                <input placeholder="Position" className="about-text w-full md:text-[16px] text-[12px] placeholder:about-text ring-0 outline-0"
                       type="text"/>
            </div>

            <button className="md:text-[22px] sm:text-[18px] text-[16px] md:h-[73px] h-[55px] cursor-pointer text-white font-bold rounded-full visit-btn sm:w-[432px] w-full send-shadow">
                Send
            </button>
        </div>
    )
}