export function ListingSection(){
    return (
        <div className="flex flex-col relative overflow-x-hidden overflow-y-hidden gap-6 py-[128px] items-center justify-center">
            <div
                className="flex items-center justify-center listing-bg border-[1px] border-[#FFFFFF1A] rounded-full text-[24px] text-white w-[121px] h-[55px]">
                Listing
            </div>
            <h2 className="text-[64px] about-text">Fast listing in 48 hours</h2>
            <p className="text-[24px] about-text">We can list your token on our exchange within 48 hours</p>
            <button className="text-[22px] z-[2] cursor-pointer text-white font-bold rounded-full w-[248px] h-[65px] fast-listing-bg">
                Fast listing
            </button>

            <img className="absolute top-[100px] pointer-events-none select-none z-[1] h-full w-[100vw]" src="/img/benefits.png" alt="benefits"/>
        </div>
    )
}