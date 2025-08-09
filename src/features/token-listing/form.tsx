export function Form(){
    return (
        <div className="flex flex-col gap-[30px]">
            <div className="faq-bg w-[432px] rounded-full border-[1px] border-[#D0DCFF8F] py-[20px] px-[31px]">
                <input placeholder="Name" className="about-text w-full text-[16px] placeholder:about-text ring-0 outline-0"
                       type="text"/>
            </div>

            <div className="faq-bg w-[432px] rounded-full border-[1px] border-[#D0DCFF8F] py-[20px] px-[31px]">
                <input placeholder="Website" className="about-text w-full text-[16px] placeholder:about-text ring-0 outline-0"
                       type="text"/>
            </div>

            <div className="faq-bg w-[432px] rounded-full border-[1px] border-[#D0DCFF8F] py-[20px] px-[31px]">
                <input placeholder="Contact e-mail" className="about-text w-full text-[16px] placeholder:about-text ring-0 outline-0"
                       type="text"/>
            </div>

            <div className="faq-bg w-[432px] rounded-full border-[1px] border-[#D0DCFF8F] py-[20px] px-[31px]">
                <input placeholder="Position" className="about-text w-full text-[16px] placeholder:about-text ring-0 outline-0"
                       type="text"/>
            </div>

            <button className="text-[22px] h-[73px] cursor-pointer text-white font-bold rounded-full visit-btn w-[432px] send-shadow">
                Send
            </button>
        </div>
    )
}