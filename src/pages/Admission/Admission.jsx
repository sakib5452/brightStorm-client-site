import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


const Admission = () => {
    const [details, setDetails] = useState([])

    useEffect(() => {
        fetch('https://brightstorm-server-site.vercel.app/college')
            .then(res => res.json())
            .then(data => { setDetails(data) })
    }, [])
    return (
        <div className="w-full mb-20">
            <h3 className="text-3xl font-semibold my-4"></h3>
            <div className="overflow-x-auto">
                <table className="table table-zebra w-full">
                    {/* head */}
                    <thead>
                        <tr >
                            <th>#</th>
                            <th></th>
                            <th>Name</th>

                            <th>Apply</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            details.map((detail, index) => <tr key={detail._id}>
                                <th>{index + 1}</th>
                                <td></td>
                                <td>{detail.collegeName}</td>
                                <td>  <Link
                                    to="/candidate"
                                    className="inline-flex items-center justify-center w-20 h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-purple-400 hover:bg-purple-700 focus:shadow-outline focus:outline-none"

                                >
                                    Apply
                                </Link></td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Admission;