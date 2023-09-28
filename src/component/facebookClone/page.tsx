export default function FbLandingPage() {
    return (
        <div className="text-black mt-48 flex mx-auto items-center justify-center">
            <div className="left w-1/3 mx-14 ">
                <img className="w-44" src="/images/fb.svg" alt="" />
                <p className="text-3xl mx-4 ">Facebook helps you connect and share with the people in your life.</p>
            </div>
            <div className="right flex flex-col rounded-xl bg-white p-8">
                <input
                    className="p-3 border border-gray-300 rounded-md"
                    autoComplete='off'
                    type="text"
                    placeholder="email address or phone number"
                />
                <input
                    className="p-3 my-3 border border-gray-300 rounded-md"
                    type="password"
                    placeholder="password"
                />
                <button className="bg-blue-600 text-white p-3 rounded-md font-bold text-xl">Log In</button>
                <span className="my-3 text-blue-600 text-center cursor-pointer hover:underline">Forgotten password</span>
                <hr className="my-3" />
                <button className="bg-green-600 text-white p-3 rounded-md font-bold text-xl w-fit px-3 mx-auto">Create New Account</button>
            </div>
        </div>
    )
}