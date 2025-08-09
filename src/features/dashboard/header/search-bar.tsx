export function SearchBar() {
    return (
        <div className="flex items-center gap-6">
            <div className="flex rounded-full py-2 px-6 faq-bg">
                <input placeholder="Search" className="text-[16px] leading-6 outline-0 ring-0 placeholder:text-white text-white" type="text"/>
                <img src="/img/search-logo.svg" alt="search"/>
            </div>
            <img className="cursor-pointer" src="/img/bell.svg" alt="bell"/>
        </div>
    )
}