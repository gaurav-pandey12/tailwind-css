export default function MsLandingPage() {
    return (
        <div className="mx-auto">
            <div className="navbar flex justify-between items-center p-4">
                <div className="flex justify-center items-center  md:order-2">
                    <div className="hamburger inline-block p-4 cursor-pointer md:hidden">
                        <div className="line h-0.5 w-6 my-1 bg-black"></div>
                        <div className="line h-0.5 w-6 my-1 bg-black"></div>
                        <div className="line h-0.5 w-6 my-1 bg-black"></div>
                    </div>
                    <div className="search md:hidden w-4 mr-6">
                        <img src="images/search.svg" alt="" />
                    </div>
                </div>

                <div className="logo text-center flex md:order-1">
                    <div className="flex justify-start">
                        <img className="w-[50%]" src="images/mslogo.png" alt="" />
                    </div>
                    <div className="features absolute w-fit md:static text-black md:w-auto bg-gray-200 md:bg-white inset-0 md:flex md:items-center md:mx-4 md:space-x-6 -translate-x-96 md:translate-x-0">
                        <div className="fitem hover:underline hover:underline-offset-8 cursor-pointer">Microsoft 365</div>
                        <div className="hover:underline hover:underline-offset-8 cursor-pointer">Office</div>
                        <div className="hover:underline hover:underline-offset-8 cursor-pointer">Windows</div>
                        <div className="hover:underline hover:underline-offset-8 cursor-pointer">Surface</div>
                        <div className="hover:underline hover:underline-offset-8 cursor-pointer">Xbox</div>
                        <div className="hover:underline hover:underline-offset-8 cursor-pointer">Support</div>
                    </div>
                </div>
                <div className="cart text-center md:order-3 flex">
                    <div className="search hidden md:block mr-6"> All Microsoft </div>
                    <div className="mx-2">Search</div>
                    <img className="w-4 mr-6" src="images/search.svg" alt="" />
                    <div className="flex pt-1">
                        <img className="w-4 h-4 mr-4" src="images/cart icon.svg" alt="" />
                        <img className="w-4 h-4 mr-4" src="images/account icon.svg" alt="" />
                    </div>
                </div>
            </div>
            <div className="slider flex flex-col-reverse md:flex-row text-black bg-[#f2f2f2]">
                <div className="left flex flex-col justify-center items-center md:items-baseline py-12 ml-32 space-y-5">
                    <h1 className="text-2xl font-medium md:text-4xl mx-5">Surface Laptop 4</h1>
                    <p className="w-3/4 mx-5 text-center md:text-left">Do it all with a perfect balance of sleek, ultra-thin design, multitasking speed and improved performance</p>
                    <button className="text-white bg-black px-4 py-2 my-6 font-bold mx-5">Shop Now</button>
                </div>
                <div className="right">
                    <img className="w-[60rem] md:w-[64rem]" src="/images/ms.webp" alt="" />
                </div>
            </div>
        </div>
    )
}