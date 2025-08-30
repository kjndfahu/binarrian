export function Navigation() {
  return (

      <div
          className="lg:flex hidden flex-row backdrop-blur-2xl px-6 items-center justify-between xl:w-[444px] w-[380px] h-[44px] rounded-full nav-border nav-bg">
        <div
            className="xl:text-[14px] text-[12px] cursor-pointer text-[#DFDFDF] font-normal xl:leading-[24px] leading-[20px]">Buy
          Crypto
        </div>
        <div
            className="xl:text-[14px] text-[12px] cursor-pointer text-[#DFDFDF] font-normal xl:leading-[24px] leading-[20px]">Markets
        </div>
        <div
            className="xl:text-[14px] text-[12px] cursor-pointer text-[#DFDFDF] font-normal xl:leading-[24px] leading-[20px]">Exchange
        </div>
        <div
            className="xl:text-[14px] text-[12px] cursor-pointer text-[#DFDFDF] font-normal xl:leading-[24px] leading-[20px]">FAQ
        </div>
        <div
            className="flex items-center gap-2 xl:text-[14px] text-[12px] cursor-pointer text-[#DFDFDF] font-normal xl:leading-[24px] leading-[20px]">NFT
          <div className="flex items-center justify-center w-[37px] h-[17px] rounded-[4px] soon-shadow text-[7px] font-bold text-white leading-[7px] fast-listing-bg">Soon!</div>
        </div>
      </div>
  )
}