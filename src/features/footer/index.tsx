const footerImg = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19];

export function AppFooter(){
    return (
        <div className="flex flex-col overflow-y-hidden relative gap-16 pt-[150px] pb-[40px] px-20">
            <img src="/img/logo.svg" alt="logo" className="relative z-10 w-[165px] cursor-pointer pointer-events-none select-none" />

            <div className="flex items-start pb-16 border-b-[1px] z-[2] border-b-[#FFFFFF1F] justify-between">
                <div className="flex flex-col z-[2] gap-4">
                    <h3 className="text-white font-bold text-[18px] mb-2">About Us</h3>
                    <ul className="flex flex-col text-[16px] gap-3">
                        <li><a href="#" className="text-white hover:text-gray-300 transition-colors">About</a></li>
                        <li><a href="#" className="text-white hover:text-gray-300 transition-colors">Terms</a></li>
                        <li><a href="#" className="text-white hover:text-gray-300 transition-colors">Privacy Policy</a></li>
                    </ul>
                </div>

                <div className="flex flex-col z-[2] gap-4">
                    <h3 className="text-white font-bold text-[18px] mb-2">Products</h3>
                    <ul className="flex flex-col text-[16px] gap-3">
                        <li><a href="#" className="text-white hover:text-gray-300 transition-colors">Exchange</a></li>
                        <li><a href="#" className="text-white hover:text-gray-300 transition-colors">Academy</a></li>
                        <li><a href="#" className="text-white hover:text-gray-300 transition-colors">NFT</a></li>
                        <li><a href="#" className="text-white hover:text-gray-300 transition-colors">Crypto Earn</a></li>
                    </ul>
                </div>

                <div className="flex flex-col z-[2] gap-4">
                    <h3 className="text-white font-bold text-[18px] mb-2">Service</h3>
                    <ul className="flex flex-col text-[16px] gap-3">
                        <li><a href="#" className="text-white hover:text-gray-300 transition-colors">Buy Crypto</a></li>
                        <li><a href="#" className="text-white hover:text-gray-300 transition-colors">Trading</a></li>
                        <li><a href="#" className="text-white hover:text-gray-300 transition-colors">P2P</a></li>
                        <li><a href="#" className="text-white hover:text-gray-300 transition-colors">Bug Founder Program</a></li>
                        <li><a href="#" className="text-white hover:text-gray-300 transition-colors">Token Listing</a></li>
                        <li><a href="#" className="text-white hover:text-gray-300 transition-colors">Spot Trading</a></li>
                        <li><a href="#" className="text-white hover:text-gray-300 transition-colors">Indices</a></li>
                    </ul>
                </div>

                <div className="flex flex-col z-[2] gap-4">
                    <h3 className="text-white font-bold text-[18px] mb-2">Support</h3>
                    <ul className="flex flex-col text-[16px] gap-3">
                        <li><a href="#" className="text-white hover:text-gray-300 transition-colors">FAQ</a></li>
                        <li><a href="#" className="text-white hover:text-gray-300 transition-colors">Cookies Policy</a></li>
                        <li><a href="#" className="text-white hover:text-gray-300 transition-colors">Regulatory License</a></li>
                        <li><a href="#" className="text-white hover:text-gray-300 transition-colors">Law Enforcement Requests</a></li>
                    </ul>
                </div>

                <div className="grid grid-cols-4 z-[2] space-y-5 gap-[6px]">
                    {footerImg.map((item, index) => (
                        <img src={`/img/companies/company${index}.svg`} className="cursor-pointer pointer-events-none select-none" alt="logo" />
                    ))}
                </div>
            </div>
            <p className="text-[16px] mt-[-40px] z-[2] text-center text-white">Copyright © Binarrian 2025</p>

            <img
                className={`inset-0 w-full absolute pt-[530px] z-[1] pointer-events-none select-none`}
                src="/img/arrow-down.png"
                alt="arrow-down"
            />

            {/* <img
                className="inset-0 w-[120%] absolute bottom-[-1100px] z-[1] pointer-events-none select-none"
                src="/img/footer-img.png"
                alt="arrow-down"
            /> */}
        </div>
    )
}