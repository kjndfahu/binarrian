export function ListingSection(){
    return (
        <div className="flex flex-col relative overflow-x-hidden overflow-y-hidden gap-6 py-[128px] 2xl:px-20 xl:px-16 lg:px-12 md:px-10 sm:px-8 px-6 items-center justify-center">
            <div
                className="flex items-center justify-center listing-bg border-[1px] border-[#FFFFFF1A] rounded-full text-[24px] text-white w-[121px] h-[55px]">
                Listing
            </div>
            <h2 className="xl:text-[64px] lg:text-[48px] md:text-[42px] sm:text-[36px] text-[32px] text-center about-text">Fast listing in 48 hours</h2>
            <p className="lg:text-[24px] text-[16px] text-center about-text">We can list your token on our exchange within 48 hours</p>
            <button className="md:text-[22px] sm:text-[18px] text-[16px] z-[2] cursor-pointer text-white lg:font-bold md:font-medium font-normal rounded-full xl:w-[248px] md:w-[200px] w-[169px] md:h-[65px] h-12 fast-listing-bg">
                Fast listing
            </button>

            <img className="absolute top-[100px] pointer-events-none select-none z-[1] h-full w-[100vw]" src="/img/benefits.png" alt="benefits"/>
        </div>
    )
}