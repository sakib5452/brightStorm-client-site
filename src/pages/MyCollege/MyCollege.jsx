/* eslint-disable no-unused-vars */
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { addReview } from "../../api/review";



const MyCollege = () => {

    const navigate = useNavigate()


    const handleSubmit = event => {
        event.preventDefault()
        const review = event.target.review.value
        const rating = event.target.rating.value


            // Upload image

            .then(data => {
                const applyData = {


                    review,
                    rating,



                    image: data.data.display_url,


                }

                // post classes data to server
                addReview(applyData)
                    .then(data => {
                        console.log(data)

                        Swal.fire({
                            position: 'center',
                            icon: 'success',
                            title: 'review Added!',
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

    return (
        <div className="flex h-screen items-center justify-center mb-20">
            <div className="grid bg-white rounded-lg shadow-xl w-11/12 md:w-9/12 lg:w-1/2">
                <form onSubmit={handleSubmit}>
                    <div className="flex justify-center py-4">
                        <div className="flex bg-purple-200 rounded-full md:p-4 p-2 border-2 border-purple-300">
                            <Link
                                aria-label=""
                                title=""
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

                    <div className="grid grid-cols-1 mt-5 mx-7">
                        <label className="uppercase md:text-sm text-xs text-gray-500 text-light font-semibold">Review</label>
                        <input className="py-2 px-3 rounded-lg border-2 border-purple-300 mt-1 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" type="text" placeholder="Review" name="review" />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-8 mt-5 mx-7">
                        <div className="grid grid-cols-1">
                            <label className="uppercase md:text-sm text-xs text-gray-500 text-light font-semibold">Rating  </label>
                            <input className="py-2 px-3 rounded-lg border-2 border-purple-300 mt-1 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" type="text" placeholder="Rating" name='rating' />
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

export default MyCollege;