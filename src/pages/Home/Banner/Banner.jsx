/* eslint-disable react/no-unescaped-entities */
import pic from "../../../assets/learning-concept-illustration_114360-6186.avif"

const Banner = () => {
    return (
        <div className="relative flex flex-col-reverse py-16 lg:pt-0 lg:flex-col lg:pb-0">
            <div className="inset-y-0 top-0 right-0 z-0 w-full max-w-xl px-4 mx-auto md:px-0 lg:pr-0 lg:mb-0 lg:mx-0 lg:w-7/12 lg:max-w-full lg:absolute xl:px-0">
                <svg
                    className="absolute left-0 hidden h-full text-white transform -translate-x-1/2 lg:block"
                    viewBox="0 0 100 100"
                    fill="currentColor"
                    preserveAspectRatio="none slice"
                >
                    <path d="M50 0H100L50 100H0L50 0Z" />
                </svg>
                <img
                    className="object-cover w-full h-56 rounded shadow-lg lg:rounded-none lg:shadow-none md:h-96 lg:h-full"
                    src={pic}
                    alt=""
                />
            </div>
            <div className="relative flex flex-col items-start w-full max-w-xl px-4 mx-auto md:px-0 lg:px-8 lg:max-w-screen-xl">
                <div className="mb-16 lg:my-40 lg:max-w-lg lg:pr-5">
                    <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-400">
                        Brand new
                    </p>
                    <h2 className="mb-5 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
                        Welcome to the <br />
                        <span className="text-3xl font-bold tracking-wide text-green-400 uppercase">
                            BRIGHT
                        </span>
                        <span className="text-3xl font-bold tracking-wide text-red-400 uppercase">STORM</span>
                    </h2>
                    <p className="pr-5 mb-5 text-base text-gray-700 md:text-lg">
                        Our Admission Site provides comprehensive information about our programs, admission requirements, and the application process. Here, you'll find all the resources you need to make informed decisions and ensure a smooth application experience. Allow us to guide you through the journey of becoming a part of our vibrant community.
                    </p>
                    <form className="flex items-center">
                        <input
                            placeholder="College Name"
                            required
                            type="text"
                            className="flex-grow  h-12 px-4 text-gray-700 transition duration-200 border-2 border-transparent rounded appearance-none md:mr-2 md:mb-0 bg-purple-200 focus:border-purple-700 focus:outline-none focus:shadow-outline"
                        />
                        <a
                            href="/"
                            className="inline-flex items-center justify-center  h-12 px-6 font-semibold tracking-wide text-teal-900 transition duration-200 rounded shadow-md md:w-auto hover:text-purple-900 bg-purple-400 hover:bg-purple-700 focus:shadow-outline focus:outline-none"
                        >
                            Search
                        </a>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Banner;