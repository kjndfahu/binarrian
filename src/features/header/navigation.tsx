const navBtns = ['Buy Crypto', 'Markets', 'Exchange', 'FAQ', 'NFT']

export function Navigation() {
  return (
    <div className="flex flex-row backdrop-blur-2xl px-6 items-center justify-between w-[444px] h-[44px] rounded-full nav-border nav-bg">
      {navBtns.map((item, index) => (
        <h4 className="text-[14px] cursor-pointer text-[#DFDFDF] font-normal leading-[24px]" key={index}>{item}</h4>
      ))}
    </div>
  )
}