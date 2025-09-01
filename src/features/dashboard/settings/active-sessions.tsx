export function ActiveSessions(){
    const sessions = [
        {
            dateTime: "2025-07-25 10:00:00",
            system: "Win 10",
            location: "USA",
            ipAddress: "192.168.1.1"
        }
    ];

    return (
        <div className="flex flex-col gap-6">
            <h2 className="md:text-[18px] text-[36px] text-white md:leading-6 leading-12 font-medium">Active Sessions</h2>

            <div className="flex flex-col">
                <div className="flex items-center justify-between px-9 py-3">
                    <div className="flex flex-1">
                        <span className="md:text-[10px] text-[12px] text-[#808191] font-bold uppercase tracking-wide">Date/Time</span>
                    </div>
                    <div className="flex flex-1 text-center">
                        <span className="md:text-[10px] text-[12px] text-[#808191] font-bold uppercase tracking-wide">System</span>
                    </div>
                    <div className="flex flex-1 text-center">
                        <span className="md:text-[10px] text-[12px] text-[#808191] font-bold uppercase tracking-wide">Location</span>
                    </div>
                    <div className="md:flex hidden flex-1 text-right">
                        <span className="text-[10px] text-[#808191] font-bold uppercase tracking-wide">IP Address</span>
                    </div>
                    <div className="md:flex hidden flex-1"></div>
                </div>

                {sessions.map((session, index) => (
                    <div key={index}
                         className="flex items-center justify-between z-[80] md:px-6 px-5 py-4 rounded-[12px] faq-bg bg-opacity-20 backdrop-blur-sm md:border border-[#D0DCFF8F] border-opacity-30">
                        <div className="flex flex-1">
                            <span className="md:text-[13px] text-[12px] text-white font-medium">{session.dateTime}</span>
                        </div>
                        <div className="flex flex-1 text-center">
                            <span className="md:text-[13px] text-[16px] text-white font-medium">{session.system}</span>
                        </div>
                        <div className="flex flex-1 text-center">
                            <div className="flex items-center justify-center gap-2">
                                <img src="/img/countries/algeria.svg" alt="algeria"/>
                                <span className="md:text-[13px] text-[16px] text-white font-medium">{session.location}</span>
                            </div>
                        </div>
                        <div className="md:flex hidden flex-1 text-right">
                            <span className="text-[13px] text-white font-medium">{session.ipAddress}</span>
                        </div>
                        <div className="flex-1 md:flex hidden justify-end">
                            <img className="cursor-pointer" src="/img/cross.svg" alt="cross"/>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}