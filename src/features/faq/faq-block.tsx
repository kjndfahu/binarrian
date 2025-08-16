"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

export function FaqBlock({title, text}:{title: string, text:string}){
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div onClick={() => setIsOpen(!isOpen)} className={`flex flex-col lg:gap-[6px] gap-12 ${isOpen && ('faq-shadow')} items-center w-full rounded-[24px] border-[1px] border-[#D0DCFF8F] p-6 faq-bg cursor-pointer`}>
            <div className="flex items-center w-full justify-between">
                <h4 className={`lg:text-[24px] text-[20px] ${isOpen ? 'text-[#8547F6]' : 'text-white'} lg:leading-[36px] leading-[28px] font-bold transition-colors duration-300`}>{title}</h4>
                <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                >
                    {isOpen ? (
                        <img className="pointer-events-none select-none" src="/img/minus.svg" alt="minus" />
                    ) : (
                        <img className="pointer-events-none select-none" src="/img/plus.svg" alt="plus" />
                    )}
                </motion.div>
            </div>
            
            <AnimatePresence>
                {isOpen && (
                    <motion.p 
                        initial={{ opacity: 0, height: 0, marginTop: 0 }}
                        animate={{ opacity: 1, height: "auto", marginTop: 6 }}
                        exit={{ opacity: 0, height: 0, marginTop: 0 }}
                        transition={{ 
                            duration: 0.3, 
                            ease: "easeInOut",
                            opacity: { duration: 0.2 }
                        }}
                        className="lg:text-[20px] text-[16px] lg:leading-[36px] leading-[32px] text-white overflow-hidden"
                    >
                        {text}
                    </motion.p>   
                )}
            </AnimatePresence>
        </div>
    )
}