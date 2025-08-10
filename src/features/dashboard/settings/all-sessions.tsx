export function AllSessions(){
    const sessions = [
        {
            dateTime: "2025-07-25 10:00:00",
            system: "Win 10",
            location: "USA",
            ipAddress: "192.168.1.1"
        },
        {
            dateTime: "2025-07-25 10:00:00",
            system: "Mac OS",
            location: "Serbia",
            ipAddress: "192.168.1.1"
        },
        {
            dateTime: "2025-07-25 10:00:00",
            system: "Win 10",
            location: "Sweden",
            ipAddress: "192.168.1.1"
        },
        {
            dateTime: "2025-07-25 10:00:00",
            system: "Win 10",
            location: "USA",
            ipAddress: "192.168.1.1"
        },
        {
            dateTime: "2025-07-25 10:00:00",
            system: "Win 10",
            location: "USA",
            ipAddress: "192.168.1.1"
        },
        {
            dateTime: "2025-07-25 10:00:00",
            system: "Win 10",
            location: "USA",
            ipAddress: "192.168.1.1"
        }
    ];

    return (
        <div className="flex flex-col gap-6">
            <h2 className="text-[18px] text-white leading-6 font-medium">Active Sessions</h2>

            <div className="flex flex-col gap-1">
                <div className="flex items-center justify-between px-9 py-3">
                    <div className="flex-1">
                        <span className="text-[10px] text-[#808191] font-bold uppercase tracking-wide">Date/Time</span>
                    </div>
                    <div className="flex-1 text-center">
                        <span className="text-[10px] text-[#808191] font-bold uppercase tracking-wide">System</span>
                    </div>
                    <div className="flex-1 text-center">
                        <span className="text-[10px] text-[#808191] font-bold uppercase tracking-wide">Location</span>
                    </div>
                    <div className="flex-1 text-right">
                        <span className="text-[10px] text-[#808191] font-bold uppercase tracking-wide">IP Address</span>
                    </div>
                    <div className="flex-1 text-right">
                        <span className="text-[10px] text-[#808191] font-bold uppercase tracking-wide">2Fa</span>
                    </div>
                </div>

                {sessions.map((session, index) => (
                    <div key={index}
                         className="flex items-center justify-between px-6 py-4 rounded-[12px] all-sessions-bg backdrop-blur-sm">
                        <div className="flex-1">
                            <span className="text-[13px] text-white font-medium">{session.dateTime}</span>
                        </div>
                        <div className="flex-1 text-center">
                            <span className="text-[13px] text-white font-medium">{session.system}</span>
                        </div>
                        <div className="flex-1 text-center">
                            <div className="flex items-center justify-center gap-2">
                                <img src="/img/countries/algeria.svg" alt="algeria"/>
                                <span className="text-[13px] text-white font-medium">{session.location}</span>
                            </div>
                        </div>
                        <div className="flex-1 text-right">
                            <span className="text-[13px] text-white font-medium">{session.ipAddress}</span>
                        </div>
                        <div className="flex-1 flex justify-end">
                            <img className="cursor-pointer" src="/img/tick-purple.svg" alt="cross"/>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}