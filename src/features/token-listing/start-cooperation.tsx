import {Form} from "@/features/token-listing/form.tsx";

export function StartCooperation() {
    return (
        <div className="flex flex-col relative overflow-x-hidden overflow-y-hidden items-center justify-center gap-12 py-[111px]">
            <h2 className="text-[48px] about-text">Let's start cooperation</h2>
            <p className="text-[16px] text-[#CACACA]">We can list your token on our exchange within 48 hours</p>
            <Form/>

            {/*<img className="absolute bottom-[-700px] right-[-1000px]" src="/img/coop.png" alt="coop"/>*/}
        </div>
    )
}