export default function LandingPage() {
    return (
        <div>
            <div className='text-white bg-purple-800 flex justify-between'>
                <span className="text-2xl flex items-center mx-5 font-bold">Phones Mania</span>
                {/* <img src="https://randomuser.me/api/portraits/men/75.jpg" className="h-10 pt-3 px-3 rounded-2xl" alt="" /> */}
                <ul className='px-28 py-4 space-x-10 flex justify-end'>
                    <li className='cursor-pointer'>
                        Home
                    </li>
                    <li className='cursor-pointer'>
                        About
                    </li>
                    <li className='cursor-pointer'>
                        Catalogue
                    </li>
                    <li className='cursor-pointer'>
                        About Us
                    </li>
                </ul>
            </div>
            <div className="bg-fuchsia-100 flex">
                <div className=" py-44 pl-10 text-black">
                    <div className="text-6xl">
                        The best phone in the town.
                    </div>
                    <p className="py-3 w-1/3">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ut deleniti hic magnam atque, maxime soluta voluptate ipsum obcaecati at adipisci dolore? Fugiat, harum.</p>
                    <div className="my-4">
                        <button className="bg-purple-500 px-4 py-2 rounded-2xl hover:bg-purple-900 hover:border-2 hover:border-black hover:text-black mx-2 text-white">Buy Now</button>
                        <button className="bg-purple-500 px-4 py-2 rounded-2xl hover:bg-purple-900 hover:border-2 hover:border-black hover:text-black mx-2 text-white">Contact Us</button>
                    </div>
                </div>
                <div className="flex items-center mx-3">
                    <img src="/images/manWithPh.jpg" alt="" />
                </div>
            </div>
            <hr />
        </div>
    )
}