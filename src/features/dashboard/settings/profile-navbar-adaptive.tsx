"use client"

import { useState } from "react"

export function ProfileNavbarAdaptive() {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <div className="lg:hidden flex relative w-full">
            <div
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden flex w-full items-center justify-between cursor-pointer text-[14px] text-white leading-[22px] font-semibold px-4 py-2 rounded-full border-[1px] border-white">
            Profile
            <img className="w-[14px] h-[14px] rotate-90" src="/img/arrow-right.svg" alt=""/>
        </div>
        {isOpen && (
                <div
                    style={{ scrollbarWidth: 'thin', scrollbarColor: '#D0DCFF8F transparent' }}
                    className={`absolute top-[50px] backdrop-blur-2xl flex flex-col px-8 gap-6 w-full h-[216px] text-white font-semibold text-[14px] leading-6 py-12 border-[1px] border-[#D0DCFF8F] rounded-[20px] buy-crypto-bg overflow-y-auto`}
                >
                        <p className="cursor-pointer">Profile</p>
                        <p className="cursor-pointer">Verification</p>
                        <p className="cursor-pointer">Password</p>
                        <p className="cursor-pointer">2FA</p>
                        <p className="cursor-pointer">Sessions & Login History</p>

                </div>
        )}
        </div>
        
    )
}