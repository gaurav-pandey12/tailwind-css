export default function MsLandingPage() {
    return (
        <div className="navbar flex justify-between items-center p-4">
            <div className="flex justify-center items-center md:order-3">
                <div className="inline-block cursor-pointer p-4 md:hidden">
                    <div className="h-0.5 w-4 my-1 bg-black"></div>
                    <div className="h-0.5 w-4 my-1 bg-black"></div>
                    <div className="h-0.5 w-4 my-1 bg-black"></div>
                </div>
                <div className="text-black md:hidden">
                    seach
                </div>
            </div>
            <div className="text-black flex text-center md:order-1">
                <div> Microsoft</div>
                <div>
                    <ul className="text-black absolute md:static md:mx-7 w-fit md:w-auto bg-gray-400 md:bg-white -translate-x-96 md:translate-x-0 md:flex md:space-x-2">
                        <li>Microsoft 365</li>
                        <li>Teams</li>
                        <li>Windows</li>
                        <li>Surface</li>
                        <li>XboxSupport</li>
                    </ul>
                </div>
            </div>
            <div className="text-black text-center md:order-3 flex">
                <div className="text-black hidden md:block">
                    seach
                </div>
                <div>
                    Account
                </div>
            </div>
        </div>
    )
}