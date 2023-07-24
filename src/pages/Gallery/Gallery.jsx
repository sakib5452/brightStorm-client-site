import pic from '../../assets/download (1).jfif'
import pic1 from '../../assets/download.jfif'
import pic2 from '../../assets/du-2.jpeg'
import pic4 from '../../assets/V3dAosyetwVaj9i6aJJyihBBbLpYByfL8O2SaR7L.jpeg'
import pic5 from '../../assets/download (2).jfif'
import pic3 from '../../assets/bdnews24-english_2022-11_a3b674a6-f66c-4ef2-9ebc-abc2f9e8c034_dhaka_university_convocation_181122_15.avif'


const Gallery = () => {

    return (
        <div className='mt-20'>
            <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
                <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
                    <span className="relative inline-block">
                        <span className="relative">Gallery</span>
                    </span>{' '}

                </h2>
                <p className="text-base text-gray-700 md:text-lg">
                    Our Admission Site provides comprehensive information about our programs, admission requirements.
                </p>
            </div>

            <div className="container mx-auto px-5 py-2 lg:px-32 lg:pt-24">
                <div className="-m-1 flex flex-wrap md:-m-2">
                    <div className="flex w-1/2 flex-wrap">
                        <div className="w-1/2 p-1 md:p-2">
                            <img
                                alt="gallery"
                                className="block h-full w-full rounded-lg object-cover object-center"
                                src={pic} />
                        </div>
                        <div className="w-1/2 p-1 md:p-2">
                            <img
                                alt="gallery"
                                className="block h-full w-full rounded-lg object-cover object-center"
                                src={pic2} />
                        </div>
                        <div className="w-full p-1 md:p-2">
                            <img
                                alt="gallery"
                                className="block h-full w-full rounded-lg object-cover object-center"
                                src={pic1} />
                        </div>
                    </div>
                    <div className="flex w-1/2 flex-wrap">
                        <div className="w-full p-1 md:p-2">
                            <img
                                alt="gallery"
                                className="block h-full w-full rounded-lg object-cover object-center"
                                src={pic3} />
                        </div>
                        <div className="w-1/2 p-1 md:p-2">
                            <img
                                alt="gallery"
                                className="block h-full w-full rounded-lg object-cover object-center"
                                src={pic4} />
                        </div>
                        <div className="w-1/2 p-1 md:p-2">
                            <img
                                alt="gallery"
                                className="block h-full w-full rounded-lg object-cover object-center"
                                src={pic5} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Gallery;