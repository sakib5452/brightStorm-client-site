import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { imageUpload } from "../../api/utils";
import { addApply } from "../../api/apply";


const Candidate = () => {

    const [number, setNumber] = useState();

    const navigate = useNavigate()
    const [uploadButtonText, setUploadButtonText] = useState('Upload Image')

    const handleSubmit = event => {
        event.preventDefault()
        const name = event.target.name.value
        const price = event.target.price.value
        const seats = event.target.seats.value
        const address = event.target.address.value
        const candidateName = event.target.candidateName.value
        const email = event.target.email.value
        const image = event.target.image.files[0]
        setUploadButtonText('Uploading...')
        // Upload image
        imageUpload(image)
            .then(data => {
                const applyData = {

                    name,
                    address,
                    candidateName,
                    email,
                    price: parseFloat(price),
                    seats,
                    image: data.data.display_url,


                }

                // post classes data to server
                addApply(applyData)
                    .then(data => {
                        console.log(data)
                        setUploadButtonText('Uploaded!')
                        Swal.fire({
                            position: 'center',
                            icon: 'success',
                            title: 'Apply Done!',
                            showConfirmButton: false,
                            timer: 1500
                        })
                        navigate('/')
                    })
                    .catch(err => console.log(err))

                console.log(applyData)
                event.target.reset();
            })
            .catch(err => {
                console.log(err.message)
                event.target.reset();

            })
    }

    const handleImageChange = image => {
        console.log(image)
        setUploadButtonText(image.name)
    }

    const handleNumberChange = (event) => {
        const inputNumber = parseFloat(event.target.value);
        if (inputNumber < 0) {
            event.target.value = '';
            // Do not update the state for negative numbers

        }
        else {
            setNumber(inputNumber);
        }

    };

    return (
        <div className="flex h-screen items-center justify-center mt-20 mb-20">
            <div className="grid bg-white rounded-lg shadow-xl w-11/12 md:w-9/12 lg:w-1/2">
                <form onSubmit={handleSubmit}>
                    <div className="flex justify-center py-4">
                        <div className="flex bg-purple-200 rounded-full md:p-4 p-2 border-2 border-purple-300">
                            <Link
                                aria-label="Najmus Sport Academies"
                                title="Najmus Sport Academies"
                                className="inline-flex items-center"
                            >
                                <img src='' alt="" />
                                <span className="ml-2 text-xl font-bold tracking-wide uppercase">
                                    <span className="text-xl font-bold tracking-wide text-green-400 uppercase">
                                        BRIGHT
                                    </span>
                                    <span className="text-xl font-bold tracking-wide text-red-400 uppercase">STORM</span>
                                </span>
                            </Link>
                        </div>
                    </div>

                    <div className="flex justify-center">
                        <div className="flex">
                            <h1 className="text-gray-600 font-bold md:text-2xl text-xl">Apply College</h1>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 mt-5 mx-7">
                        <label className="uppercase md:text-sm text-xs text-gray-500 text-light font-semibold">Subject Name</label>
                        <input className="py-2 px-3 rounded-lg border-2 border-purple-300 mt-1 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" type="text" placeholder="Subject Name" name="name" />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-8 mt-5 mx-7">
                        <div className="grid grid-cols-1">
                            <label className="uppercase md:text-sm text-xs text-gray-500 text-light font-semibold">Candidate Name</label>
                            <input className="py-2 px-3 rounded-lg border-2 border-purple-300 mt-1 focus:outline-none focus:ring-2  focus:ring-purple-600 focus:border-transparent" type="text" placeholder="Candidate Name" name='candidateName' />
                        </div>
                        <div className="grid grid-cols-1">
                            <label className="uppercase md:text-sm text-xs text-gray-500 text-light font-semibold">Candidate Email</label>
                            <input className="py-2 px-3 rounded-lg border-2 border-purple-300 mt-1 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" type="email" placeholder="Candidate Email" name='email' />
                        </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-8 mt-5 mx-7">
                        <div className="grid grid-cols-1">
                            <label className="uppercase md:text-sm text-xs text-gray-500 text-light font-semibold">Phone Number </label>
                            <input className="py-2 px-3 rounded-lg border-2 border-purple-300 mt-1 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" type="number" placeholder="Phone Number" name='price' value={number} onChange={handleNumberChange} />
                        </div>
                        <div className="grid grid-cols-1">
                            <label className="uppercase md:text-sm text-xs text-gray-500 text-light font-semibold">Date of Birth</label>
                            <input className="py-2 px-3 rounded-lg border-2 border-purple-300 mt-1 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" type="text" placeholder="Date of Birth" name='seats' />
                        </div>
                    </div>

                    <div className="grid grid-cols-1 mt-5 mx-7">
                        <label className="uppercase md:text-sm text-xs text-gray-500 text-light font-semibold">Address</label>
                        <input className="py-2 px-3 rounded-lg border-2 border-purple-300 mt-1 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" type="text" placeholder="Address" name="address" />
                    </div>
                    <div className="grid grid-cols-1 mt-5 mx-7">
                        <label className="uppercase md:text-sm text-xs text-gray-500 text-light font-semibold mb-1">Upload Photo</label>
                        <div className='flex items-center justify-center w-full'>
                            <label className='flex flex-col border-4 border-dashed w-full h-32 hover:bg-gray-100 hover:border-purple-300 group'>
                                <div className='flex flex-col items-center justify-center pt-7'>
                                    <svg className="w-10 h-10 text-purple-400 group-hover:text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
                                    <p className='lowercase text-sm text-gray-400 group-hover:text-purple-600 pt-1 tracking-wider'>  {uploadButtonText}</p>
                                </div>
                                <input onChange={event => {
                                    handleImageChange(event.target.files[0])
                                }} type='file' className="hidden" name="image" />
                            </label>
                        </div>
                    </div>

                    <div className='flex items-center justify-center md:gap-8 gap-4 pt-5 pb-5'>
                        <button className='w-auto bg-purple-500 hover:bg-purple-700 rounded-lg shadow-xl font-medium text-white px-4 py-2'>Submit</button>
                    </div>
                </form>
            </div>
        </div>

    );
};

export default Candidate;