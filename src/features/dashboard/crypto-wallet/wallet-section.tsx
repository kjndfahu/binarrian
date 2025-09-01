"use client"

import {DefaultForm} from "@/features/dashboard/crypto-wallet/default-form.tsx";
import {useState} from "react";
import {WithdrawForm} from "@/features/dashboard/crypto-wallet/withdraw-form.tsx";
import {DepositForm} from "@/features/dashboard/crypto-wallet/deposit-form.tsx";

export function WalletSection(){
    const [form, setForm] = useState('default');

    return (
        <div className="relative h-full lg:w-[24%] w-full rounded-[14px] border border-transparent bg-gradient-to-br from-[rgba(208,220,255,0.28)] to-[rgba(208,220,255,0.025)] p-[1px]">
            {form === "default" && (<DefaultForm setForm={setForm}/>)}
            {form === "withdraw" && (<WithdrawForm setForm={setForm}/>)}
            {form === "deposit" && (<DepositForm setForm={setForm}/>)}
        </div>
    )
}